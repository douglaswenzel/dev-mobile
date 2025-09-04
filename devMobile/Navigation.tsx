import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import App from './App';
import AulaUm from './aulaUm';
import AulaDois from './aulaDois';
import AulaTres from './aulaTres';
import AulaQuatro from './aulaQuatro';
import AulaCinco from './AulaCinco';
import AulaCincoDois from './AulaCinco-dois';

const Navigation = () => {
  const [currentScreen, setCurrentScreen] = useState('App');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'AulaUm':
        return <AulaUm />;
      case 'AulaDois':
        return <AulaDois />;
      case 'AulaTres':
        return <AulaTres />;
      case 'AulaQuatro':
        return <AulaQuatro />;
      case 'AulaCinco':
        return <AulaCinco />;
      case 'AulaCincoDois':
        return <AulaCincoDois />;
      default:
        return <AulaUm />;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.navContainer}
        contentContainerStyle={styles.navContent}
      >
        <TouchableOpacity 
          style={[styles.navButton, currentScreen === 'AulaUm' && styles.activeButton]}
          onPress={() => setCurrentScreen('AulaUm')}
        >
          <Text style={[styles.navText, currentScreen === 'AulaUm' && styles.activeText]}>
            👥 Aula 1
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navButton, currentScreen === 'AulaDois' && styles.activeButton]}
          onPress={() => setCurrentScreen('AulaDois')}
        >
          <Text style={[styles.navText, currentScreen === 'AulaDois' && styles.activeText]}>
            📱 Aula 2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, currentScreen === 'AulaTres' && styles.activeButton]}
          onPress={() => setCurrentScreen('AulaTres')}
        >
          <Text style={[styles.navText, currentScreen === 'AulaTres' && styles.activeText]}>
            🎨 Aula 3
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, currentScreen === 'AulaQuatro' && styles.activeButton]}
          onPress={() => setCurrentScreen('AulaQuatro')}
        >
          <Text style={[styles.navText, currentScreen === 'AulaQuatro' && styles.activeText]}>
            🔄 Aula 4
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navButton, currentScreen === 'AulaCinco' && styles.activeButton]}
          onPress={() => setCurrentScreen('AulaCinco')}
        >
          <Text style={[styles.navText, currentScreen === 'AulaCinco' && styles.activeText]}>
            🍕 Aula 5
          </Text>
        </TouchableOpacity>
                <TouchableOpacity 
          style={[styles.navButton, currentScreen === 'AulaCincoDois' && styles.activeButton]}
          onPress={() => setCurrentScreen('AulaCincoDois')}
        >
          <Text style={[styles.navText, currentScreen === 'AulaCincoDois' && styles.activeText]}>
            🍕 Aula 5.2
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.content}>
        {renderScreen()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    maxHeight: 60,
  },
  navContent: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  navButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    minWidth: 80,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  navText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
});

export default Navigation;