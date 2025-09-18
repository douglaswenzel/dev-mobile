import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ConsultaScreen from './src/screens/ConsultaScreen';
import CadastroScreen from './src/screens/CadastroScreen';

const Stack = createStackNavigator();

export default function AulaSete() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Cadastro" component={CadastroScreen} />
                <Stack.Screen name="Consulta" component={ConsultaScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}