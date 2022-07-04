/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.View.attrs({
  elevation: 15,
})`
  width: 90%;
  height: ${RFValue(100)}px;
  padding-left: ${RFValue(14)}px;
  padding-right: 5%;
  padding-top: ${RFValue(18)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  border-radius: 8px;
  margin-top: ${RFValue(13)}px;
  margin-bottom: ${RFValue(6)}px;
`;

export const DescriptionView = styled.View`
  margin-top: ${RFValue(5)}px;
  margin-left: ${RFValue(13)}px;
  width: ${RFValue(260)}px;
`;

export const ImageView = styled.View`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(50)}px;
  align-items: center;
  justify-content: center;
`;

export const ImageRestaurant = styled.Image`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border-radius: ${RFValue(50)}px;
`;

export const Title = styled.Text`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: 18px;
`;

export const Name = styled.Text`
  font-size: 12px;
  margin-bottom: ${RFValue(6)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const OrderStatus = styled.Text`
  font-size: 10px;
  margin-bottom: ${RFValue(6)}px;
  margin-left: ${RFValue(12)}px;
  margin-right: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_gray};
`;

export const OrderNumber = styled.Text`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.text_gray};
`;

export const OrderInfo = styled.View`
  flex-direction: row;
`;

export const CheckIcon = styled.Image``;

export const Observation = styled.Text`
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text_gray};
`;
