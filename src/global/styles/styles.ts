import styled, { css } from 'styled-components/native';

export const Container = styled.View`
   ${({theme}) => css `
      flex: 1;
      background-color: ${theme.colors.backgroundWater};
   `}
`;

export const Content = styled.View`
   height: 70%;
   justify-content: center;
   align-items: center;
`;

export const Footer = styled.View`
   ${({theme}) => css `
      height: 30%;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      background-color: ${theme.colors.background}
   `}
`;