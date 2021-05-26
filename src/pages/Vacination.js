import React from 'react'
import { 
    View, 
    Text,
    StatusBar,
    StyleSheet
} from 'react-native'

import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

import ButtonBack from '../components/ButtonBack/ButtonBack';
import CardVacination from '../components/CardVacination/CardVacination';

import colors from '../../styles/color';

function Vacination() {

    const [ fontLoaded ] = useFonts({
        Inter_600SemiBold
    });

    if (!fontLoaded){
        return <AppLoading/>;
    }

    return (
        <View style={styles.viewMain}>
            <StatusBar backgroundColor={colors.white} barStyle="dark-content"/>

            <ButtonBack/>

            
            <Text style={{
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 18,
                    textAlign: 'center',
                    marginTop: 25,
                    marginBottom: 30
            }}> 
                Alguns dos postos de vacinação para o Covid-19. 
            </Text>

            <CardVacination
                hospitalsName="UFPB – acesso pelo HU"
                address="R. Tab. Stanislau Eloy, 585"
            />

            <CardVacination
                hospitalsName="Mangabeira Shopping"
                address="Av. Hílton Souto Maior"
            />

            <CardVacination
                hospitalsName="Escola Papa Paulo VI"
                address="AV, R. Dep. José Tavares"
            />

            <CardVacination
                hospitalsName="Instituto Federal da Paraíba "
                address="Av. Primeiro de Maio, 720"
            />


        </View>
    )
}

const styles = StyleSheet.create({
    viewMain:{
        flex: 1,
        backgroundColor: colors.white,
        padding: 10
    }
})

export default Vacination;