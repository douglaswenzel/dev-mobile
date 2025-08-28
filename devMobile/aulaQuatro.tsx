import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

interface AulaQuatroState {
    nome: string;
    input: string;
}

class aulaQuatro extends Component<any, AulaQuatroState> {
    constructor(props: any) {
        super(props);
        this.state = {
            nome: '',
            input: ''
        };

        this.entrar = this.entrar.bind(this);
    }

    entrar() {
        if(this.state.input === ''){
            alert('Digite seu nome');
            return;
        }
      this.setState({ nome: 'Bem vindo: ' + this.state.input})
    }

    render(){
        return(
            <View>
                <TextInput 
                style={styles.input}
                placeholder='Digite seu nome'
                underlineColorAndroid="transparent"
                onChangeText={ (texto) => this.setState({input: texto})}
                />  

                <Button title='Entrar' onPress={this.entrar} />

                <Text style={styles.texto}>{this.state.nome}</Text>
            </View>
        )
    }
        
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 20,
        padding: 10,
    },
    texto: {
        fontSize: 22,
        color: '#222',
        margin: 10,
    },
});

export default aulaQuatro;