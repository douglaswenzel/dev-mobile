import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Pessoas from './src/Pessoas/Pessoas';

type Pessoa = {
  id: string;
  nome: string;
  idade: number;
  email: string;
};

type AppState = {
  lista: Pessoa[];
};

class App extends Component<{}, AppState>{
  constructor(props: any){
    super(props);
    this.state = {
      lista: [
        {id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
        {id: '2', nome: 'Dougla Wenzel', idade: 23, email: 'contato@douglaswenzel.com.br'},
        {id: '3', nome: 'Piero Gavanski', idade: 33, email: 'rh@piagamotors.com.br'}
      ]
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <FlatList 
         data={this.state.lista}
         keyExtractor={(item) => item.id}
         renderItem={({ item }) => <Pessoas data={item} /> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28,

  },
  redText: {
    color: '#ff085a',
    fontSize: 25,
    margin: 15,
    fontWeight: 'bold'
  },
  socialMedia: {
    flexDirection: 'row',
    gap: 10
  },
  LinkedinText: {
    fontFamily: 'Roboto',
    color: 'blue',
    fontSize: 18
  },
  FacebookText: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: 'yellow'
  },
  TeslaText: {
    fontFamily: 'Times New Roman',
    fontSize: 35,
    color: 'black'
  }
});

export default App;