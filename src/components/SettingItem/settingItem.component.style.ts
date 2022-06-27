import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import colors from "../../global/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${RFValue(16)}px;
  border-bottom: 16px;
  border-top: 8px;
`;

export const ViewIcon = styled.View`
  width: ${RFValue(42)}px;
  height: ${RFValue(42)}px;
  background-color: ${colors.colors.background};
  border-color: ${colors.colors.border_color};
  justify-content: center;
  position: absolute;
  right: ${RFValue(0)}px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border_color};
`;

export const ViewInfo = styled.View`
  width: ${RFValue(156)}px;
  height: ${RFValue(69)}px;
  border-radius: 8px;
  border-color: ${colors.colors.border_color};
  top: ${RFValue(104)}px;
  position: absolute;
  background-color: white;
`;

export const Title = styled.Text`
  position: absolute;
  bottom: ${RFValue(34)}px;
  left: ${RFValue(12)}px;
  font-size: 14px;
  font-weight: ${RFValue(16)}px;
  font-weight: 500;
  color: ${colors.colors.text_dark};
`;

export const Icon = styled.Image`
  width: ${RFValue(10)}px;
  height: ${RFValue(10)}px;
`;
