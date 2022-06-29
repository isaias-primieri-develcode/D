import React from 'react';
import {Image} from 'react-native';
import {BackButton, Container, TextView, Title} from './header.component.style';

interface Props {
  color: string;
  name: string;
  onPress?: () => void;
  source: any;
  Textcolor?: string;
  iconColor?: string;
}

export function Header({color, name, onPress, source, Textcolor, iconColor}: Props) {
  return (
    <Container style={{backgroundColor: color}}>
      <BackButton onPress={onPress}>
        <Image style={{ tintColor: iconColor}} source={source} />
      </BackButton>
      <TextView>
        <Title style={{color: Textcolor}}>{name}</Title>
      </TextView>
    </Container>
  );
}
