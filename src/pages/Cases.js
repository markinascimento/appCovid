import React, { useState, useEffect } from 'react'

// Import of React-Native
import { 
    View, 
    Text,
    StatusBar,
    StyleSheet,
    Image,
    ScrollView 
} from 'react-native'

import colors from '../../styles/color';

import api from '../service/api';

//Import of Card Navigator Component 
import ButtonBack from '../components/ButtonBack/ButtonBack';
import DataCard from '../components/DataCard/DataCard';

function Cases() {

    const [ dataCountry, setDataCountry ] = useState('');
    const [ dataState, setDataState ] = useState('');

    useEffect(() => {
        async function CasesCountry(){
            const response = await api.get('api/report/v1/brazil');
            console.log(response.data.data);
            setDataCountry(response.data.data);
        }
        CasesCountry();
    }, []);

    useEffect(() => {
        async function CasesCountry(){
            const response = await api.get('api/report/v1/brazil/uf/pb');
            console.log(response.data);
            setDataState(response.data);
        }
        CasesCountry();
    }, []);

    return (
        <View style={styles.viewMain}>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content"/>

            <ButtonBack/>

            <View style={styles.containerCountry}>
                <View style={{
                            flexDirection: 'row', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            marginBottom: 15
                        }}
                >
                    <Image
                        source={require('../assets/brasil.png')}
                        style={{width:70, height:70, borderRadius:35}}
                    />
                    <Text style={styles.titleCountry}> - Brasil </Text>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <DataCard
                        bgColor={colors.orange}
                        title="Casos"
                        numberCases={dataCountry.confirmed}
                    />
                    <DataCard
                        bgColor={colors.blue}
                        title="Ativos"
                        numberCases={dataCountry.cases}
                    />
                    <DataCard
                        bgColor={colors.green}
                        title="Recuperados"
                        numberCases={dataCountry.recovered}
                    />
                    <DataCard
                        bgColor={colors.red}
                        title="Óbitos"
                        numberCases={dataCountry.deaths}
                    />
                </ScrollView>
            </View>

            <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
                <View style={{
                            flexDirection: 'row', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            marginBottom: 15
                        }}
                >
                    <Image
                        source={require('../assets/pb.png')}
                        style={{width:70, height:70, borderRadius:35}}
                    />
                    <Text style={styles.titleCountry}> - Paraíba </Text>
                </View>
                
                <View style={styles.containerDiceState}>
                    <DataCard
                        bgColor={colors.orange}
                        title="Casos"
                        numberCases={dataState.cases}
                    />
                    <DataCard
                        bgColor={colors.red}
                        title="Óbitos"
                        numberCases={dataState.deaths}
                    />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    viewMain:{
        flex: 1,
        padding: 10,
        backgroundColor: colors.white,
        borderTopWidth: 0.5
    },

    containerCountry:{
        flex: 1,
        marginTop: 50
    },

    titleCountry:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3A3A3A',
    },

    containerDiceState:{
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        alignItems: 'center',
        marginLeft: 15
    },

});

export default Cases;