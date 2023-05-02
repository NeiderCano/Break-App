import React from "react";
import 'react-native-gesture-handler';
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';




export default class TabCreateAccount extends React.Component {
  render () {
    return (
        <View >
           <Tab.Screen
          name='CreateAccount'
          component={CreateAccountStack}
          options={( {navigation} ) =>({
            title: '',
            headerStyle: {backgroundColor: '#efb810'},
            headerTitleStyle: {color: 'whitesmoke'},
            headerRight: () => (
              <TouchableOpacity onPress={ () => navigation.navigate('Home')}> 
              <Text></Text>
              </TouchableOpacity>
            ), 
          })}
        /> 
        </View>
        );
    }
}