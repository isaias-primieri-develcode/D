/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const DescriptionView = styled.View`
  align-items: center;
  justify-content: center;
  width: ${RFValue(235)}px;
  margin-bottom: ${RFValue(30)}px;
  margin-top: ${RFValue(35)}px;
`;

export const Description = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text_gray};
`;

export const Title = styled.Text`
  font-size: 28px;
  margin-bottom: ${RFValue(35)}px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const OrderCompleteImage = styled.Image`
  align-self: center;
`;
