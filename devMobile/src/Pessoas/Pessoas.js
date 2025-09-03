import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Pessoas extends Component { 
    render(){
        return(
          <View style={styles.areaPessoa}>
            <View style={styles.headerCard}>
              <Text style={styles.textoArea}>Entrada: 15/set às 08h45</Text>
              <View style={styles.statusIndicator} />
            </View>
            
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>👤 Nome:</Text>
                <Text style={styles.infoValue}>{this.props.data.nome}</Text>
              </View>
              
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>🎂 Idade:</Text>
                <Text style={styles.infoValue}>{this.props.data.idade} anos</Text>
              </View>
              
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>📧 Email:</Text>
                <Text style={styles.infoValue}>{this.props.data.email}</Text>
              </View>
            </View>

            <TouchableOpacity 
              activeOpacity={0.7}
              style={styles.btnSaida}
              onPress={() => console.log('Registrar saída')}
            > 
              <Text style={styles.btnTexto}>
                🚪 REGISTRAR SAÍDA
              </Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    areaPessoa: {
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        borderLeftWidth: 5,
        borderLeftColor: '#3498db',
    },
    headerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ecf0f1',
    },
    textoArea: {
        color: '#7f8c8d',
        fontSize: 12,
        fontWeight: '500',
    },
    statusIndicator: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#2ecc71',
    },
    infoContainer: {
        marginBottom: 15,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoLabel: {
        color: '#2c3e50',
        fontWeight: '600',
        fontSize: 14,
        width: 80,
        marginRight: 10,
    },
    infoValue: {
        color: '#34495e',
        fontSize: 14,
        fontWeight: '500',
        flex: 1,
    },
    btnSaida: {
        backgroundColor: '#e74c3c',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnTexto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    }
});

export default Pessoas;