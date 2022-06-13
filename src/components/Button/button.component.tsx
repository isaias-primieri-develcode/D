import {
  View, TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {
  AppButton,
  Container, Title,
} from './button.style';

interface Props extends TouchableOpacityProps {
    title: string,

}

export function ButtonLogin({ title, ...rest } : Props) {
  return (
    <Container>
      <AppButton
        {...rest}
      >
        <View>
          <Title>
            {title}
          </Title>
        </View>
      </AppButton>
    </Container>
  )
}
