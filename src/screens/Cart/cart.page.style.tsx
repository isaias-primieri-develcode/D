/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const BorderLine = styled.View`
  height: 1px;
  background-color: ${theme.colors.background_gray};
  width: 90%;
  align-self: center;
`;

export const ListTitle = styled.Text`
  font-size: 18px;
  color: ${theme.colors.text_dark};
`;

export const ListTitleView = styled.View`
  height: ${RFValue(70)}px;
  align-items: center;
  justify-content: center;
`;

export const ListView = styled.View`
  width: 90%;
  align-self: flex-end;
  top: ${RFValue(250)}px;
  position: absolute;
  height: 100%;
  background-color: ${theme.colors.primary};
  border-top-left-radius: 72px;
`;

export const CartList = styled.FlatList`
  width: 90%;
  margin-left: 10%;
  margin-top: ${RFValue(70)}px;
`;

export const FooterComponent = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;
`;
