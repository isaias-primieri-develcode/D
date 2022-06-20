/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, Image, StatusBar, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDebouncedCallback} from 'use-debounce';
import {Header} from '../../components/Headers/header.component';
import {Plate} from '../../components/Plate/plate.component';
import {RestaurantDescription} from '../../components/RestaurantDescription/restaurantDescription.component';
import {SearchRestaurants} from '../../components/SearchRestaurants/searchRestaurants.component';
import {useAuth} from '../../contexts/auth';
import theme from '../../global/theme';
import api from '../../service/api';
import {
  BottomLine,
  Container,
  Favorite,
  FavoriteIconButton,
  NotFoundText,
  NotFoundView,
  PlateList,
  RestaurantMenu,
  Title,
} from './restaurant.page.styles';

interface Photo {
  id: number;
  code: string;
}

interface PlatesListProps {
  id: number;
  name: string;
  description: string;
  price: string;
  // foodType: foodTypeProps;
  // restaurantName: string;
  photo_url: string;
}

export function RestaurantProfile({route}: any) {
  const {id, name, food_types, photo_url} = route.params;
  const [search, setSearch] = useState({
    name: '',
  });
  const [isPressed, setIsPressed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState<Photo>([]);
  const [data, setData] = useState<PlatesListProps[]>([]);
  const {authState} = useAuth();

  function FetchPhoto() {
    try {
      api
        .get(photo_url, {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        })
        .then((response: any) => {
          setPhoto(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData(onSuccess?: (response: PlatesListProps[]) => void) {
    setLoading(true);
    try {
      await api
        .get<PlatesListProps[]>(
          `/plate/search?name=${search.name}&restaurantid=${id}`,
          {
            headers: {
              Authorization: `Bearer ${authState.token}`,
            },
          },
        )
        .then((response: any) => {
          setData(response.data);
          onSuccess && onSuccess(response.data);
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  function onSucces(response: any) {
    setData([...data, ...response]);
  }

  async function loadRestaurants() {
    await fetchData(onSucces);
  }

  function handleSearch(value: string) {
    if (value.length > 1) {
      setData([]);
      setSearch({name: value});
    } else {
      setData([]);
      setSearch({name: ''});
    }
  }

  const debounced = useDebouncedCallback(value => {
    handleSearch(value);
  }, 1500);

  useEffect(() => {
    loadRestaurants();
    FetchPhoto();
  }, [search.name]);

  const navigation = useNavigation();
  return (
    <Container>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Header
        color="#fff"
        name=""
        Textcolor="#000"
        source={theme.icons.BackIcon}
        onPress={() => navigation.navigate('Home')}
      />
      <FavoriteIconButton onPress={() => setIsPressed(!isPressed)}>
        <Favorite
          source={require('../../assets/icons/favoriteRestaurant.png')}
          style={isPressed ? {tintColor: '#c20c18'} : null}
        />
      </FavoriteIconButton>
      <RestaurantDescription
        id={food_types}
        name={name}
        source={
          photo.code ? {uri: `${photo.code}`} : theme.icons.DefaultRestaurant
        }
      />
      <BottomLine />
      <RestaurantMenu>
        <Title>Pratos</Title>
        <SearchRestaurants
          onChangeText={text => debounced(text)}
          text={'Buscar em ' + name}
        />
      </RestaurantMenu>

      <PlateList
        ListFooterComponent={() => (
          <View
            style={{
              width: '100%',
              height: RFValue(80),
              justifyContent: 'center',
            }}>
            {loading && (
              <ActivityIndicator
                size={50}
                color={theme.colors.background_red}
              />
            )}
          </View>
        )}
        ListEmptyComponent={
          data.length == 0 && !loading ? (
            <NotFoundView>
              <Image source={theme.icons.NotFound} />
              <NotFoundText>Nenhum prato encontrado</NotFoundText>
            </NotFoundView>
          ) : null
        }
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={({item}: any) => (
          <View
            style={{
              width: '90%',
              alignItems: 'center',
              marginHorizontal: '5%',
            }}>
            <Plate
              source={item.photo_url}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          </View>
        )}
      />
    </Container>
  );
}
