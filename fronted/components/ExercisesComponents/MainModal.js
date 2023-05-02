import React, { useEffect, useRef } from "react";
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from "../Styles/LayoutModal";


function MainModal({ exercise, selectedComponent }) {


    return (
        <>
            {/* <Image 
        style={styles.image}
        source={require('../../assets/favicon.png')}/> */}

            

                <View>
                    <Text style={styles.titulo}>INFO</Text>

                </View>



                <View style={styles.flexModal}>

                    <Text style={styles.TitleDescription}>Nombre del ejercicio: </Text>
                    <Text style={styles.dataText}>{exercise.nombre_ejercicio}</Text>

                </View>

                <View style={styles.flexModal}>

                    <Text style={styles.TitleDescription}>Nivel de dificultad: </Text>
                    <Text style={styles.dataText}>{"Nivel de dificultad: " + exercise.dificultad_ejercicio}</Text>

                </View>

                <View style={styles.flexModal}>

                    <Text style={styles.TitleDescription}>Numero de reps: </Text>
                    <Text style={styles.dataText}>{exercise.repeticiones_ejercicio}</Text>

                </View>

                <View style={styles.flexModal}>

                    <Text style={styles.TitleDescription}>Grupo muscular: </Text>
                    <Text style={styles.dataText}>{exercise.grupo_muscular}</Text>

                </View>


                <View style={styles.flexModal}>

                    <Text style={styles.TitleDescription}>Equipo de entrenamiento: </Text>
                    <Text style={styles.dataText}>{exercise.equipo_entrenamiento}</Text>

                </View>



           
            
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                    // title={'TouchBack'}
                    // onPress={() => selectedComponent('TouchBack')}
                    >
                        <Text style={styles.NextBack}>  Volver  </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        title={'TouchNext'}
                        onPress={() => selectedComponent('TouchNext')}
                    >
                        <Text style={styles.NextBack} >  Siguiente  </Text>
                    </TouchableOpacity>

                </View>
                

        </>
    )
}








export default MainModal




