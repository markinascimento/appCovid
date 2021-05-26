//Import of React
import React from 'react'

//Import of React Native
import { TouchableWithoutFeedback } from 'react-native'

//Import of React Navigation
import { useNavigation } from '@react-navigation/native';

//Import of Icon
import { FontAwesome } from '@expo/vector-icons';

//Import of Colors
import colors from '../../../styles/color';

function ButtonBack() {

    const navigator = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => navigator.goBack(-1)}>
            <FontAwesome name="arrow-left" size={22} color={colors.black}/>
        </TouchableWithoutFeedback>
    )
}

export default ButtonBack;