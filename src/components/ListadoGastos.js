import React from 'react';
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    View,
    Pressable,
    Image,
    Modal,
    Text,
    FlatList
} from 'react-native'
import Gasto from './Gasto';

const ListadoGastos = ({ gastos }) => {
    return (
        <View style={styles.contenedor}>

            {gastos.length == 0 ?
                <Text style={styles.noGastos}> No tienes actividades aun :'( </Text> :
                (
                    gastos.map(itemGasto => (
                        <Gasto
                            key={itemGasto.id}
                            itemGasto={itemGasto}
                        >
                        </Gasto>

                    ))
                )}
        </View>
    );
}
const styles = StyleSheet.create({
    contenedor: {
        marginTop: 25,
        marginBottom: 25
    },
    titulo: {
        marginTop: 60,
        textAlign: 'center',
        color: '#5c5948',
        fontSize: 25,
        fontWeight: 'bold'
    },
    noGastos: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 40,
        fontWeight: 'bold',
        color: '#A0AEC0'
    }
});

export default ListadoGastos;
