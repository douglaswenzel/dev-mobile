import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Slider from '@react-native-community/slider';

export class AulaCincoTres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: 0 
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Volume: </Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={100}
                    value={this.state.valor}
                    onValueChange={(valor) => this.setState({ valor })}
                />
                <Text style={styles.value}>Valor: {this.state.valor}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    slider: {
        width: 300,
        height: 40,
    },
    value: {
        fontSize: 18,
        marginTop: 20,
    },
});

export default AulaCincoTres;