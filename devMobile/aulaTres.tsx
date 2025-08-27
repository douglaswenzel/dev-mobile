import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

interface AppState {
  nome: string;
}

interface AppProps {}

class aulaTres extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      nome: 'Dodo'
    }

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto: string) {
    if(texto.length > 0 ) {
        this.setState({nome: texto});
    } else{
        this.setState({nome: ''})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          value={this.state.nome}
          onChangeText={this.pegaNome}
        />
        <Text style={styles.texto}>Oiii, {this.state.nome}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
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
    textAlign: 'center',
    fontSize: 25
  }
});

export default aulaTres;