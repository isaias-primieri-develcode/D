/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${RFValue(150)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const ImageBanner = styled.Image`
  height: ${RFValue(120)}px;
  width: ${RFValue(340)}px;
  margin-top: ${RFValue(12)}px;
  margin-right: ${RFValue(8)}px;

  border-radius: 8px;
`;
export const ViewCircles = styled.View`
  align-items: center;
`;
export const ViewCirclesGroup = styled.View`
  flex-direction: row;
`;
export const ImageCircle = styled.Image``;

export const IndicatorView = styled.View`
  align-items: center;
  margin-top: 4px;
`;
