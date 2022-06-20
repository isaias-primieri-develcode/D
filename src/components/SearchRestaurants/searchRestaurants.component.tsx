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
  text: string;
}

export function SearchRestaurants({onChangeText, text}: Props) {
  return (
    <Container>
      <InputRestaurants>
        <ViewSearch>
          <ImageSearch source={require('../../assets/imageIcons/search.png')} />
        </ViewSearch>
        <TextInputMod onChangeText={onChangeText} placeholder={text} />
      </InputRestaurants>
    </Container>
  );
}
