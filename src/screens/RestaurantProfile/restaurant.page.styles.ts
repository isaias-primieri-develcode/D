/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Favorite = styled.Image``;

export const FavoriteIconButton = styled.TouchableOpacity`
  position: absolute;
  top: ${RFValue(23)}px;
  right: ${RFValue(20)}px;
`;

export const RestaurantMenu = styled.View`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: ${RFValue(18)}px;
`;

export const NotFoundView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const NotFoundText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Title = styled.Text`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: 18px;
`;

export const BottomLine = styled.View`
  width: 94%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.background_gray};
  margin-left: 3%;
  margin-right: 3%;
`;

export const PlateList = styled.FlatList``;
