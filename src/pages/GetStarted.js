//Import do React
import React from 'react';

//Imports do React-Native
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar
} from 'react-native';

//Import do Icone
import { FontAwesome } from '@expo/vector-icons';

//Import da navegação
import { useNavigation } from '@react-navigation/native';

//Import da Fonte
import {useFonts, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

//Import das Cores
import colors from '../../styles/color';

function GetStarted(){

    const navigator = useNavigation();

    const [ fontsLoaded ] = useFonts({
        Inter_500Medium,
        Inter_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
      }

    return(
        <SafeAreaView style={styles.viewMain}>

            <StatusBar backgroundColor={colors.primaryColor} barStyle="light-content"/>
            
            <Image source={require('../assets/logo.png')}/>
            
            <View style={styles.containerLogo}>
                <Image 
                    source={require('../assets/virus.png')}
                    style={styles.virus}
                />
                <Image 
                    source={require('../assets/person.png')}
                    style={styles.person}
                />
            </View>

            <Text style={{ fontFamily:'Inter_700Bold',
                           fontSize: 26,
                           color: colors.white

                }}
            > 
                Coronavírus - COVID-19
            </Text>

            <Text style={{ fontFamily:'Inter_500Medium',
                           fontSize: 20,
                           textAlign: 'center', 
                           marginTop: -40,
                           color: colors.white

                }}
            > 
                é uma doença infecciosa causada por um novo vírus 
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => navigator.navigate('Home')}>
                <FontAwesome name="arrow-circle-right" size={35} color={colors.primaryColor} />
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewMain:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.primaryColor,
        padding: 10,
        borderTopWidth: 1,
        borderColor: colors.white
    },
    
    containerLogo:{
        flexDirection: 'row',
        paddingTop: 80
    },

    virus:{
        width: '80%',
        height: 220
    },

    person:{
        width: 130,
        height: 140,
        marginTop: -50,
        marginLeft: -90
    },

    button:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        width: 65,
        height: 65,
        borderRadius: 15,
        marginBottom: 15
    }
});

export default GetStarted;