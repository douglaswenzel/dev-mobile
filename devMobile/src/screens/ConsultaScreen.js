import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ConsultaScreen({ route }) { 

    return(
        <View>
            <Text style={styles.text}>Consulta de usuário</Text>
               <TouchableOpacity 
                  style={[styles.btn, styles.btnVerde]}
               >
                 <Text style={styles.btnText}>Consultar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        alignItems: 'center',
    },
    text: {
      alignItems: 'center',
      fontSize: 30,
      fontWeight: 700,
      marginBottom: 20,
      justifyContent: 'center'
    },
    btn: {
        width: '100%',
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
})
