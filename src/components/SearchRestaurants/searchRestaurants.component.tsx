/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React from 'react'
import {
  Container,
  ImageSearch,
  InputRestaurants,
  TextInputMod,
  ViewSearch,
} from './searchRestaurants.component.styles'


export function SearchRestaurants() {
  return (
    <Container>
      <InputRestaurants>
        <ViewSearch>
          <ImageSearch source={require('../../assets/imageIcons/search.png')} />
        </ViewSearch>
        <TextInputMod placeholder="Buscar restaurantes" />
      </InputRestaurants>
    </Container>
  )
}
