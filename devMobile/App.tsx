import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
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
        <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
        
        <View style={styles.header}>
          <Text style={styles.headerTitle}>👥 Controle de Acesso</Text>
          <Text style={styles.headerSubtitle}>Pessoas no local</Text>
        </View>

        <FlatList 
          data={this.state.lista}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Pessoas data={item} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 25,
    paddingTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  headerTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  headerSubtitle: {
    color: '#bdc3c7',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  listContent: {
    padding: 20,
    paddingBottom: 40,
  },
});

export default App;