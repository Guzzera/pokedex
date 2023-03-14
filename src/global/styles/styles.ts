import styled, { css } from 'styled-components/native';

//////////////////////////////////////////////////////////////////

// WELCOME => w

export const wContainer = styled.View`
   ${({theme}) => css`
      flex: 1;
      padding: 20px;
      background-color: ${theme.colors.backgroundWater};
   `}
`;

export const wContent = styled.View`
   height: 70%;
   justify-content: center;
   align-items: center;
`;

export const wWrapperAnimation = styled.View`
   ${({theme}) => css`
      width: 200px;
      height: 300px;
      background-color: ${theme.colors.types.water};
      border-radius: 100px;
      justify-content: center;
      align-items: center;
      transform: rotate(30deg);
   `};
`;

export const wWrapperImage = styled.View`
   transform: rotate(-30deg);
`;

export const wFooter = styled.View`
   ${({theme}) => css`
      height: 30%;
      padding: 20px;
      justify-content: center;
      align-items: center;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      background-color: ${theme.colors.background};
   `}
`;


export const wTitle = styled.Text`
   ${({theme}) => css`
      font-size: 40px;
      margin-top: 36px;
      color: ${theme.colors.text_white};
   `}
`;

export const wSubtitle = styled.Text`
   ${({theme}) => css`
      font-size: 16px;
      margin-top: 14px;
      color: ${theme.colors.text_white};
   `}
`;

//////////////////////////////////////////////////////////////////

// BUTTON WELCOME => bw

export const bwContainer = styled.TouchableOpacity`
   ${({theme}) => css`
      width: 100%;
      height: 50px;
      border-radius: 20px;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.types.water};
   `};
`;

export const bwTitleButton = styled.Text`
   ${({theme}) => css`
      font-size: 14px;
      color: ${theme.colors.text_white};
   `};
`;

//////////////////////////////////////////////////////////////////

// HOME => h

export const hContainer = styled.View`
   ${({theme}) => css`
      flex: 1;
      background-color: ${theme.colors.background};
   `};
`;

//////////////////////////////////////////////////////////////////

// CARD => c

type cPokemonType = {
   type: string
}

export const cContainer = styled.TouchableOpacity<cPokemonType>`
   ${({theme, type}) => css`
      border-radius: 10px;
      margin-top: 30px;
      flex-direction: row;
      padding: 20px;
      background-color: ${theme.colors.backgroundCard[type]};
   `};
`;

export const cLeftSide = styled.View`
   width: 50%;
   position: relative;
`;

export const cImageDetailLS = styled.Image`
   position: absolute;
   width: 74px;
   height: 32px;
   left: 90px;
   top: -10px;
`;

export const cPokemonID = styled.Text`
   ${({theme}) => css`
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      color: ${theme.colors.light_text}
   `};
`;

export const cPokemonName = styled.Text`
   ${({theme}) => css`
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      margin-top: 6px;
      margin-left: 5px;
      text-transform: capitalize;
      color: ${theme.colors.text_white}
   `};
`;

export const cPokemonContentType = styled.View`
   flex-direction: row;
`;

export const cPokemonType = styled.View<cPokemonType>`
   ${({theme, type}) => css`
      padding: 6px;
      width: 66px;
      height: 24px;
      border-radius: 4px;
      margin-left: 6px;
      margin-top: 6px;
      justify-content: center;
      align-items: center;
      background: ${theme.colors.boxType[type]};
   `};
`;

export const cPokemonTypeText = styled.Text`
   ${({theme}) => css`
      font-weight: 500;
      font-size: 12px;
      line-height: 12px;
      text-transform: capitalize;
      color: ${theme.colors.text_white};
   `};
`;

export const cRightSide = styled.View`
   justify-content: center;
   align-items: center;
   width: 50%;
   position: relative;
`;

export const cPokemonImage = styled.Image`
   margin-top: -40px;
   width: 130px;
   height: 130px;
`;

export const cPokeballDetail = styled.Image`
   position: absolute;
   right: -20px;
`;