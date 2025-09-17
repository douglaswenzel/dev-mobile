import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return(
        <View>
            <Text>Bem vindo à tela home</Text>
            <Button
                title="Ir para detalhes"
                onPress={() => navigation.navigate('Details' , { itemId: 42})}
            />
        </View>
    );
}