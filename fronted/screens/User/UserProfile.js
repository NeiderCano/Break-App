import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Touchable } from "react-native";
import { Icon } from '@rneui/base';

import LogginBreak from "../../screens/Account/LogginBreak";


const Accout = () => {

    return (
        <ScrollView>
            
            {/* foto de perfil del usuario */}
            <View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                }} >
                    <TouchableOpacity>
                        <View style={styles.user} >
                            <Text style={{
                                color: "white",
                                textAlign: "center",
                                fontSize: 20,
                            }} >J</Text>
                        </View>
                    </TouchableOpacity>


                    {/* nombre del usuario */}
                    <View>
                        <Text style={{ fontSize: 20 }} >Juan Pablo Arroyave Rios</Text>
                    </View>
                </View>


                {/* muestra la info del ususario ejemplo correo  */}
                <TouchableOpacity style={{ marginTop: -27, marginLeft: 35 }} >
                    <Text style={{ fontSize: 15, color: "gray", textAlign: "center" }} >pabloooo3g27@gmail.com</Text>
                </TouchableOpacity>


    
                {/* boton de cerrar la secion */}
                <TouchableOpacity 
                    onPress={() => {
                        alert("cerrando sesion")
                        //navigation.navigate("LogginBreak")
                    }}
                >
                    <Text style={{ fontSize: 15, color: "darkblue", marginLeft: 125 }} >
                        Cerrar sesion
                    </Text>
                </TouchableOpacity>



                  {/* boton de la vercion premiun  */}
                <TouchableOpacity style={styles.button2} >
                    <View style={{ position: "absolute", left: 30 }} >
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://e7.pngegg.com/pngimages/450/269/png-clipart-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-thumbnail.png',
                            }} />
                    </View>
                    <Text style={{ color: "white", fontWeight: "800", fontSize: 20 }} >7 días gratis</Text>
                    <Text style={{ color: "white", fontWeight: "500" }} >¡Prueba la versión premium!</Text>
                </TouchableOpacity>


                {/* BOTON DE LA VERCON PREMIUM  */}
                <View style={{ marginTop: 40, marginLeft: 20 }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Icon type='material-community'
                            name="crown"
                            size={26}
                            color="orange" />
                        <Text style={{ fontSize: 15, color: "black", fontWeight: "500" }} >
                            Versión Premium</Text>
                    </View>
                </View>

                {/* BOTON DE EVALUARNOS  */}
                <View style={{ marginTop: 40, marginLeft: 20 }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Icon type='material-community'
                            name="heart"
                            size={26}
                            color="red" />
                        <Text style={{ fontSize: 15, color: "black", textAlign: "center" }} >
                            Evaluar esta aplicaion</Text>
                    </View>
                </View>

                {/* BOTON DE CONTACTO  */}
                <View style={{ marginTop: 40, marginLeft: 20 }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Icon type='material-community'
                            name="email"
                            size={26}
                            color="green" />
                        <Text style={{ fontSize: 15, color: "black" }} >
                            Contacto</Text>
                    </View>
                </View>

                {/* BOTON DE EDITAR EL ENTRENAMIENTO DEL USUARIO  */}
                <View style={{ marginTop: 40, marginLeft: 20 }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Icon type='material-community'
                            name="calendar-edit"
                            size={26}
                            color="orange" />
                        <Text style={{ fontSize: 15, color: "black" }} >
                            Editor de entrenamiento terminado</Text>
                    </View>
                </View>


                {/* BOTON DE LAS COMILLAS  */}
                <View style={{ marginTop: 40, marginLeft: 20 }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Icon type='material-community'
                            name="comma-circle"
                            size={20}
                            color="#1a73e8" />
                        <Icon type='material-community'
                            name="comma-circle"
                            size={20}
                            color="#1a73e8" />
                        <Text style={{ fontSize: 15, color: "black" }} >
                            Dudas frecuentes</Text>
                    </View>
                </View>


                {/* BOTON DE LAS REDES SOCIALES   */}
                <View style={{ marginTop: 40, marginLeft: 20 }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Icon type='material-community'
                            name="instagram"
                            size={26}
                            color="orange" />
                        <Text style={{
                            fontSize: 15,
                            color: "black"
                        }} >
                            Redes Sociales</Text>
                    </View>
                </View>



                {/* BOTON DE COMPARTIR  */}
                <View style={{ marginTop: 40, marginLeft: 20 }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Icon type='material-community'
                            name="share"
                            size={26}
                            color="purple" />
                        <Text style={{
                            fontSize: 15,
                            color: "black"
                        }} >
                            Share</Text>
                    </View>
                </View>


                {/* BOTON DE TERMINOS Y CONDICIONES   */}
                <View style={{ marginTop: 40, marginLeft: 20 }} >
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Icon type='material-community'
                            name="book-open-page-variant"
                            size={26}
                            color="blue" />
                        <Text style={{
                            fontSize: 15,
                            color: "black"
                        }} >Terminios y Condiciones</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
        
    )
}



export default Accout


const styles = StyleSheet.create({
    button2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        paddingHorizontal: 1,
        borderRadius: 10,
        elevation: 1,
        backgroundColor: '#6dc777',
        margin: 16,
        width: "93%",
        marginTop: 40
    },
    tinyLogo: {
        width: 35,
        height: 70,
    },

    user: {
        marginRight: 40,
        marginLeft: 10,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 25,
        backgroundColor: '#68a0cf',
        borderRadius: 50,
        borderWidth: 1,
        width: 75,
        height: 75,
        borderColor: '#fff'
    },







})