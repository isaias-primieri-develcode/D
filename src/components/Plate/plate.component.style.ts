/* eslint-disable quotes */
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface StyleProps {
  right: number;
}

export const Container = styled.View.attrs({
  elevation: 10,
})`
  width: 100%;
  height: ${RFValue(108)}px;
  background-color: ${({ theme }) => theme.colors.red};
  margin-top: ${RFValue(18)}px;
  border-radius: 8px;
`;

export const DeleteView = styled.TouchableOpacity`
  height: 100%;
  width: ${RFValue(98)}px;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const DeleteText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text_white};
`;

export const DeleteImage = styled.Image`
  tint-color: ${({ theme }) => theme.colors.text_white};
  width: ${RFValue(14)}px;
  height: ${RFValue(16)}px;
`;

export const ContentContainer = styled.View`
  width: 100%;
  height: ${RFValue(108)}px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
`;

export const Content = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(14)}px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-left: ${RFValue(6)}px;
`;

export const DescriptionView = styled.View`
  width: ${RFValue(182)}px;
  justify-content: space-between;
  margin-left: ${RFValue(16)}px;
`;

export const ChangeCartView = styled.View`
  position: absolute;
  height: ${RFValue(24)}px;
  width: ${RFValue(64)}px;
  justify-content: center;
  align-items: center;
  right: ${(props: StyleProps) => (props.right ? props.right : 0)}px;
  bottom: ${RFValue(-8)}px;
`;

export const PlatePhoto = styled.Image`
  height: ${RFValue(80)}px;
  width: ${RFValue(91)}px;
  border-radius: ${RFValue(8)}px;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: ${RFValue(4)}px;
  color: ${({ theme }) => theme.colors.background_red};
`;

export const Description = styled.Text`
  font-weight: 400;
  margin-bottom: ${RFValue(14)}px;

  font-size: 10px;
  color: ${({ theme }) => theme.colors.text_gray};
`;
export const Footer = styled.View`
  width: ${RFValue(182)}px;
  justify-content: space-between;
  flex-direction: row;
`;

export const Price = styled.Text`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const PlateAdd = styled.Text`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.background_red};
`;
