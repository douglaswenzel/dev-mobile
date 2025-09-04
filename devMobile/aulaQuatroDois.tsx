import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

type BiscoitoState = {
  textoFrase: string;
  img: any;
};

export class aulaQuatroDois extends Component<any, BiscoitoState>{
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
    backgroundColor: '#FFF5E6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  img: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  textoFrase: {
    fontSize: 22,
    color: '#E67E22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 32,
    backgroundColor: '#FFF9F0',
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#E67E22',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  botao: {
    width: 250,
    height: 60,
    backgroundColor: '#E67E22',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#D35400',
  },
  btnArea: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default aulaQuatroDois;