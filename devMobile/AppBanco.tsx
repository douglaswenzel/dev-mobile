import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Alert, 
  ScrollView,
  StatusBar,
  Switch,
  TouchableOpacity, 
  Platform
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

type AppState = {
  nome: string;
  sexo: string;
  limite: number;
  casado: boolean;
};

class AppBanco extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      nome: '',
      sexo: 'Masculino',
      limite: 1000,
      casado: false
    };
  }

abrirConta = () => {
  if (this.state.nome.trim() === '') {
    if (Platform.OS === 'web') {
      window.alert('Por favor, informe seu nome');
    } else {
      Alert.alert('Erro', 'Por favor, informe seu nome');
    }
    return;
  }

  const estadoCivil = this.state.casado ? 'Casado(a)' : 'Solteiro(a)';
  const limite = Number(this.state.limite).toFixed(2);

  const mensagem =
    `Olá ${this.state.nome}!\n` +
    `Sexo: ${this.state.sexo}\n` +
    `Limite: R$ ${limite}\n` +
    `Estado Civil: ${estadoCivil}\n\n` +
    `Sua conta foi aberta com sucesso!`;

  if (Platform.OS === 'web') {
    window.alert('Conta Aberta com Sucesso!\n\n' + mensagem);
  } else {
    Alert.alert('Conta Aberta com Sucesso!', mensagem);
  }
};


  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1a237e" barStyle="light-content" />
                <View style={styles.header}>
          <Text style={styles.headerTitle}>🏦 FATECOINS</Text>
          <Text style={styles.headerSubtitle}>Sua conta digital da Fatec Votorantim</Text>
        </View>

        <ScrollView contentContainerStyle={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome completo"
              value={this.state.nome}
              onChangeText={(text) => this.setState({ nome: text })}
              placeholderTextColor="#aaa"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Sexo</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={this.state.sexo}
                style={styles.picker}
                onValueChange={(itemValue) => this.setState({ sexo: itemValue as string })}
                dropdownIconColor="#1a237e"
              >
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Outro" value="Outro" />
              </Picker>
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Limite da Conta: R$ {this.state.limite.toFixed(2)}
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={500}
              maximumValue={5000}
              step={100}
              value={this.state.limite}
              onValueChange={(valor) => this.setState({ limite: valor })}
              minimumTrackTintColor="#1a237e"
              maximumTrackTintColor="#ddd"
              thumbTintColor="#1a237e"
            />
            <View style={styles.limiteRange}>
              <Text style={styles.limiteText}>R$ 500,00</Text>
              <Text style={styles.limiteText}>R$ 5.000,00</Text>
            </View>
          </View>
          <View style={styles.switchGroup}>
            <Text style={styles.label}>Estado Civil</Text>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>
                {this.state.casado ? 'Casado(a)' : 'Solteiro(a)'}
              </Text>
              <Switch
                value={this.state.casado}
                onValueChange={(valor) => this.setState({ casado: valor })}
                thumbColor={this.state.casado ? "#1a237e" : "#f4f3f4"}
                trackColor={{ false: "#767577", true: "#7986cb" }}
              />
            </View>
          </View>
          <TouchableOpacity 
            style={styles.button} 
            onPress={this.abrirConta}
          >
            <Text style={styles.buttonText}>Abrir Conta</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1a237e',
    padding: 25,
    paddingTop: 15,
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
    color: '#e8eaf6',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  formContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  inputGroup: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  picker: {
    height: 50,
  },
  slider: {
    height: 40,
    marginBottom: 5,
  },
  limiteRange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  limiteText: {
    fontSize: 12,
    color: '#666',
  },
  switchGroup: {
    marginBottom: 30,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#1a237e',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppBanco;