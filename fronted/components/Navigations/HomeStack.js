import React, { createElement } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../screens/Home/HomeScreens';
const Stack = createStackNavigator(); 

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            navigation={navigation}
            name='home'
            component={HomeScreen}
            options={{
              headerShown: false
            }}
        />
    </Stack.Navigator>
  )
}

export default HomeStack