import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

class Pessoas extends Component { 
    render(){
        return(
          <View style={styles.areaPessoa}>
            <Text style={styles.textoArea} >Entrada realizada em: 15/set às 08h45</Text>
            <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
            <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
            <Text style={styles.textoPessoa}>E-mail: {this.props.data.email}</Text>
            <TouchableOpacity 
              activeOpacity={0.90}
              style={styles.btnSaida}> 
              <Text style={ {color: 'white'}}>
                REGISTRAR SAÍDA
             </Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    areaPessoa: {
        backgroundColor: '#222',
        height: 150,
        marginBottom: 25,
        padding: 15,
    },
    textoPessoa: {
        color: '#FFF',
    },
    textoArea: {
        color: 'white',
        fontsize: 95,
        fontWeight: 500
    },
    btnSaida: {
        color: 'red',
        fontSize: 25,
        backgroundColor: 'red',
        width: 80,
        height: 40
    }
})

export default Pessoas;