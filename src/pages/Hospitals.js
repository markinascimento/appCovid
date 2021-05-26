import React from 'react'
import { 
    View, 
    Text,
    StatusBar, 
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native'

import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

import ButtonBack from '../components/ButtonBack/ButtonBack';
import CardHospitals from '../components/CardHospitals/CardHospitals';

import colors from '../../styles/color';

function Hopitals() {

    const [ fontLoaded ] = useFonts({
        Inter_600SemiBold
    });

    if (!fontLoaded){
        return <AppLoading/>;
    }

    return (
        <SafeAreaView style={styles.viewMain}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content"/>
                
                <ButtonBack/>

                <Text style={{
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 18,
                        textAlign: 'center',
                        marginTop: 15,
                        marginBottom: 10
                }}> 
                    Alguns dos princípais hospitais públicos da capital que atendem pessoas com Covid-19. 
                </Text>

                <CardHospitals
                    source={require('../assets/upa.png')}
                    hospitalsName="UPA Oceania"
                    address="Av. Gov. Flávio Ribeiro Coutinho"
                    phone="(83) 3214-9287"
                />

                <CardHospitals
                    source={require('../assets/upa.png')}
                    hospitalsName="UPA Bancários"
                    address="R. Empresário João Rodrigues"
                    phone="(83) 3255-5111"
                />

                <CardHospitals
                    source={require('../assets/upa.png')}
                    hospitalsName="UPA Célios Pires de Sá"
                    address="R. Estêvão Lopes Galvão"
                    phone="(83) 3237-7068"
                />

                <CardHospitals
                    source={require('../assets/upa.png')}
                    hospitalsName="UPA Cruz das Armas"
                    address="Av. Cruz das Armas, 1280 "
                    phone="(83) 3214-3773"
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewMain:{
        flex: 1,
        backgroundColor: colors.white,
        padding: 15
    }
})

export default Hopitals;