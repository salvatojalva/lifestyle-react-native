import React, { useState } from 'react';
import {
    Alert,
    SafeAreaView,
    StyleSheet,
    View,
    Pressable,
    Image,
    Text,
    TextInput,
    ScrollView,

} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import estilosGenerales from '../styles';
const FormularioGasto = ({ setMostrarFormGasto, agregaGasto }) => {
    const [categoria, setCategoria] = useState('')
    const [nombreGasto, setNombreGasto] = useState('')
    const [valorGasto, setValorGasto] = useState('')
    return (
        <SafeAreaView style={styles.formulario}>
            <Pressable
                style={styles.botonCerrar}
                onPress={() => { setMostrarFormGasto(false) }}
            >
                <Text style={styles.textoBoton}>X Cerrar</Text>
            </Pressable>
            <View style={estilosGenerales.contenedor}>
                <ScrollView>
                    

                    <View style={styles.campo} >
                        <Text style={styles.label}>Cuanto tiempo hiciste ejercicio?</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ingrese Ej. 3 horas'
                            value={valorGasto}
                            onChangeText={setValorGasto}
                        >
                        </TextInput>
                    </View>

                   
                        <Text style={styles.label}>Que actividad realizaste?</Text>
                        <Picker
                            style={styles.input}
                            selectedValue={categoria}
                            onValueChange={(itemValue, itemIndex) => {
                                    setCategoria(itemValue),
                                    setNombreGasto('a')
                                }
                            }
                        >
                            <Picker.Item value='' label='--Seleccione--' />
                            <Picker.Item value='alpinismo' label='Alpinismo' />
                            <Picker.Item value='atletismo' label='Atletismo' />
                            <Picker.Item value='baloncesto' label='Baloncesto' />
                            <Picker.Item value='ciclismo' label='Ciclismo' />
                            <Picker.Item value='cuerda' label='Cuerda' />
                            <Picker.Item value='futbol' label='Futbol' />
                            <Picker.Item value='golf' label='Golf' />
                            <Picker.Item value='natacion' label='Natacion' />
                            <Picker.Item value='paracaidismo' label='Paracaidismo' />
                            <Picker.Item value='patinaje' label='Patinaje' />
                            <Picker.Item value='tenis' label='Tenis' />
                            <Picker.Item value='voleibol' label='Voleibol' />
                        </Picker>


                        <Pressable
                            style={styles.botonAgregar}
                            onPress={() => {
                                agregaGasto({ nombreGasto, valorGasto, categoria })
                                setMostrarFormGasto(false)
                            }}
                        >
                            <Text style={styles.textoBoton2}>Agregar gasto</Text>
                        </Pressable>
             
            
            </ScrollView>
        </View>
        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#fff',
        flex: 1,
        minHeight: 400
    },
    botonCerrar: {
        backgroundColor: '#A0AEC0',
        marginHorizontal: 35,
        padding: 10,
        marginVertical: 40,
        borderRadius: 10
    },
    textoBoton: {
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    textoBoton2: {
        color: '#4A5568',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    titulo: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    campo: {
        marginTop: 15
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },
    botonAgregar: {
        backgroundColor: '#E2E8F0',
        borderRadius: 10,
        padding: 10,
        marginTop: 25
    }
});

export default FormularioGasto;
