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
import { formatoFecha } from '../helpers';
import estilosGenerales from '../styles';
const galeriaIconos={
    
    atletismo: require('../img/atletismo.png'),
    baloncesto: require('../img/baloncesto.jpg'),
    ciclismo: require('../img/ciclismo.jpg'),
    cuerda: require('../img/cuerda.png'),
    futbol: require('../img/futbol.png'),
    golf: require('../img/golf.jpg'),
    natacion: require('../img/natacion.png'),
    paracaidismo: require('../img/paracaidismo.png'),
    patinaje: require('../img/patinaje.jpg'),
    tenis: require('../img/tenis.jpg'),
    voleibol: require('../img/voleibol.png')
}

const Gasto = ({ itemGasto }) => {
    const { nombreGasto, categoria, valorGasto, fecha } = itemGasto
    return (
        <View style={styles.contenedor}>
            <View style={styles.ficha}>
                <View style={styles.alineaImagen}>
                    <Image
                        style={styles.imagen}
                        source={galeriaIconos[categoria]}
                    ></Image>
                    <View style={styles.contenedorTexto}>
                        <Text style={styles.categoria}>{categoria}</Text>
                        <Text style={styles.fecha}>{formatoFecha(fecha)}</Text>
                    </View>
                </View>
                <Text style={styles.valorGasto}>{valorGasto}{' hr'}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    contenedor: {
        ...estilosGenerales.contenedor,
        marginBottom: 15,
    },
    ficha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imagen: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#A0AEC0'
    },
    alineaImagen: {
        flexDirection: 'row',
        alignItems: 'center',
        flex:1
    },
    contenedorTexto:{
        marginLeft:10
    },
    categoria:{
        textTransform:'uppercase',
        color:'#332424',
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5
        
    },
    nombreGasto:{
        color:'#D94821',
        fontSize:25
    },
    valorGasto:{
        color:'#1A202C',
        fontSize:16,
        fontWeight:'600',
        paddingRight: 25
    },
    fecha:{
        fontSize:12,
        color:'#1A202C',
        fontWeight:'400'
    }
});

export default Gasto;
