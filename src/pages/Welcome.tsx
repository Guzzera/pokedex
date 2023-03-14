import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import * as S from '../global/styles/styles';
import welcomePokemon from '../../assets/pokemon.json';

export function Welcome() {
    return <S.Container>
            <S.Content>
             <AnimatedLottieView autoPlay source={welcomePokemon} loop/>
            </S.Content>
            <S.Footer></S.Footer>
           </S.Container>
}