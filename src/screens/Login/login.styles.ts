import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
background-color: ${({theme}) => theme.colors.background};
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const Content = styled.View`
  width: ${RFValue(295)}px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const Xburguer = styled.Image`
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const Pizza = styled.Image`
  position: absolute;
  right: 0px;
  top: 0px;
`;

export const Logo = styled.Image`
  margin-top: ${RFValue(50)}px;
`;

export const Ketchup = styled.Image`
  position: absolute;
  bottom: 0px;
`;
