

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PhysicalState from '../../screens/Status/PhysicalState';

const Stack = createStackNavigator();

const PhysicalStateStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            navigation={navigation}
            name="ExerciseScreen"
            component={PhysicalState}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
  )
}

export default PhysicalStateStack