import React from 'react'

import { 
    ContainerMain, 
    Logo, 
    Descriptions, 
    Name, 
    Informations, 
    TitleInformations 
} from './styles';

import { FontAwesome } from '@expo/vector-icons';

import colors from '../../../styles/color';

function CardHospitals({ hospitalsName, address }) {
    return (
        <ContainerMain>
            <Logo source={require('../../assets/vacination.png')}/>

            <Descriptions>
                <Name> {hospitalsName} </Name>

                <Informations>
                    <FontAwesome name="map-marker" size={25} color={colors.black}/>
                    <TitleInformations> {address} </TitleInformations>
                </Informations>
            </Descriptions>
        </ContainerMain>
    )
}

export default CardHospitals;