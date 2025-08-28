import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

type BiscoitoState = {
  textoFrase: string;
  img: any;
};

export class Biscoito extends Component<any, BiscoitoState>{
  frases: string[];
  constructor(props: any){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./assets/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Siga os bons e aprenda com eles",
      "O bom-senso vale mais do que muito conhecimento",
      "O riso é a menor distância entre duas pessoas",
      "Deixe de lado as preocupações e seja feliz",
      "Realize o óbvio, pense no improvável e conquiste o impossível",
      "Acredite em milagres, mas não dependa deles",
      "A maior barreira para o sucesso é o medo do fracasso"
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '"',
      img: require('./assets/biscoito-aberto.png')
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
          <Image 
            source={this.state.img}
          />
          <Text>{this.state.textoFrase}</Text>
          <TouchableOpacity onPress={this.quebraBiscoito}>
            <Text>Quebrar Biscoito</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Biscoito;