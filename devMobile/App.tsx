import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu projeto em React Native na matéria de Desenvolvimento Mobile na Fatec Votorantim</Text>
      <Text style={styles.redText}>Aluno: </Text>
      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/115610413?v=4" }}
        style={{ width: 200, height: 200, borderRadius: 50, margin: 15 }}
      />
      <Text style={styles.redText}>Douglas Wenzel</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#878721',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText: {
    color: 'red',
    fontSize: 25,
    margin: 15
  }
});
