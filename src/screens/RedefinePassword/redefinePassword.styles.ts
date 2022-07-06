import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
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

export const WomanImage = styled.Image`
  margin-top: ${RFValue(90)}px;
`;

export const TextView = styled.View`
  width: ${RFValue(230)}px;
  height: ${RFValue(50)}px;
  margin-top: ${RFValue(36)}px;
  margin-bottom: ${RFValue(60)}px;
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

export const TextInfo = styled.Text`
  font-size: 12px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.text_gray};
  font-weight: 700;
`;
