import React, { useEffect, useState, useContext  } from "react";
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet } from "react-native";


// import { Text, View } from "react-native";
import ExercisesListView from '../../components/ExercisesComponents/ExerciseList'
import Layout from '../../components/layout'
import { styles } from "../../components/Styles/LayoutModal";



// En esta pantalla {Tomás} desarrolla la "Screen" (pantalla) "Ejercicios"
const image = require('../../assets/Muscle_Groups/cuerpo_humano_Dark.png')

const ExerciseListScreens = ({navigation}) =>{

    return(
        <Layout >
            <ImageBackground 
                source={image}
                resizeMode="contain"
                style={Imagestyles.image}>
                <ExercisesListView
                    navigation={navigation}
                />
            </ImageBackground>
        </Layout>
    )
    
}



const Imagestyles = StyleSheet.create({
    image: {
        flex: 1,
        backgroundColor: '#121212',
        marginTop: '5%',
        justifyContent: "center",
        borderRadius: 10,
        // borderWidth: 5,
        // borderTopRightRadius: 45
    },
    
})


export default ExerciseListScreens;