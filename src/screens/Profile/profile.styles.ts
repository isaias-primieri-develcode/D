import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background};
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
`;
