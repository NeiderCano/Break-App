import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";



// Este es el comoponente de niveles ( muestras los niveles de ejercicios )
export default class Circles extends React.Component {


    render() {


        return (


            <View style={styles.container}>

                <Text style={{
                    fontWeight: "bold",
                    
                    marginLeft: -280,
                    marginTop: 20,
                    fontSize: 20,
                    marginBottom: 10,
                }}>
                    Niveles
                </Text>


                <View style={styles.input}>
                    <TouchableOpacity style={styles.principientes}>
                        <Image style={styles.imagenes}
                            source={require('../../img/Niveles/nivel1.png')}
                        />
                        <Text style={{
                            textAlign: 'center',
                        }}>
                            Principiantes
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Intermedio}>
                        <Image style={styles.imagenes}
                            source={require('../../img/Niveles/nivel2.png')}
                        />
                        <Text style={{
                            textAlign: 'center',
                        }}>
                            Intermedio
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Avanzado}>
                        <Image style={styles.imagenes}
                            source={require('../../img/Niveles/nivel3.png')}
                        />
                        <Text style={{
                            textAlign: 'center',
                        }}>
                            Avanzado
                        </Text>

                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flex: 0.9, height: 1, backgroundColor: 'black'}} /></View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignContent:'center',
         alignItems:'center',
        backgroundColor: '',
    },


    input: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: 5,
        padding: -20,
    },

    imagenes: {
        flex: 1,
        width: 120,
        height: 120,
        borderRadius: 20,

    },

    principientes: {

        borderColor: '#ffffff',
        width: 120,
        height: 120,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginLeft: 10,
        elevation: 5,
    },

    Intermedio: {
        marginLeft: 5,
        borderColor: '#ffffff',
        width: 120,
        height: 120,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        elevation: 5,
    },

    Avanzado: {
        marginLeft: 5,
        borderColor: '#ffffff',
        width: 120,
        height: 120,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        elevation: 5,
    },


});