/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';
import {CardRestaurant} from '../../components/cardRestaurant/cardRestaurant.component';
import {BannerHomeImage} from '../../components/Carousel/carousel.component';
import {Categories} from '../../components/categories/categories.component';
import {SearchRestaurants} from '../../components/SearchRestaurants/searchRestaurants.component';
import {Load} from '../../components/ViewLoading/viewLoading.component';
import {useAuth} from '../../contexts/auth';
import api from '../../service/api';

import {
  Container,
  RestaurantList,
  CategoryTitleWrapper,
  CategoryTitle,
  Content,
  CardRestaurantView,
  Header,
  ViewLoading,
} from './home.styles';

interface Response {
  id: number;
  name: string;
  photo: string;
}

interface RestaurantListProps {
  content: Response[];
  totalPages: number;
}

export function Home() {
  const {authState} = useAuth();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({
    page : 0,
    name : '',
  });
  const [loading, setLoading] = useState(false);
  async function fetchData(
    onSuccess?: (response: RestaurantListProps) => void,
  ) {
    setLoading(true);
    try {
      await api
        .get<RestaurantListProps>(`/restaurant/filter?name=${search.name}&page=${search.page}&quantity=10`, {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        })
        .then((response: any) => {
          setData(response.data);
          onSuccess && onSuccess(response.data);
        });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  function onSucces(response: any) {
    setData([...data, ...response.content] as never);
  }

  async function loadRestaurants() {
    await fetchData(onSucces);
  }

  async function handleLoadOnEnd(response: RestaurantListProps) {
    if (response.totalPages !== search.page ){
    setSearch({...search, page : search.page + 1});
  }
  }

  function handleSearch(value:string) {
    if (value.length > 1) {
      setData([]);
      setSearch({name: value, page: 0});
    }
    else {
      setData([]);
      setSearch({name: '', page: 0});
    }

  }
  const debounced = useDebouncedCallback(value => {
    handleSearch(value);
  }, 1500);

  useEffect(() => {
    loadRestaurants();
  }, [search]);

  return (
    <>
      <Container>
          <StatusBar barStyle="dark-content" backgroundColor="#c20c18" />
        <RestaurantList
          data={data}
          keyExtractor={(item: any) => item.id}
          ListHeaderComponent={
            <>
            <Header source={require('../../assets/homeImages/header.png')}/>

            <BannerHomeImage />
            <CategoryTitleWrapper>
            <CategoryTitle>Categorias</CategoryTitle>
            </CategoryTitleWrapper>
            <Categories />
            <Content>
            <SearchRestaurants
            onChangeText={(value) => debounced(value)}
            />
            </Content>
            </>
          }
          numColumns={2}
          renderItem={({item}: any) => (
            <CardRestaurantView>
              <CardRestaurant name={item.name} category="Pizza" rate={4.3} />
            </CardRestaurantView>
          )}
          onEndReached={(value: any) => handleLoadOnEnd(value)}

          ListFooterComponent={
            <ViewLoading>
            {loading ? <Load /> : null}
            </ViewLoading>
          }
        />
      </Container>
    </>
  );
}
