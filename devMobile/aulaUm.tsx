import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu projeto em React Native na matéria de Desenvolvimento Mobile na Fatec Votorantim</Text>
      <Text style={ {fontWeight: 600, fontSize: 35}}>Meu projeto em React Native na matéria de Desenvolvimento Mobile na Fatec Votorantim</Text>
      <Text style={styles.redText}>Aluno: </Text>
      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/115610413?v=4" }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text style={styles.redText}>Aluno: </Text>
      <View style={styles.redBox}>
        <Text style={styles.redText}>X</Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#222', width: 200}}>
        <View style={{flex: 1, backgroundColor: 'red'}}>.</View>
        <View style={{flex: 1, backgroundColor: 'blue'}}>.</View>
        <View style={{flex: 2, backgroundColor: 'green'}}>.</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
  redBox: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
});