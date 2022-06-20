import styled from 'styled-components/native';

export const Container = styled.View`
justify-content: center;
align-items:center ;
background-color: ${({theme}) => theme.colors.background};
flex: 1;

`;

export const Title = styled.Text`
font-size: 20px;

`;
