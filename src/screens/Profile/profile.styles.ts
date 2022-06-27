/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const EditorText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text_gray};
`;

export const EditorImage = styled.Image`
  margin-left: ${RFValue(3)}px;
`;

export const EditorView = styled.TouchableOpacity`
  flex-direction: row;
`;

export const TitleView = styled.View`
  margin-top: ${RFValue(14)}px;
  margin-left: ${RFValue(24)}px;
  height: ${RFValue(40)}px;
  justify-content: space-between;
`;

export const ProfileHeader = styled.View`
  width: 100%;
  padding-top: ${RFValue(10)}px;
  padding-left: ${RFValue(14)}px;

  flex-direction: row;
`;

export const ImageView = styled.View`
  width: 18.3%;
  height: 79px;
`;

export const UserImage = styled.Image`
  border-color: ${({ theme }) => theme.colors.icon_gray};
  border-width: 1px;
  width: ${RFValue(62)}px;
  height: ${RFValue(62)}px;
  border-radius: ${RFValue(10)}px;
`;
