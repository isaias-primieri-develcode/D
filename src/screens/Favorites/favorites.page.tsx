/* eslint-disable quotes */
import React from "react";
import { Button } from "react-native";
import { useAuth } from "../../contexts/auth";
import { useCart } from "../../contexts/cart";

import { Container, Title } from "./favorites.styles";

export function Favorites() {
  const { authState } = useAuth();
  const { cartItems } = useCart();

  return (
    <Container>
      <Button title="add" onPress={() => console.log(authState)} />
      <Title>{cartItems}</Title>
    </Container>
  );
}
