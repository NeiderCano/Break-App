import React from "react";
import { Image, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import ButtonAwasome from "react-native-really-awesome-button/src/themes/cartman";
import { styles } from "../Styles/LayoutModal";
import { navigation } from '../Navigations/Navigations'
import SelectedExercises from "../../screens/Exercises/SelectedExercise";


const NextDescription = ({ exercise, navigation, selectedComponent }) => {

    // let navigate = useNavigate();

    return (
        <>
            {/* <ImageBackground style = {{opacity: 0.5, width: '100%', height: '100%'}}
                source={require('../../img/OtrosEjercicios/barraMancuerna.jpg')}> */}
                {/* <Image 
                style={styles.image}
                source={require('../../assets/favicon.png')}
            /> */}
                <View style={styles.flexModalTwo}>

                    <Text style={styles.TitleDescription}>Posición inicial: </Text>
                    <Text style={styles.dataText}>{exercise.posicion_inicial}</Text>

                </View>

                <View style={styles.flexModalTwo}>

                    <Text style={styles.TitleDescription}>Descripción del ejercicio: </Text>
                    <Text style={styles.dataText}>{exercise.descripcion_ejercicio}</Text>

                </View>


                <ButtonAwasome
                    title={'DoExercise'}
                    style={styles.buttonStart}
                    progress
                    onPress={next => {
                        setTimeout(() => {
                            navigation.navigate('DoExercise')
                        }, 500);
                        next();
                    }}>Comenzar!
                </ButtonAwasome>

                <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        title={'TouchBack'}
                        onPress={() => selectedComponent('TouchBack')}
                    >
                        <Text style={styles.NextBack}>   Volver   </Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                    title={'TouchNext'}
                    > 
                    <Text>Siguiente</Text>
                </TouchableOpacity> */}


                </View>
            {/* </ImageBackground> */}

        </>


    )

}

export default NextDescription