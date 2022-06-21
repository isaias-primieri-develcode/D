/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { ScrollView } from "react-native";
import { CategoryButton, Title } from "./categories.component.style";

interface Props {
  text: string;
}

function Category({ text }: Props) {
  return (
    <CategoryButton activeOpacity={0.9}>
      <Title>{text}</Title>
    </CategoryButton>
  );
}

export function Categories() {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 4 }}
      style={{ flexDirection: "row" }}
      showsHorizontalScrollIndicator={false}
    >
      <Category text="Pizza" />
      <Category text="Churrasco" />
      <Category text="Almoço" />
      <Category text="Massas" />
      <Category text="Doces" />
      <Category text="Café" />
    </ScrollView>
  );
}
