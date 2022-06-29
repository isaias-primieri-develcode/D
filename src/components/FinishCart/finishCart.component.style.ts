/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface Props {
  bottom: number;
}

export const Container = styled.View`
  position: absolute;
  bottom: ${(props: Props) => (props.bottom ? props.bottom : 0)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  height: ${RFValue(64)}px;
  align-items: center;
  justify-content: center;
`;

export const CartView = styled.TouchableOpacity`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.background_red};
  height: ${RFValue(40)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
`;

export const CartIcon = styled.Image``;

export const CartIconView = styled.View`
  width: ${RFValue(32)}px;
  margin-left: ${RFValue(10)}px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const CartText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text_white};
`;

export const PriceView = styled.View`
  padding-right: ${RFValue(12)}px;
`;

export const PriceText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text_white};
  font-weight: 700;
`;
