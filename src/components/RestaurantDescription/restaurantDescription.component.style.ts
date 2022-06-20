import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Profile = styled.View`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(13)}px;
  margin-bottom: ${RFValue(26)}px;
`;

export const DescriptionView = styled.View``;

export const ImageView = styled.View``;

export const ImageRestaurant = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(50)}px;
`;

export const Title = styled.Text`
  font-weight: 400;
  color: ${({theme}) => theme.colors.text_dark};
  font-size: 18px;
`;

export const Category = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.text_gray};
`;
