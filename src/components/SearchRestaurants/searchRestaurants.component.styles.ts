import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import colors from '../../global/theme';

export const Container = styled.View`
  width: 100%;
  align-self: center;
  background-color: ${({theme}) => theme.colors.background};
  margin-top: ${RFValue(12)}px;
`;

export const InputRestaurants = styled.View`
  height: ${RFValue(50)}px;
  border: ${RFValue(1)}px;
  border-color: ${colors.colors.border_color};
  border-radius: 10px;
  flex-direction: row;
`;

export const ImageSearch = styled.Image`
  margin-left: ${RFValue(17)}px;
  margin-top: ${RFValue(17)}px;
  margin-right: ${RFValue(5)}px;
`;

export const ViewSearch = styled.View``;

export const TextInputMod = styled.TextInput`
  width: ${RFValue(285)}px;
`;
