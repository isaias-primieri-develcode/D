/* eslint-disable quotes */
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useCart } from "../../contexts/cart";
import theme from "../../global/theme";
import {
  CartIcon,
  CartIconView,
  CartText,
  CartView,
  Container,
  PriceText,
  PriceView,
  QuantityValue,
  QuantityView,
} from "./cartComponent.component.style";

interface Props {
  BottomBar: boolean;
}

export function CartComponent({ BottomBar }: Props) {
  const { totalPrice, cartQuantity } = useCart();
  function priceConverter() {
    const priceWZeros = parseFloat(String(totalPrice)).toFixed(2);
    const priceFormatted = priceWZeros.toString().replace(".", ",");
    return priceFormatted;
  }
  const priceFormatted = priceConverter();

  return (
    <Container bottom={BottomBar ? RFValue(45) : RFValue(0)}>
      <CartView>
        <CartIconView>
          <CartIcon source={theme.icons.Cart} />
          <QuantityView>
            <QuantityValue>
              {cartQuantity <= 9 ? cartQuantity : "9+"}
            </QuantityValue>
          </QuantityView>
        </CartIconView>
        <CartText>Ver Carrinho</CartText>
        <PriceView>
          <PriceText>R${priceFormatted}</PriceText>
        </PriceView>
      </CartView>
    </Container>
  );
}
