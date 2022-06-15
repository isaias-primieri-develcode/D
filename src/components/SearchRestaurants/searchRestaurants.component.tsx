import React from 'react';
import {
  Container,
  ImageSearch,
  InputRestaurants,
  TextInputMod,
  ViewSearch,
} from './searchRestaurants.component.styles';

interface Props {
  onChangeText: (value: string) => void;
}

export function SearchRestaurants({onChangeText}: Props) {
  return (
    <Container>
      <InputRestaurants>
        <ViewSearch>
          <ImageSearch source={require('../../assets/imageIcons/search.png')} />
        </ViewSearch>
        <TextInputMod
          onChangeText={onChangeText}
          placeholder="Buscar restaurantes"
        />
      </InputRestaurants>
    </Container>
  );
}
