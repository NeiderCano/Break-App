import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
//import { Button } from "react-native-web";



export default class Carousel extends React.Component {
    render() {
        return (

            <TouchableOpacity>
                <View style={styles.input}>
                    <StatusBar
                    style="auto" />
                    <Swiper 
                        showsButtons={false}
                        showsHorizontalScrollIndicator={false}
                        autoplay={true}
                        autoplayTimeout={4}
                        dotColor={''}
                        activeDotColor={'#121212'}

                    >

                        <Image
                            source={require('../../img/Frases/frase1.png')}
                            resizeMode="center"
                            style={styles.imagenes} />

                        <Image
                            source={require('../../img/logo.png')}
                            resizeMode="center"
                            style={styles.imagenes} />

                        <Image
                            source={require('../../img/logo.png')}
                            resizeMode="center"
                            style={styles.imagenes} />
                    </Swiper>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    input: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 400,
        
    },

    imagenes: {
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        width: 400,
    },

});    