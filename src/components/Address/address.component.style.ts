/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import colors from "../../global/theme";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(54)}px;
  align-items: center;
  margin-top: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  color: ${colors.colors.text_title};
  font-weight: bold;
  font-size: 16px;
`;

export const TextView = styled.View`
  width: ${RFValue(218)}px;
  height: 100%;
  justify-content: center;
`;

export const AddressText = styled.Text`
  color: ${colors.colors.text_gray};
  font-size: 10px;
  font-weight: 400;
`;

export const Text = styled.Text`
  color: ${colors.colors.text_title};
  font-size: 10px;
  font-weight: 400;
`;

export const MapImage = styled.Image`
  margin-right: ${RFValue(8)}px;
`;

export const ArrowImage = styled.Image`
  position: absolute;
  right: ${RFValue(16)}px;
  top: ${RFValue(32)}px;
`;

export const AddressView = styled.View`
  width: 90%;
  height: ${RFValue(54)}px;
  align-items: center;
  flex-direction: row;
`;
