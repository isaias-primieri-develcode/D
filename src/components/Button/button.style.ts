import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import colors from '../../global/theme';

export const Container = styled.View`
  width: ${RFValue(295)}px;
  height: 50px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
  justify-content: center;
`;

export const AppButton = styled.TouchableOpacity`
  background-color: ${colors.colors.button};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  width: 100%;
  height: 100%;
`;
export const Title = styled.Text`
  color: ${colors.colors.text_white};
  font-weight: bold;
  font-size: 16px;
`;
