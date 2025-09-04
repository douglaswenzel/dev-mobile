import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import AulaQuatro from './aulaQuatro';

export default function App() {
  return (
    <View style={styles.container}>
      <AulaQuatro />
      <Text style={ {fontWeight: 600, fontSize: 35}}>Meu projeto em React Native na matéria de Desenvolvimento Mobile na Fatec Votorantim</Text>
      <Text style={styles.redText}>Aluno: </Text>
      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/115610413?v=4" }}
        style={{ width: 200, height: 200, borderRadius: 50, margin: 15 }}
      />
      <Text style={styles.redText}>Douglas Wenzel</Text>
      <View style={styles.socialMedia}>
        <Text style={styles.LinkedinText}>
          Linkedin
        </Text>
        <Text style={styles.FacebookText}>
          Facebook
        </Text>
        <Text style={styles.TeslaText}>
          X
        </Text>
      </View>
      <View style={{flex: 1, gap: 8, flexDirection: 'row', justifyContent: 'flex-start'}}>
        <View style={{width: 50, height:50, flex: 1, backgroundColor: 'red'}}>.</View>
        <View style={{width: 50, height:50, flex: 1, backgroundColor: 'blue'}}>.</View>
        <View style={{width: 50, height:50, flex: 4, backgroundColor: 'green', justifyContent: 'space-around'}}>.</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#5f9fe8',
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
