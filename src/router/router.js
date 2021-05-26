import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Cases from '../pages/Cases'
import GetStarted from '../pages/GetStarted'
import Home from '../pages/Home'
import Hospitals from '../pages/Hospitals'
import Informations from '../pages/Informations'
import Vacination from '../pages/Vacination'

const Stack = createStackNavigator();

function Router() {
    return (
        <Stack.Navigator initialRouteName="GetStarted">
            <Stack.Screen 
                name="Home" 
                component={ Home } 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Cases" 
                component={ Cases } 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="GetStarted" 
                component={ GetStarted } 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Hospitals" 
                component={ Hospitals } 
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Informations" 
                component={ Informations }
                options={{ headerShown: false }} 
            />
            <Stack.Screen 
                name="Vacination" 
                component={ Vacination }
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    )
}

export default Router;