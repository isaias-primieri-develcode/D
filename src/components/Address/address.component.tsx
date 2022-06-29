/* eslint-disable quotes */
import React from "react";
import theme from "../../global/theme";
import {
  AddressText,
  AddressView,
  ArrowImage,
  Container,
  MapImage,
  Text,
  TextView,
  Title,
} from "./address.component.style";

export function Address() {
  return (
    <Container>
      <AddressView>
        <MapImage source={theme.icons.Map} />
        <TextView>
          <AddressText>Entrega em:</AddressText>
          <Title>Rua Arcy da Nobrega 667</Title>
          <Text>Panazollo - Apto: 107</Text>
        </TextView>
        <ArrowImage source={theme.icons.Arrow} />
      </AddressView>
    </Container>
  );
}
