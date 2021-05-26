import React from 'react'

import { Image } from 'react-native'

import { ContainerMain, ContainerImage, Label } from './styles';

function CardPrevetions({ title, pathImage }) {
    return (
        <ContainerMain>
            <ContainerImage>
                <Image
                    source={pathImage}
                    style={{width:110, height:110}}
                />
            </ContainerImage>

            <Label> {title} </Label>
        </ContainerMain>
    )
}

export default CardPrevetions;