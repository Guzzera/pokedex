import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import * as S from '../global/styles/styles';
import welcomePokemon from '../../assets/pokemon.json';
import { Button } from '../components/Button';

export function Welcome() {
    return <S.wContainer>
            <S.wContent>
             <S.wWrapperAnimation>
              <S.wWrapperImage>
               <AnimatedLottieView style={{width: 200}} autoPlay source={welcomePokemon} loop/>
              </S.wWrapperImage>
             </S.wWrapperAnimation>
             <S.wTitle>Bem Vindo</S.wTitle>
             <S.wSubtitle>Encontre todos os Pokemons aqui</S.wSubtitle>
            </S.wContent>
            <S.wFooter>
             <Button title='Iniciar'/>
            </S.wFooter>
           </S.wContainer>
}