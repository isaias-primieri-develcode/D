/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState} from 'react';
import {Image, StatusBar, View} from 'react-native';
import {CardRestaurant} from '../../components/cardRestaurant/cardRestaurant.component';
import {BannerHomeImage} from '../../components/Carousel/carousel.component';
import {Categories} from '../../components/categories/categories.component';
import {Header} from '../../components/Headers/header.component';
import {SearchRestaurants} from '../../components/SearchRestaurants/searchRestaurants.component';
import {Load} from '../../components/ViewLoading/viewLoading.component';
import {useAuth} from '../../contexts/auth';
import theme from '../../global/theme';
import api from '../../service/api';

import {
  Container,
  RestaurantList,
  CategoryTitleWrapper,
  CategoryTitle,
  Content,
} from './home.styles';

interface Response {
  id: number;
  name: string;
  photo: string;
}

interface RestaurantListProps {
  content: Response[];
}

export function Home() {
  const {authState} = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  async function fetchData(
    onSuccess?: (response: RestaurantListProps) => void,
  ) {
    setLoading(true);
    try {
      await api
        .get<RestaurantListProps>(`/restaurant?page=${page}&quantity=10`, {
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
    setPage(1);
  }

  async function handleLoadOnEnd() {
    await fetchData(onSucces);
    setPage(page + 1);
  }

  useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <>
      <Container>
          <StatusBar barStyle="dark-content" backgroundColor="#c20c18" />
        <RestaurantList
          data={data}
          keyExtractor={(item: any) => item.id}
          ListHeaderComponent={
            <>
            <View style={{alignItems: 'center', backgroundColor: '#c20c18'}}>
            <Image source={require('../../assets/homeImages/header.png')} style={{width: '100%'}}/>

            </View>
            <BannerHomeImage />
            <CategoryTitleWrapper>
            <CategoryTitle>Categorias</CategoryTitle>
            </CategoryTitleWrapper>
            <Categories />
            <Content>
            <SearchRestaurants />
            </Content>
            </>
          }
          numColumns={2}
          renderItem={({item}: any) => (
            <View style={{flexGrow: 1, marginLeft: 14}}>
              <CardRestaurant name={item.name} category="Pizza" rate={4.3} />
            </View>
          )}
          onEndReached={() => handleLoadOnEnd()}

          ListFooterComponent={
            <View style={{height: 50, justifyContent: 'center'}}>
            {loading ? <Load /> : null}
            </View>
          }
        />
        
      </Container>
    </>
  );
}
