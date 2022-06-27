/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const CategoryButton = styled.TouchableOpacity`
  width: ${RFValue(99)}px;
  height: ${RFValue(28)}px;
  border-radius: 16px;
  background-color: #c20c18;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  margin-left: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_white};
  font-weight: 500;
`;
