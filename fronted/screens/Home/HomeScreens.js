
import React, { useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import Carousel from "../../components/carousel/Carousel";
import Days from "../../components/Days/Days";
import TiposEjercicios from "../../components/TypesExercises/TiposEjercicios";
import Niveles from "../../components/Levels/Niveles";
import TrabajoCasa from "../../components/WorkHome/TrabajoCasa";

// En esta pantalla {Neider} desarrolla el "Home"

export default class HomeStack extends React.Component {

    render() {
        return (
            <View style={style.container}>
                <ScrollView showsVerticalScrollIndicator = {false}  >
                    <Carousel />
                    <Days />
                    <TiposEjercicios />
                    <Niveles />
                    <TrabajoCasa />
                </ScrollView>
            </View>
        )
    }
}




const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        marginLeft: -5,
        justifyContent: 'center',
        backgroundColor: '#dcdde1',
    },
})