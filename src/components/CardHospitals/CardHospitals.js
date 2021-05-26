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

function CardHospitals({ hospitalsName, address, phone }) {
    return (
        <ContainerMain>
            <Logo source={require('../../assets/upa.png')}/>

            <Descriptions>
                <Name> {hospitalsName} </Name>

                <Informations>
                    <FontAwesome name="map-marker" size={25} color={colors.black}/>
                    <TitleInformations> {address} </TitleInformations>
                </Informations>

                <Informations>
                    <FontAwesome name="phone" size={22} color={colors.black}/>
                    <TitleInformations> {phone} </TitleInformations>
                </Informations>
            </Descriptions>
        </ContainerMain>
    )
}

export default CardHospitals;