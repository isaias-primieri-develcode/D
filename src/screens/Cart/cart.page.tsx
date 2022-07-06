/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StatusBar, View } from "react-native";
import { Address } from "../../components/Address/address.component";
import { FinishCart } from "../../components/FinishCart/finishCart.component";
import { Header } from "../../components/Headers/header.component";
import { Plate } from "../../components/Plate/plate.component";
import { RestaurantDescription } from "../../components/RestaurantDescription/restaurantDescription.component";
import { useAuth } from "../../contexts/auth";
import { useCart } from "../../contexts/cart";
import theme from "../../global/theme";
import api from "../../service/api";
import {
  BorderLine,
  Container,
  FooterComponent,
  ListTitle,
  ListTitleView,
  ListView,
  NotFoundText,
  NotFoundView,
} from "./cart.page.style";

interface PlateProps {
  id: number;
  price: number;
}
interface CartItemProps {
  plate: PlateProps;
  quantity: number;
  observation: string;
  price: number;
  photo: string;
  name: string;
}

interface Photo {
  id: number;
  code: string;
}

export function Cart() {
  const navigation = useNavigation();
  const { cartItems, restaurantId, restaurant, restaurantVerify } = useCart();
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
        .then((response) => {
          setPhoto(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    restaurantVerify();
  }, []);

  useEffect(() => {
    FetchPhoto();
  }, []);

  return (
    <Container>
      <StatusBar
        backgroundColor={theme.colors.background_red}
        barStyle={"light-content"}
      />
      <Header
        color={theme.colors.background_red}
        name="Compras"
        source={theme.icons.Close}
        iconColor={theme.colors.background}
        Textcolor={theme.colors.text_white}
        onPress={() => {
          navigation.goBack();
          restaurantVerify();
        }}
      />
      {cartItems.length === 0 ? (
        <NotFoundView>
          <Image source={theme.icons.CartNotFound} />
          <NotFoundText>Seu carrinho está vazio</NotFoundText>
        </NotFoundView>
      ) : (
        <>
          <Address />
          <BorderLine />
          <RestaurantDescription
            category={restaurant.food_types}
            name={restaurant.name}
            source={
              photo.code
                ? { uri: `${photo.code}` }
                : theme.icons.DefaultRestaurant
            }
          />
          <ListView>
            <ListTitleView>
              <ListTitle>Meus Itens</ListTitle>
            </ListTitleView>
          </ListView>
          <FlatList
            style={{ width: "90%", marginLeft: "10%", marginTop: 70 }}
            data={cartItems}
            ListFooterComponent={() => <FooterComponent />}
            keyExtractor={(item: CartItemProps) => item.plate.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  width: "100%",
                  marginLeft: "5%",
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
        </>
      )}
    </Container>
  );
}
