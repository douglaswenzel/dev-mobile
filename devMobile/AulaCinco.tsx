import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

export default class App extends Component<{}, AppState> {

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
                <Picker.Item key={k} value={k} label={v.nome + ' R$ ' + v.valor} />
            );
        });

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Escolha uma pizza:</Text>
                <Picker
                    selectedValue={this.state.pizza}
                    style={{ height: 50, width: 250 }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ pizza: itemValue })
                    }>
                    {pizzasItem}
                </Picker>

                <Text>você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
            </View>
        );
    }
}