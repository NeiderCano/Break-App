
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExerciseListScreens from '../../screens/Exercises/ExerciseListScreens';
import DoExercise from '../ExercisesComponents/DoExercise';
//import { getExercisesHome } from '../../api';
import { useState, useEffect } from 'react'

const Stack = createNativeStackNavigator(); 

const ExerciseStack = ({ navigation }) => {
  
  return (
    <Stack.Navigator>
        <Stack.Screen
            navigation={navigation}
            name="ExerciseScreen"
            component={ExerciseListScreens}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
          navigation={navigation}
          name='DoExercise'
          component={DoExercise}
          options={( {navigation} ) =>({
            title : 'Normal Bending',
            headerStyle: {backgroundColor: '#efb810'},
            headerTitleStyle: {color: 'whitesmoke'},
          })} 
        />
    </Stack.Navigator>
  )
}

export default ExerciseStack