/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Button} from 'react-native';
import {useAuth} from '../../contexts/auth';

import {Container, Title} from './favorites.styles';

export function Favorites() {
  const {authState} = useAuth();

  return (
    <Container style={{flex: 1}}>
      <Button title="add" onPress={() => console.log(authState)} />

      <Title>Favorites</Title>
    </Container>
  );
}
