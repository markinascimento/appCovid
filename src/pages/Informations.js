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
import CardSymptons from '../components/CardSymptons/CardSymptons';
import CardPrevetions from '../components/CardPrevetions/CardPrevetions';

import colors from '../../styles/color';

function Informations() {

    
    const [ fontsLoaded ] = useFonts({
        Inter_600SemiBold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
      }

    return (
        <SafeAreaView style={styles.viewMain}>
            <ScrollView>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content"/>

                <ButtonBack/>

                <Text style={{
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 23,
                        textAlign: 'center',
                        marginTop: 20
                }}> 
                    Abaixo será listado alguns sintomas é alguns tipos de prevenção para Covid-19. 
                </Text>

                <Text style={styles.titleSymptons}> Sintomas </Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <CardSymptons
                        pathImage={require('../assets/s1.png')}
                        title="Febre"
                    />
                    <CardSymptons
                        pathImage={require('../assets/s2.png')}
                        title="Tosse seca"
                    />
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:10}}>
                    <CardSymptons
                        pathImage={require('../assets/s3.png')}
                        title="Dor de cabeça"
                    />
                    <CardSymptons
                        pathImage={require('../assets/s4.png')}
                        title="Sem fôlego"
                    />
                </View>

                <Text style={styles.titlePrevetions}> Prevenção </Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <CardPrevetions
                        pathImage={require('../assets/p1.png')}
                        title="Usar mascára"
                    />
                    <CardPrevetions
                        pathImage={require('../assets/p2.png')}
                        title="Distanciamento Social"
                    />
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:10, marginBottom:40 }}>
                    <CardPrevetions
                        pathImage={require('../assets/p3.png')}
                        title="Usar álcool"
                    />
                    <CardPrevetions
                        pathImage={require('../assets/p4.png')}
                        title="Ficar em casa, se possível"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewMain:{
        flex: 1,
        backgroundColor: colors.white,
        padding: 10,
        borderTopWidth: 0.5,
    },

    titleSymptons:{
        fontSize: 30, 
        marginTop: 30,
        marginBottom: 15,
        fontWeight: 'bold', 
        textAlign: 'center'
    },

    titlePrevetions:{
        fontSize: 30, 
        color: '#7159C1',
        marginTop: 45,
        marginBottom: 15,
        fontWeight: 'bold', 
        textAlign: 'center'
    }

});

export default Informations;