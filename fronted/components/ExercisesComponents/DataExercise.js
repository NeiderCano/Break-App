import React from 'react'
import { Text, View } from 'react-native'
import {styles} from '../Styles/LayoutModal'

const DataExercise = ({exercise}) => {
  return (
    <View exercise={exercise}>

      <Text style={styles.textTouchExercise}>{exercise.nombre_ejercicio}</Text>
      <Text style={styles.textTouchExercise}>{"Grupo muscular: "+exercise.grupo_muscular}</Text>
    
    </View>
  )
}  

export default DataExercise