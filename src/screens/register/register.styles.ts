import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  align-items: center;
  flex: 1;
`;
export const Content = styled.View`
  background-color: #fff;
  align-items: center;
  width: ${RFValue(295)}px;
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

export const Ketchup = styled.Image`
  position: absolute;

  bottom: 0px;
`;

export const TextView = styled.View`
  width: 273px;
  height: 42px;
  margin-bottom: 60px;

  align-items: flex-start;
  justify-content: center;
`;


export const NicknameWrapper = styled.View`
  width: 56%;
  margin-right: 2%;
`;
export const CepWrapper = styled.View`
  width: 42%;
`;
export const InputView = styled.View`
  width: 48%;
  margin-right: 2%;


`;
export const InputSecondView = styled.View`
  width: 48%;
  margin-left: 2%;


`;

