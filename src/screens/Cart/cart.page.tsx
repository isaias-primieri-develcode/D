/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Address } from "../../components/Address/address.component";
import { FinishCart } from "../../components/FinishCart/finishCart.component";
import { Header } from "../../components/Headers/header.component";
import { Plate } from "../../components/Plate/plate.component";
import { RestaurantDescription } from "../../components/RestaurantDescription/restaurantDescription.component";
import { useAuth } from "../../contexts/auth";
import { useCart } from "../../contexts/cart";
// import { useCart } from "../../contexts/cart";
import theme from "../../global/theme";
import api from "../../service/api";
import {
  BorderLine,
  CartList,
  Container,
  FooterComponent,
  ListTitle,
  ListTitleView,
  ListView,
} from "./cart.page.style";

interface Photo {
  id: number;
  code: string;
}

export function Cart() {
  const navigation = useNavigation();
  const { cartItems, restaurantId, restaurantVerification, restaurant } =
    useCart();
  const [photo, setPhoto] = useState<Photo>([]);
  const { authState } = useAuth();

  function FetchPhoto() {
    try {
      api
        .get(restaurant.photo_url, {
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

  useEffect(() => {
    FetchPhoto();
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.background_red} />
      <Header
        color={theme.colors.background_red}
        name="Compras"
        source={theme.icons.Close}
        iconColor={theme.colors.background}
        Textcolor={theme.colors.text_white}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Address />
      <BorderLine />
      <RestaurantDescription
        category={restaurant.food_types}
        name={restaurant.name}
        source={
          photo.code ? { uri: `${photo.code}` } : theme.icons.DefaultRestaurant
        }
      />
      <ListView>
        <ListTitleView>
          <ListTitle>Meus Itens</ListTitle>
        </ListTitleView>
      </ListView>
      <CartList
        data={cartItems}
        ListFooterComponent={() => <FooterComponent />}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <View
            style={{
              width: "90%",
              alignItems: "center",
              marginHorizontal: "5%",
            }}
          >
            <Plate
              swipeDelete
              right={false}
              platePhoto={item.photo}
              restaurantId={restaurantId}
              id={item.plate.id}
              source={item.photo}
              name={item.name}
              description={item.observation}
              price={item.plate.price}
            />
          </View>
        )}
      />
      <FinishCart BottomBar={false} />
    </Container>
  );
}
