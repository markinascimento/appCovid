import React from 'react'

import { Image } from 'react-native'

import { ContainerMain, ContainerImage, Label } from './styles';

function CardSymptons({ title, pathImage }) {
    return (
        <ContainerMain>
            <ContainerImage>
                <Image
                    source={pathImage}
                    style={{width:100, height:130}}
                />
            </ContainerImage>

            <Label> {title} </Label>
        </ContainerMain>
    )
}

export default CardSymptons;