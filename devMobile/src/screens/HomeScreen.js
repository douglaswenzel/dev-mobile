import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={[styles.btn, styles.btnAzul]}
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={styles.btnText}>Ir para o cadastro</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
                style={[styles.btn, styles.btnVerde]}
                onPress={() => navigation.navigate('Consulta')}
            >
                <Text style={styles.btnText}>Ir para Consulta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    btn: {
        width: 250,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    btnAzul: {
        backgroundColor: '#5900ffff',
    },
    btnVerde: {
        backgroundColor: '#00ffc8ff',
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});