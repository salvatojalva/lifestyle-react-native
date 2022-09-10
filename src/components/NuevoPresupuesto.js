import React from 'react';
import {
    Pressable,
    TextInput,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import estilosGenerales from '../styles';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, asignarPresupuesto }) => {


    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}>Cual es tu meta para esta semana?</Text>
            <TextInput
                placeholder='Ejemplo: 200 horas'
                keyboardType='numeric'
                style={styles.input}
                value={presupuesto}
                onChangeText={setPresupuesto}
            >
            </TextInput>
            <Pressable
                style={styles.boton}
                onPress={() => asignarPresupuesto(presupuesto)}
            >
                <Text style={styles.textoBoton}>Guardar</Text>
            </Pressable>
        </View>

    );
}
const styles = StyleSheet.create({
    contenedor: {
        ...estilosGenerales.contenedor
    },
    label: {
        textAlign: 'center',
        color: '#3885f6',
        fontSize: 15
    },
    input: {
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginTop: 15
    },
    boton: {
        backgroundColor: '#E2E8F0',
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
        marginTop: 15
    },
    textoBoton: {
        textAlign: 'center',
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

});

export default NuevoPresupuesto;
