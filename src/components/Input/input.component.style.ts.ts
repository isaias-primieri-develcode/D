import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ViewInput = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-top: 12px;
  border: 1px;
  background-color: ${({theme}) => theme.colors.background};
  border-color: ${({theme}) => theme.colors.border_color};
  align-items: center;
  align-self: center;
  flex-direction: row;
`;

export const InputIcon = styled.Image`
  margin-left: ${RFValue(10)}px;
`;

export const ValueInput = styled.TextInput`
  width: 88%;
  height: 50px;
  margin-left: ${RFValue(5)}px;
  border-radius: 10px;
  border-color: ${({theme}) => theme.colors.border_color};
`;

export const HiddenPassword = styled.TouchableOpacity`
  position: absolute;
  right: ${RFValue(17.4)}px;
`;
