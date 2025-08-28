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
            style={styles.img}
          />
          <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
          <TouchableOpacity onPress={this.quebraBiscoito} style={styles.botao}>
            <Text style={styles.btnArea}>Quebrar Biscoito</Text>
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
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#DD7B22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default Biscoito;