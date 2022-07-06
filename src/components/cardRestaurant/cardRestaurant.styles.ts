/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import colors from "../../global/theme";

export const Container = styled.TouchableOpacity`
  width: ${RFValue(156)}px;
  height: ${RFValue(173)}px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${RFValue(18)}px;
  border-radius: 8px;
`;

export const ViewFavorite = styled.View`
  width: ${RFValue(42)}px;
  height: ${RFValue(42)}px;
  background-color: ${colors.colors.background};
  border-bottom-left-radius: 16px;
  border-top-right-radius: 8px;
  border-color: ${colors.colors.border_color};
  justify-content: center;
  position: absolute;
  right: ${RFValue(0)}px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border_color};
`;

export const ImageFavorite = styled.Image`
  width: ${RFValue(25)}px;
  height: ${RFValue(22)}px;
  align-self: center;
`;
export const FavoriteIconButton = styled.TouchableOpacity``;

export const ImageRestaurant = styled.Image`
  width: ${RFValue(156)}px;
  height: ${RFValue(127)}px;
  border-radius: ${RFValue(8)}px;
  position: absolute;
`;

export const ViewInfo = styled.View.attrs({
  elevation: 10,
})`
  width: ${RFValue(156)}px;
  height: ${RFValue(69)}px;
  border-radius: 8px;
  border-color: ${colors.colors.border_color};
  top: ${RFValue(104)}px;
  position: absolute;
  background-color: white;
`;

export const TextInfo = styled.Text`
  position: absolute;
  bottom: ${RFValue(34)}px;
  left: ${RFValue(12)}px;
  font-size: 14px;
  font-weight: ${RFValue(16)}px;
  font-weight: 500;
  color: ${colors.colors.text_dark};
`;

export const TextCategories = styled.Text`
  position: absolute;
  bottom: ${RFValue(13)}px;
  left: ${RFValue(12)}px;
  font-size: ${RFValue(12)}px;
  font-weight: ${RFValue(16)}px;
  font-weight: 400;
  color: ${colors.colors.text_gray};
`;

export const RateContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: ${RFValue(12)}px;
  right: ${RFValue(13)}px;
  align-items: center;
`;

export const TextRate = styled.Text`
  color: ${colors.colors.icon_red};
  margin-left: ${RFValue(5)}px;
  font-weight: 400;
`;

export const ImageRate = styled.Image`
  width: ${RFValue(10)}px;
  height: ${RFValue(10)}px;
`;
