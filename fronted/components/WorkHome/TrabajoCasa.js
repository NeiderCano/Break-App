import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

//aqui es la parde otros ejercicios

export default class TrabajoCasa extends React.Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={styles.EjercicioCasa}>
                        Ejercicios desde Casa
                    </Text>
                    <LinearGradient
                        start={{ x: 1, y: 0 }}
                        colors={['#00F260', '#0575E6']}
                        style={{
                            marginTop: 10,
                            borderRadius: 20,
                            marginLeft: 15,
                            marginRight: 10,
                            elevation: 10,
                        }}

                    >

                        <TouchableOpacity 
                        
                        style={{
                            flex: 1,
                            height: 150,

                        }}>

                            <Image style={styles.imagenes}
                                source={require('../../img/Ejercicios/EjercicioCasa.png')}
                            ></Image>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>


                <Text style={{
                    fontWeight: "bold", fontSize: 20, marginLeft: 10, marginTop: 30
                }}>
                    Otros Ejercicios
                </Text>


                <View style={styles.OtrosEjercicios}>

                    {/* Abdomen */}

                    <TouchableOpacity style={styles.cuadro1}>
                        <Image style={styles.imagenes2}
                            source={require('../../img/OtrosEjercicios/abdominales.jpg')} />


                        <Text style={{
                            textAlign: 'center'
                        }}>
                            Abdominales
                        </Text>
                    </TouchableOpacity >


                    {/* barras y mancuernas */}
                    <TouchableOpacity style={styles.Cuadro2}>
                        <Image style={styles.imagenes2}
                            source={require('../../img/OtrosEjercicios/barraMancuerna.jpg')} />

                        <Text style={{
                            textAlign: 'center'
                        }}>
                            Barras y Mancuernas
                        </Text>
                    </TouchableOpacity >

                </View>


                <View style={styles.OtrosEjercicios}>
                    {/* descanso activo */}
                    <TouchableOpacity style={styles.cuadro1}>
                        <Image style={styles.imagenes2}
                            source={require('../../img/OtrosEjercicios/cuerpoCompleto.jpg')} />
                        <Text style={{
                            textAlign: 'center'
                        }}>
                            Cuerpo Completo
                        </Text>
                    </TouchableOpacity >


                    {/* cuerpo completo */}
                    <TouchableOpacity style={styles.Cuadro2}>
                        <Image style={styles.imagenes2}
                            source={require('../../img/OtrosEjercicios/descanso.jpeg')} />
                        <Text style={{
                            textAlign: 'center'
                        }}>
                            Descanso Activo
                        </Text>
                    </TouchableOpacity >
                </View>

                <TouchableOpacity style={styles.Button}
                    onPress={() => this.props.navigation.navigate('ejercicios')}>
                    <Text style={styles.MasEjercicios}>
                        Mas ejercicios
                    </Text>
                </TouchableOpacity>


            </ScrollView>
        );
    }
}



const styles = StyleSheet.create({
    EjercicioCasa: {
        flex: 1,
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 10,
        marginTop: 30
    },
    OtrosEjercicios: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: -5,


    },


    cuadro1: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10,
        padding: 10,
        height: 120,
        width: 120,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        elevation: 5,

    },

    Cuadro2: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10,
        padding: 10,
        height: 120,
        width: 120,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        elevation: 5,

    },

    Button: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#efb810',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 30,
        borderRadius: 20,
        marginLeft: 40,
        marginRight: 40,
    },

    MasEjercicios: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        color: '#efb810',
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 15,
        marginBottom: 15,

    },

    imagenes: {
        flex: 1,
        width: null,
        height: null,

    },

    imagenes2: {
        flex: 1,
        width: null,
        height: null,
        borderRadius: 10,
    },
});


