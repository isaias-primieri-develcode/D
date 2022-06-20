import React from 'react';
import {
  Category,
  DescriptionView,
  ImageRestaurant,
  ImageView,
  Profile,
  Title,
} from './restaurantDescription.component.style';

interface Props {
  source: any;
  name: string;
  id: string;
}

export function RestaurantDescription({name, id, source}: Props) {
  return (
    <Profile>
      <DescriptionView>
        <Title>{name}</Title>
        <Category>
          {id.charAt(0).toUpperCase() + id.slice(1).toLowerCase()}
        </Category>
      </DescriptionView>
      <ImageView>
        <ImageRestaurant source={source} />
      </ImageView>
    </Profile>
  );
}
