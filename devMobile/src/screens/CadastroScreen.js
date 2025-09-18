import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Cadastro({ route }) { 
    return(
        <View style={styles.text}>
            <Text style={styles.text}>Cadastro de usuários</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Nome"/>
                <TextInput style={styles.input} placeholder="E-mail"/>
                <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
            </View>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.btnArea}>Cadastrar usuário</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
  input: {
   height: 40,
   width: '100%',
   padding: 25,
   borderWidth: 1,
   color: 'black'
  },
  inputContainer: {
    alignContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop: 10
  },
  text: {
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 700,
    justifyContent: 'center'
  },
  botao: {
    width: 250,
    height: 60,
    backgroundColor: '#5900ffff',
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
    borderColor: '#6200ffff',
  },
  btnArea: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
})