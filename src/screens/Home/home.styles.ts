/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Header = styled.Image`
  width: 100%;
`;

export const CarouselImg = styled.Image`
  top: 20px;
`;

export const CategoryTitleWrapper = styled.View`
  margin-left: ${RFValue(12)}px;
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(18)}px;
`;

export const CategoryTitle = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: ${theme.colors.text_dark};
  font-weight: 500;
`;

export const Title = styled.Text`
  font-size: 20px;
`;

export const Content = styled.View`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
`;

export const RestaurantList = styled.FlatList``;

export const CardRestaurantView = styled.View`
  flex-grow: 1;
  width: 50%;
  align-items: center;
  /* margin-left: ${RFValue(12)}px; */
`;

export const ViewLoading = styled.View`
  height: ${RFValue(50)}px;
  justify-content: center;
`;
