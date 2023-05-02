import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import 'react-native-gesture-handler';
import Navigations from "../Navigations";


const PhysicalState = ({navigation}) => {
  return (
      <View >
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            marginTop: 100,
            color: "#efb810",
          }}
        >
          Mi Estado
        </Text>
      </View>
    );
  }
  export default PhysicalState;
  
