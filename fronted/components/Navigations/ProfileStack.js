

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserProfile from '../../screens/User/UserProfile';

const Stack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            navigation={navigation}
            name="ExerciseScreen"
            component={UserProfile}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
  )
}

export default ProfileStack