import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, Touchable } from "react-native";

//dias de la semana junto con los objetivos

export default class Days extends React.Component {


    render() {


        return (



            <ScrollView>
                <View >

                    <View style={styles.input}>
                        <Text style={{
                            fontWeight: "bold",
                            marginLeft: 0,
                            marginTop: 10,
                            fontSize: 20,
                        }}>Dias de la Semana</Text>

                        <TouchableOpacity
                            style={{
                                marginTop: 20,
                                marginLeft: 5,
                                borderWidth: 1,
                                borderColor: '#2196f3',
                                width: 80,
                                height: 80,
                                borderRadius: 50,
                                backgroundColor: '#2196f3',
                                elevation: 5,

                            }}
                        >
                            <Image style={{
                                width: 80,
                                height: 80,
                            }}
                                source={require("../../img/Dias/Dia1.png")}>
                            </Image>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                marginTop: -80,
                                marginLeft: 100,
                                borderWidth: 1,
                                borderColor: '#76ee94',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 80,
                                height: 80,
                                backgroundColor: '#76ee94',
                                borderRadius: 50,
                                elevation: 5,
                            }}
                        >
                            <Image style={{
                                width: 80,
                                height: 80,
                            }}
                                source={require("../../img/Dias/Dia2.png")}>
                            </Image>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                marginTop: -80,
                                marginLeft: 190,
                                borderWidth: 1,
                                borderColor: '#ff6961',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 80,
                                height: 80,
                                backgroundColor: '#ff6961',
                                borderRadius: 50,
                                elevation: 10,
                            }}
                        >
                            <Image style={{
                                width: 80,
                                height: 80,
                            }}
                                source={require("../../img/Dias/Dia3.png")}>
                            </Image>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                marginTop: -80,
                                marginLeft: 280,
                                borderWidth: 1,
                                borderColor: '#fdfd96',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 80,
                                height: 80,
                                backgroundColor: '#fdfd96',
                                borderRadius: 50,
                                elevation: 10,
                            }}
                        >
                            <Image style={{
                                width: 80,
                                height: 80,
                            }}
                                source={require("../../img/Dias/Dia4.png")}>
                            </Image>

                        </TouchableOpacity>

                    </View>







                    {/* Parte de objetivos */}
                    <View style={styles.input}>

                        <Text style={{
                            fontWeight: "bold",
                            marginTop: 30,
                            fontSize: 20,
                            marginBottom: 10,
                        }}>
                            Obgetivos

                        </Text>


                        <View style={styles.Obgetivos}>
                            <TouchableOpacity
                                style={styles.Hipertrofia}>
                                <Image style={styles.imagenes}
                                    source={require("../../img/obgetivos/hipertrofia.jpg")}>
                                </Image>

                                <Text style={{
                                    fontSize: 14,
                                    textAlign: 'center',
                                    marginTop: 0,
                                    marginBottom: 14,
                                }}>
                                    Hipertrofia
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity
                                style={styles.Definicion}>
                                    <Image style={styles.imagenes}
                                    source={require("../../img/obgetivos/definicion.jpg")}>
                                </Image>
                                <Text style={{
                                    fontSize: 14,
                                    textAlign: 'center',
                                }}>
                                    Definicion
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.PerderPeso}>
                                    <Image style={styles.imagenes}
                                    source={require("../../img/obgetivos/perderPeso.jpg")}>
                                </Image>
                                <Text style={{
                                    fontSize: 14,
                                    textAlign: 'center',
                                }}>
                                    Perder Peso
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    input: {
        flex: 1,
        marginLeft: 10,
        marginBottom: 20,

        backgroundColor: '',

    },

    imagenes : {
        borderWidth: 1,
        width: '100%',
        height: '100%',
        borderRadius: 10,
        marginRight: 5,

    },


    Obgetivos: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 5,
        padding: -20,

    },

    Hipertrofia: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ffffff',
        width: 80,
        height: 120,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginRight: 5,
        elevation: 10,
    },

    Definicion: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ffffff',
        width: 80,
        height: 120,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginRight: 5,
        elevation: 3,
    },

    PerderPeso: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ffffff',
        width: 80,
        height: 120,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 5,
    },


});

