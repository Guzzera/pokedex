import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import dotsImage from '../../assets/dots.png';
import pokeball from '../../assets/pokeballCard.png';
import * as S from '../global/styles/styles';

export type cPokemonType = {
    type: {
        name: string;
    }
}

export type Pokemon = {
    name: string;
    url: string;
    id: number;
    types: cPokemonType[];
}

type Props = {
    data: Pokemon,
} & TouchableOpacityProps

export function Card({data, ...rest}: Props){
    return(
        <S.cContainer type={data.types[0].type.name} {...rest}>
         <S.cLeftSide>
          <S.cPokemonID>#{data.id}</S.cPokemonID>
          <S.cPokemonName>{data.name}</S.cPokemonName>
          <S.cImageDetailLS source={dotsImage}/>
          <S.cPokemonContentType>
             {data.types.map(cPokemonType =>
                <S.cPokemonType type={cPokemonType.type.name}>
                 <S.cPokemonTypeText key={cPokemonType.type.name}>
                  {cPokemonType.type.name}
                 </S.cPokemonTypeText>
                </S.cPokemonType>    
            )}
          </S.cPokemonContentType>
         </S.cLeftSide>
         <S.cRightSide>
          <S.cPokeballDetail source={pokeball}/>
          <S.cPokemonImage
             source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
             }}
          />
         </S.cRightSide>
    </S.cContainer>
    )
}