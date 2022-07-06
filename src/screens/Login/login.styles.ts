/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
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

export const ErrorText = styled.Text`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.background_red};
`;

export const ForgotPasswordText = styled.Text`
  padding-top: ${RFValue(12)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.input_focus};
`;

export const ForgotView = styled.View`
  width: ${RFValue(295)}px;
  align-items: flex-end;
`;

export const SignText = styled.Text`
  margin-top: ${RFValue(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.input_focus};
`;

export const SignText2 = styled.Text`
  margin-top: ${RFValue(16)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background_red};
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
