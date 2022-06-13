import styled from 'styled-components/native';
import colors from '../../global/theme';

export const Container = styled.View`
background-color: #fff;
justify-content: center;
align-items:center ;
flex: 1;

`;

export const Title = styled.Text`
font-size: 16px;

`;

export const Xburguer = styled.Image`
position: absolute;
left: 0px;
top: 0px;

`;

export const Pizza = styled.Image`
position: absolute;
right: 0px;

top: 0px;

`;

export const Ketchup = styled.Image`
position: absolute;

bottom: 0px;

`;
export const ValueInput = styled.TextInput`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  margin-left: 36px;
  border-color: ${colors.colors.border_color};
  align-items: center;
  color: #222;
  justify-content: center;

`;

export const ViewInput = styled.View`

  width: 295px;
  height: 50px;
  border-radius: 10px;
  margin-top: 12px;
  border: 1px;
  background-color: rgba(255,255,255, 0.7);
  border-color: ${colors.colors.border_color};
  align-items: flex-start;
  justify-content: center;

`;

export const Password = styled.View`
  width: 18px;
  height: 22px;
  margin: 12px;
  position: absolute;
  align-items: flex-start;
  justify-content: center;

`;
