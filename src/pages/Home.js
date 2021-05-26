//Import of React
import React from 'react'

//Import of React Native components
import { 
    Image,
    ImageBackground,
    StatusBar,
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    View, 
    TouchableWithoutFeedback
} from 'react-native'

//Import of Navigatio
import { useNavigation } from '@react-navigation/native';

//Import of Icon
import { FontAwesome } from '@expo/vector-icons';

//Import of Font
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

//Import of CardNavigator Card
import CardNavigator from '../components/CardNavigator/CardNavigator';

//Import of Colors
import colors from '../../styles/color';

function Home() {

    const navigator = useNavigation();
    
    const [ fontsLoaded ] = useFonts({
        Inter_600SemiBold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
      }

    return (
        <View style={styles.viewMain}>
            <StatusBar backgroundColor="#6445CB" barStyle="dark-content"/>

            {/* Container of Image Doctor + Virus */}
            <View style={styles.containerLogo}> 
                <ImageBackground 
                    source={require('../assets/virus2.png')} 
                    style={{flex:1, width:'100%', height:'100%'}}
                >
                    <Image 
                        source={require('../assets/logoIntern.png')} 
                        style={styles.logo}
                    />
                </ImageBackground>
            </View>
            
            {/* Container Navigator Symptons and Preventions */}
            <View style={styles.containerWithDice}> 
                <TouchableWithoutFeedback onPress={() => navigator.navigate('Informations')}>
                    <View style={styles.containerPrevetions}> 
                        <View>
                            <Text style={{
                                fontSize: 28,
                                fontFamily: 'Inter_600SemiBold',
                                marginLeft: 20,
                                color: colors.black    
                            }}> 
                                Sintomas &
                            </Text>

                            <Text style={{
                                fontSize: 31,
                                fontFamily: 'Inter_600SemiBold',
                                marginLeft: 20,
                                color: colors.primaryColor
                            }}> 
                                Prevenção
                            </Text>

                        </View>
                        <FontAwesome name="sign-in" size={27} color={colors.primaryColor}/>
                    </View>
                </TouchableWithoutFeedback>

                {/* Container Card Navigators */}
                <View style={styles.containerCardNavigator}>
                    <CardNavigator
                        onPress={() => navigator.navigate('Hospitals')}
                        bgColor="#544DF3"
                        title="Hospitais"
                        logo={require('../assets/hospitals.png')}
                    />

                    <CardNavigator
                        onPress={() => navigator.navigate('Vacination')}
                        bgColor="#FF505D"
                        title="Vacinação"
                        logo={require('../assets/siringa.png')}
                    />
                </View>
                
                {/* Container Navigator Cases */}
                <TouchableWithoutFeedback onPress={() => navigator.navigate('Cases')}>
                    <View style={styles.containerButtonCases}> 
                        <Image
                            source={require('../assets/map.png')}
                            style={{width:180, height:100, borderRadius:40}}
                        />

                        <Text style={{
                            fontSize: 25,
                            fontFamily: 'Inter_600SemiBold',
                            marginLeft: 22,
                            color: colors.black
                        }}> 
                            Casos 
                        </Text>

                        <FontAwesome name="sign-in" size={27} color={colors.primaryColor}/>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewMain:{
        flex: 1,
        backgroundColor: colors.primaryColor
    },

    containerLogo:{
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.5,
        borderColor: colors.white
    },

    logo:{
        width: '100%',
        height: '125%',
        
    },

    containerWithDice:{
        flex: 1.3,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: colors.white,
        borderTopRightRadius: 50,
        paddingTop: 35,
    },

    containerPrevetions:{
        flexDirection: 'row',
        width: '95%',
        height: 120,
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 10,

    },  

    containerCardNavigator:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    containerButtonCases:{
        flexDirection: 'row',
        padding: 10,
        width: '95%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderRadius: 10,
        marginBottom: 12
    }
});

export default Home;