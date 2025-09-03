import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react=native';

class Pessoas extends Component { 
    render(){
        return(
          <View style={styles.areaPessoa}>
            <Text>Olá!!! Esta é a primeira versão deste meu componente chamado pessoas!</Text>
            <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
            <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
            <Text style={styles.textoPessoa}>E-mail: {this.props.data.email}</Text>

          </View>
        );
    }
}

const styles = Stylesheet.create({
    areaPessoa: {
        backgroundColor: '#222',
        height: 150,
        marginBottom: 25,
        padding: 15,
    },
    textoPessoa: {
        color: '#FFF',
    }
})

export default Pessoas;