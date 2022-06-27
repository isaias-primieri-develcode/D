/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${RFValue(64)}px;
  height: ${RFValue(24)}px;
  flex-direction: row;
  margin-bottom: ${RFValue(10)}px;
  padding-top: ${RFValue(8)}px;
  align-items: center;
  justify-content: space-between;
`;

export const QuantityView = styled.View`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  border-radius: 8px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background_red};
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_white};
  font-weight: bold;
`;

export const DeleteImage = styled.Image``;
export const AddImage = styled.Image``;
export const RemoveImage = styled.Image``;

export const TouchableOpacityView = styled.TouchableOpacity`
  width: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
  height: ${RFValue(24)}px;
`;
