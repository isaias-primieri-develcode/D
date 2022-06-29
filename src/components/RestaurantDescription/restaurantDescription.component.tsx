/* eslint-disable quotes */
import React from "react";
import {
  Category,
  DescriptionView,
  ImageRestaurant,
  ImageView,
  Profile,
  Title,
} from "./restaurantDescription.component.style";

interface Props {
  source: any;
  name: string;
  category: string;
}

export function RestaurantDescription({ name, category, source }: Props) {
  return (
    <Profile>
      <DescriptionView>
        <Title>{name}</Title>
        <Category>
          {category
            ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
            : "nao carregou"}
        </Category>
      </DescriptionView>
      <ImageView>
        <ImageRestaurant source={source} />
      </ImageView>
    </Profile>
  );
}
