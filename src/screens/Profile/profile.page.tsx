/* eslint-disable react/self-closing-comp */
import React, { useContext } from 'react';
import { Button } from 'react-native';
import AuthContext from '../../contexts/auth';

import {
  Container, Title,
} from './profile.styles';

export function Profile() {
  const { setSigned, logOut } = useContext(AuthContext)

  return (

    <Container style={{ flex: 1 }}>

      <Title>
        Profile
      </Title>
      <Button
        title="deslogar"
        onPress={() => {
          setSigned(false)
          logOut()
        }}
      />

    </Container>
  )
}
