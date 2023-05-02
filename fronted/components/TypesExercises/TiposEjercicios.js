import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Touchable } from "react-native";





//Este es el comoponente de Objetivos (Tipos de ejercicios )y el que se encarga de mostrar tambien el de la mujer (Exclusivo para la mujer)
export default class TiposEjercicios extends React.Component  {

    



    render() {
        return (

            // Todes los tipos de ejercicios
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.TiposEjercicios}>
                        Tipos de ejercicios
                    </Text>
                </View>

                <TouchableOpacity 

                    style={styles.Ejercicios}>
                    <Image 


                        style={{
                            width: 90,
                            height: 90,
                            borderRadius: 10,
                        }}
                        source={require("../../img/Ejercicios/pecho.png")}
                    />

                </TouchableOpacity>


                
                    <View>
                        <Text style={{
                            fontSize: 18,
                            marginLeft: 120,
                            marginTop: -60
                        }}>
                            Pectorales
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 0, marginLeft: 120 }}>
                            <View style={{ flex: 0.9, height: 1, backgroundColor: '#ffffff' }} /></View>
                    </View>




                    <TouchableOpacity style={styles.Ejercicios} >

                        <Image style={{
                            width: 90,
                            height: 90,
                            borderRadius: 10,
                        }}
                            source={require("../../img/Ejercicios/espalda.png")}
                        />
                    </TouchableOpacity>

                    <Text style={{
                        fontSize: 18,
                        marginLeft: 120,
                        marginTop: -60
                    }}>
                        Espalda
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 0, marginLeft: 120 }}>
                        <View style={{ flex: 0.9, height: 1, backgroundColor: '#ffffff' }} /></View>




                    <TouchableOpacity style={styles.Ejercicios1} >
                        <Image style={{
                            width: 90,
                            height: 90,
                            borderRadius: 10,
                        }}
                            source={require("../../img/Ejercicios/pierna.png")}
                        />

                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 18,
                        marginLeft: 120,
                        marginTop: -60
                    }}>

                        Piernas
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 0, marginLeft: 120 }}>
                        <View style={{ flex: 0.9, height: 1, backgroundColor: '#ffffff' }} /></View>





                {/* ejercicios para las mujeres */}
                <View>
                    <Text style={{
                        fontWeight: "bold",
                        marginLeft: 10,
                        marginTop: 50,
                        fontSize: 20,
                    }}>
                        Para Mujeres
                    </Text>



                    <View>
                        <TouchableOpacity style={{
                            marginTop: 10,
                            marginLeft: 10,
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#ec38bc',
                            justifyContent: 'center',
                            width: 370,
                            height: 170,
                            backgroundColor: '#ec38bc',
                            borderRadius: 20,
                            elevation: 15,


                        }} >



                            <Image style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 20,
                                marginTop: -75,
                                marginEnd: -10,
                                
                            }}
                                source={require("../../img/women/women.png")}>
                            </Image>

                            <Text style={{
                                color: 'white',
                                fontWeight: "bold",
                                fontSize: 30,
                                marginLeft: -165,
                                marginTop: -150,
                                

                            }}>
                                Exclusiva
                            </Text>

                            <Text style={{
                                color: 'white',
                                fontWeight: "bold",
                                fontSize: 25,
                                marginLeft: -150,
                            }}>
                                Para Mujeres
                            </Text>


                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '',
    },

    TiposEjercicios: {
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 20,
        fontSize: 20,
    },

    Ejercicios: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 90,
        borderRadius: 10,
        backgroundColor: '#c0c0c0',
        elevation: 5,
    },

    Ejercicios1: {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 90,
        borderRadius: 10,
        backgroundColor: '#c0c0c0',
        elevation: 5,
    },





});