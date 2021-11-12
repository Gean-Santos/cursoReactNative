import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';

export default Aleatorio = props => {
    const { min, max } = props;
    const numAleatorio = Math.floor(Math.random() * (max - min + 1) + min)

    return(
        <Text style={Estilo.txtgrande}>
            O valor aleatório é {numAleatorio}
        </Text>
    );
};