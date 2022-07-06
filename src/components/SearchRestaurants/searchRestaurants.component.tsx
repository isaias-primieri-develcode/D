/* eslint-disable quotes */
import React from "react";
import theme from "../../global/theme";
import {
  Container,
  ImageSearch,
  InputRestaurants,
  TextInputMod,
  ViewSearch,
} from "./searchRestaurants.component.styles";

interface Props {
  onChangeText: (value: string) => void;
  text: string;
}

export function SearchRestaurants({ onChangeText, text }: Props) {
  return (
    <Container>
      <InputRestaurants>
        <ViewSearch>
          <ImageSearch source={theme.icons.Search} />
        </ViewSearch>
        <TextInputMod onChangeText={onChangeText} placeholder={text} />
      </InputRestaurants>
    </Container>
  );
}
