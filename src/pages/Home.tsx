import React, { useEffect, useState } from 'react';
import api from '../services/api';
import * as S from '../global/styles/styles';
import { Card, cPokemonType, Pokemon } from '../components/Card';
import { FlatList } from 'react-native';

type Request = {
    id: number;
    types: cPokemonType[];
}

export function Home() {

    const [ pokemons, setPokemons ] = useState<Pokemon[]>([])

    useEffect(() => {
       async function getAllPokemons(){
          const response = await api.get('/pokemon');
          const { results } = response.data;
          const payLoadPokemons = await Promise.all(
            results.map(async (pokemon: Pokemon) => {
                const {id, types} = await getMoreInfo(pokemon.url)

                return {
                    name: pokemon.name,
                    id,
                    types
                }
            })
          )

          setPokemons(payLoadPokemons);
        }

        getAllPokemons()
    }, []);

    async function getMoreInfo(url: string): Promise<Request>{
        const response = await api.get(url);
        const {id, types} = response.data;

        return {
            id, types
        }
    }

    return(
       <S.hContainer>
        <FlatList
           data={pokemons}
           keyExtractor={pokemon => pokemon.id.toString()}
           renderItem={({item: pokemon}) => (
              <Card data={pokemon}/>
           )}
        />
       </S.hContainer>
    )
}