import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from '../global/styles/styles';

type Props = {
    title: string;
} & TouchableOpacityProps

export function Button({title}: Props) {
    return <S.bwContainer>
            <S.bwTitleButton>{title}</S.bwTitleButton>
           </S.bwContainer>
}