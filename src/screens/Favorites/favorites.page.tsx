/* eslint-disable quotes */
import React from "react";
import { Button } from "react-native";
import { useAuth } from "../../contexts/auth";

import { Container } from "./favorites.styles";

export function Favorites() {
  const { authState } = useAuth();

  return (
    <Container>
      <Button title="add" onPress={() => console.log(authState)} />
    </Container>
  );
}
