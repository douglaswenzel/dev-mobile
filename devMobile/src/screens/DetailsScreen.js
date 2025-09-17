import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) { 
    const { itemId } = route.params;

    return(
        <View>
            <Text>Tela de detalhes</Text>
            <Text>Item ID: {itemId}</Text>
        </View>
    )
}
