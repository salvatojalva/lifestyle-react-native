import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import estilosGenerales from '../styles';
import * as Progress from 'react-native-progress';

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [gastado, setGastado] = useState(0)
  const [disponible, setDisponible] = useState()

  useEffect(() => {
    const totalGastado = gastos.reduce((total, item) => total + Number(item.valorGasto), 0)
    setGastado(totalGastado)
    setDisponible(presupuesto - totalGastado)
  }, [gastos])
  return (
    <View style={styles.avance}>

      <View style={styles.contenedorTexto}>
        <Text style={styles.label}>Avance</Text>
        <Text style={styles.textValor}>

          {gastado}{' de '}{presupuesto}{' horas'}
        </Text>
        <Progress.Bar style={styles.progress} progress={ gastado/100 } width={340} color="#fff"/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  progress:{
    marginVertical: 10
  },
  centrarImagen: {
    alignItems: 'center',
  },
  imagen: {
    width: 200,
    height: 200
  },
  contenedorTexto: {
    marginTop: 10
  },
  label: {
    color: '#FFFFFF'
  },
  textValor: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800'
  },
  avance: {
    backgroundColor: '#718096',
    borderRadius: 10,
    marginHorizontal: 15,
    padding: 20,
    transform: [{ translateY: 50 }],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
  }
});

export default ControlPresupuesto;
