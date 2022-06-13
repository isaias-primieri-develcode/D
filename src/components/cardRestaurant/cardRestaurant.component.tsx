/* eslint-disable global-require */
import React, {useState} from 'react';
import {
  Container,
  ImageFavorite,
  ImageRate,
  ImageRestaurant,
  RateContainer,
  TextCategories,
  TextInfo,
  TextRate,
  ViewFavorite,
  FavoriteIconButton,
  ViewInfo,
} from './cardRestaurant.styles';

interface Props {
  name: string;
  category: string;
  rate: number;
}

export function CardRestaurant({name, category, rate}: Props) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Container>
      <ImageRestaurant source={require('../../assets/images/default.png')} />
      <ViewFavorite>
        <FavoriteIconButton onPress={() => setIsPressed(!isPressed)}>
          <ImageFavorite
            source={require('../../assets/icons/favoriteRestaurant.png')}
            style={isPressed ? {tintColor: '#c20c18'} : null}
          />
        </FavoriteIconButton>
      </ViewFavorite>
      <ViewInfo>
        <TextInfo>{name}</TextInfo>
        <TextCategories>{category}</TextCategories>
        <RateContainer>
          <ImageRate source={require('../../assets/imageIcons/rateStar.png')} />
          <TextRate>{rate}</TextRate>
        </RateContainer>
      </ViewInfo>
    </Container>
  );
}
