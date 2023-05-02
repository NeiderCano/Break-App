import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function RutineTopButtoms() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.notificationIcon}
          onPress={() => navigation.navigate("Notificaciones")}
        >
          <Fontisto name="bell-alt" size={30} color="#faf9f9" />
          <Text style={styles.textStyle}>Crear Notificación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addRutineIcon}
          onPress={() => navigation.navigate("CrearRutina")}
        >
          <Ionicons name="ios-barbell" size={30} color="#faf9f9" />
          <Text style={styles.textStyle}>Crear Rutina</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const windowWidth = Dimensions.get("window").width;
const border = 20;

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 20,
    height: 80,
    flexDirection: "row",
  },
  notificationIcon: {
    width: "50%",
    height: "100%",
    backgroundColor: "#fad400ff",
    alignItems: "center",
    justifyContent: "center",
    flexDireaction: "row",
    borderBottomLeftRadius: border,
    borderTopLeftRadius: border,
    borderColor: "#fae100cc",
    borderWidth: 1,
    shadowColor: "#dfa731",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
  },
  addRutineIcon: {
    width: "50%",
    height: "100%",
    backgroundColor: "#fad400ff",
    alignItems: "center",
    justifyContent: "center",
    flexDireaction: "row",
    borderBottomRightRadius: border,
    borderTopRightRadius: border,
    borderColor: "#fae100cc",
    borderWidth: 1,
    shadowColor: "#dfa731",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
  },

  textStyle: {
    color: "#faf9f9",
    fontWeight: "bold",
    fontSize: 20,
  },
});
