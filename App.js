import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Image,
  Modal,
  Text,
  FlatList,
  ScrollView
} from 'react-native'
import Encabezado from './src/components/Encabezado';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import ListadoGastos from './src/components/ListadoGastos';

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0)
  const [bandera, setBandera] = useState(false)
  const [gastos, setGastos] = useState([])
  const [mostrarFormGasto, setMostrarFormGasto] = useState(false)
  const asignarPresupuesto = (itemPresupuesto) => {
    if (itemPresupuesto > 0) {
      setBandera(true)
    }
    else {
      setBandera(false)
      Alert.alert(
        'Error', 'El presupuesto debe ser mayor a 0', [{ text: 'Aceptar' }]
      )
    }
  }

  const agregaGasto = (nuevoGasto) => {
    if (Object.values(nuevoGasto).includes('')) {
      Alert.alert(
        'Error', 'Todos los campos son obligatorios', [{ text: 'Aceptar' }]
      )
      console.log(agregaGasto)
    }
    else {
      nuevoGasto.id = gastos.length + 1
      nuevoGasto.fecha=Date.now()
      setGastos([...gastos, nuevoGasto])
    }
  }

  return (
    <SafeAreaView style={styles.contenedorPrincipal}>
      <ScrollView>
      <View style={styles.encabezado}>
        
        {bandera ?
          (
              <ControlPresupuesto
                presupuesto={presupuesto}
                gastos={gastos}
                setBandera={setBandera}

              />
          ) :
          (<NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            asignarPresupuesto={asignarPresupuesto}
          ></NuevoPresupuesto>
          )}
      </View>

      {bandera &&( 
      <ListadoGastos
        gastos={gastos}
        setGastos={setGastos}
      />
      )}
      </ScrollView>
      <Modal
        visible={mostrarFormGasto}
        animationType='slide'
      >
        <FormularioGasto
          setMostrarFormGasto={setMostrarFormGasto}
          agregaGasto={agregaGasto}
        >
        </FormularioGasto>
      </Modal>
      {bandera &&
        <Pressable
          onPress={() => { setMostrarFormGasto(true) }}
        >
          <Image
            style={styles.imagen}
            source={require('./src/img/nuevo-registro.png')}
          ></Image>
        </Pressable>
      }
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  contenedorPrincipal: {
    backgroundColor: '#f6f6f6',
    flex: 1,
  },
  encabezado: {
    backgroundColor: '#E2E8F0',
    minHeight: 150
  },
  imagen: {
    width: 45,
    height: 45,
    position: 'absolute',
    bottom: 5,
    right: 20
  },
  tituloGastos:{
    marginTop:60,
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold'
  }
});

export default App;
