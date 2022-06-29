/* eslint-disable quotes */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useAuth } from "../../contexts/auth";
import { useCart } from "../../contexts/cart";
import theme from "../../global/theme";
import api from "../../service/api";
import {
  CartIcon,
  CartIconView,
  CartText,
  CartView,
  Container,
  PriceText,
  PriceView,
} from "./finishCart.component.style";

interface Props {
  BottomBar: boolean;
}

export function FinishCart({ BottomBar }: Props) {
  const { totalPrice, cartItems, restaurantId, handleDeleteAllCart } =
    useCart();
  const { authState } = useAuth();
  const navigation = useNavigation();
  function priceConverter() {
    const priceWZeros = parseFloat(String(totalPrice)).toFixed(2);
    const priceFormatted = priceWZeros.toString().replace(".", ",");
    return priceFormatted;
  }
  const priceFormatted = priceConverter();

  async function handlePost() {
    const costumerIdData = await api.get("/auth", {
      headers: {
        Authorization: `Bearer ${authState.token}`,
      },
    });
    api
      .post(
        "/request",
        {
          costumer: { id: costumerIdData.data.id },
          restaurant: { restaurantId },
          date: "2022-05-10 14:40:22",
          dateLastUpdated: "2022-05-10 14:40:22",
          totalValue: totalPrice,
          paymentType: "card",
          status: "PEDIDO_REALIZADO",
          requestItems: cartItems,
          restaurantPromotion: null,
        },
        {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    handleDeleteAllCart();
    navigation.navigate("Home");
  }

  return (
    <Container bottom={BottomBar ? RFValue(45) : RFValue(0)}>
      <CartView onPress={() => handlePost()}>
        <CartIconView>
          <CartIcon source={theme.icons.Money} />
        </CartIconView>
        <CartText>Finalizar Pedido</CartText>
        <PriceView>
          <PriceText>R${priceFormatted}</PriceText>
        </PriceView>
      </CartView>
    </Container>
  );
}
