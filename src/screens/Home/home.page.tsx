/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { useDebouncedCallback } from "use-debounce";
import { CardRestaurant } from "../../components/cardRestaurant/cardRestaurant.component";
import { BannerHomeImage } from "../../components/Carousel/carousel.component";
import { Categories } from "../../components/categories/categories.component";
import { SearchRestaurants } from "../../components/SearchRestaurants/searchRestaurants.component";
import { Load } from "../../components/ViewLoading/viewLoading.component";
import { useAuth } from "../../contexts/auth";
import theme from "../../global/theme";
import api from "../../service/api";

import {
  Container,
  CategoryTitleWrapper,
  CategoryTitle,
  Content,
  CardRestaurantView,
  Header,
  ViewLoading,
} from "./home.styles";

interface foodTypeProps {
  id: number;
  name: string;
}

interface Response {
  id: number;
  name: string;
  photo_url: string;
  food_types: foodTypeProps[];
}

interface RestaurantListProps {
  content: Response[];
  totalPages: number;
}

export function Home() {
  const { authState } = useAuth();
  const [data, setData] = useState<Response[]>([]);
  const [search, setSearch] = useState({
    page: 0,
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  async function fetchData(
    onSuccess?: (response: RestaurantListProps) => void
  ) {
    setLoading(true);
    try {
      await api
        .get<RestaurantListProps>(
          `/restaurant/filter?name=${search.name}&page=${search.page}&quantity=10`,
          {
            headers: {
              Authorization: `Bearer ${authState.token}`,
            },
          }
        )
        .then((response) => {
          setData(response.data.content);
          onSuccess && onSuccess(response.data);
        });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  function onSucces(response: RestaurantListProps) {
    setData([...data, ...response.content]);
  }

  async function loadRestaurants() {
    await fetchData(onSucces);
  }

  async function handleLoadOnEnd(response: RestaurantListProps) {
    if (response.totalPages !== search.page) {
      setSearch({ ...search, page: search.page + 1 });
    }
  }

  function handleSearch(value: string) {
    if (value.length > 1) {
      setData([]);
      setSearch({ name: value, page: 0 });
    } else {
      setData([]);
      setSearch({ name: "", page: 0 });
    }
  }

  function handleRestaurantProps(
    id: number,
    name: string,
    food_types: string,
    photo_url: string
  ) {
    navigation.navigate("RestaurantProfile", {
      id,
      name,
      food_types,
      photo_url,
    } as never);
  }

  const debounced = useDebouncedCallback((value) => {
    handleSearch(value);
  }, 1500);

  useEffect(() => {
    loadRestaurants();
  }, [search]);

  const renderItem = ({ item }: { item: Response }) => (
    <CardRestaurantView>
      <CardRestaurant
        name={item.name}
        id={item.id}
        category={
          item.food_types.length > 0
            ? item.food_types[0]?.name.charAt(0).toUpperCase() +
              item.food_types[0]?.name.slice(1).toLowerCase()
            : ""
        }
        rate={4.3}
        source={item.photo_url}
        onPress={() =>
          handleRestaurantProps(
            item.id,
            item.name,
            item.food_types.length > 0 ? item.food_types[0].name : "",
            item.photo_url
          )
        }
      />
    </CardRestaurantView>
  );

  return (
    <>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#c20c18" />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={
            <>
              <Header source={theme.icons.Header} />
              <BannerHomeImage />
              <CategoryTitleWrapper>
                <CategoryTitle>Categorias</CategoryTitle>
              </CategoryTitleWrapper>
              <Categories />
              <Content>
                <SearchRestaurants
                  text="Buscar Restaurantes"
                  onChangeText={(value) => debounced(value)}
                />
              </Content>
            </>
          }
          numColumns={2}
          renderItem={renderItem}
          onEndReached={(value: RestaurantListProps) => handleLoadOnEnd(value)}
          ListFooterComponent={
            <ViewLoading>{loading ? <Load /> : null}</ViewLoading>
          }
        />
      </Container>
    </>
  );
}
