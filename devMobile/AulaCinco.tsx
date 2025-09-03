import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type Pizza = {
    key: number;
    nome: string;
    valor: number;
};

type AppState = {
    pizza: number;
    pizzas: Pizza[];
};

export default class AulaCinco extends Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        this.state = { 
            pizza: 0,
            pizzas: [
                { key: 1, nome: 'Strogonoff', valor: 35.00},
                { key: 2, nome: 'Portuguesa', valor: 33.00},
                { key: 3, nome: 'Calafrango', valor: 44.00},
                { key: 4, nome: 'Moda da casa', valor: 46.00},
                { key: 5, nome: 'Marguerita', valor: 29.00}
            ]
        };
    };

    render() {
        let pizzasItem = this.state.pizzas.map((v, k) => {
            return (
                <Picker.Item key={k} value={k} label={v.nome + ' - R$ ' + v.valor.toFixed(2)} />
            );
        });

        return (
            <ImageBackground 
                source={require('./assets/fotoPizzas.jpg')}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Text style={styles.title}>🍕 Pizzaria Delícia</Text>
                        <Text style={styles.subtitle}>Escolha sua pizza favorita:</Text>
                        
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={this.state.pizza}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ pizza: itemValue })
                                }
                                dropdownIconColor="#fff"
                            >
                                {pizzasItem}
                            </Picker>
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>
                                🍕 Você escolheu: {this.state.pizzas[this.state.pizza].nome}
                            </Text>
                            <Text style={styles.infoText}>
                                💰 Valor: R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}
                            </Text>
                        </View>

                        {this.state.pizzas[this.state.pizza].valor > 40 && (
                            <Text style={styles.premiumText}>⭐ Pizza Premium!</Text>
                        )}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 25,
        borderRadius: 15,
        width: '90%',
        maxWidth: 400,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#8B0000',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    pickerContainer: {
        borderWidth: 2,
        borderColor: '#8B0000',
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
        backgroundColor: '#fff',
    },
    picker: {
        height: 60,
        width: '100%',
        color: '#8B0000',
        fontWeight: 'bold',
    },
    infoContainer: {
        backgroundColor: '#8B0000',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        marginBottom: 15,
    },
    infoText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    premiumText: {
        color: '#FFD700',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
});