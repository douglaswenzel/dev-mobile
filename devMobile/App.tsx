import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Biscoito from './biscoito';

export default function App() {
  return (
    <View style={styles.container}>
      <Biscoito />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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
