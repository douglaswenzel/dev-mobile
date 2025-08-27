import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

interface AulaQuatroState {
    nome: string;
}

class aulaQuatro extends Component<any, AulaQuatroState> {
    constructor(props: any) {
        super(props);
        this.state = {
            nome: ''
        };

        this.pegaNome = this.pegaNome.bind(this);
    }

    pegaNome(texto: string) {
        if(texto.length > 0){
            this.setState({ nome: 'Bem vindo ' + texto })
        } else {
            this.setState({ nome: ''})
        }
    }

    render(){
        return(
            <View>
                <TextInput 
                style={styles.input}
                placeholder='Digite seu nome'
                underlineColorAndroid="transparent"
                onChangeText={this.pegaNome}
                />

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