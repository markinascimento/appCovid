import React from 'react'

//Import of React - Native
import { Image, TouchableWithoutFeedback } from 'react-native';

//Import of Icon
import { FontAwesome } from '@expo/vector-icons';

//Import of Styled-Components
import { Button, Label } from './styled';

//Import of Colors
import colors from '../../../styles/color';
 
function CardNavigator({ title, logo, bgColor, onPress }) {
    
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Button bgColor={bgColor}>
                <Image
                    source={logo}
                    style={{width:85, height:85, marginTop:10}}
                />

                <Label> {title} </Label>

                <FontAwesome 
                    name="arrow-right" 
                    color={colors.white} 
                    size={20}
                    style={{ marginBottom: 2 }}
                />
            </Button>
        </TouchableWithoutFeedback>
    );
}

export default CardNavigator;