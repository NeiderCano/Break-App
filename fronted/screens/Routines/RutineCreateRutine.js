import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function RutineCreateRutine() {
  const navigation = useNavigation();
  return (
    <View style={styles.generalContainer}>
      <View style={styles.AddContainer}>
        <View style={styles.headerContainer}>
          <Image
            style = {styles.imageStyle}
            source = {require("../../assets/image crear rutina.png")}
          />
          <View>
            <Text style={styles.tittle}>Crear Rutina de Entrenamiento</Text>
            <Text style={styles.subtitles}>Nombre</Text>
            <TextInput 
              placeholder="ej: Entrenamiento para hipertrofia"
              style={styles.inputStyle}
            />
            <Text style={styles.subtitles}>Detalles</Text>
            <TextInput 
              placeholder="Observaciones" 
              multiline
              numberOfLines={10}
              style={styles.inputStyleDetails}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("ExerciseScreen")}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    backgroundColor: "#dfc21d9a",
    justifyContent: "center",
  },
  AddContainer: {
    alignSelf: "center",
    width: "85%",
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#000",
    shadowOpacity: "2",
    shadowRadius: 4,
    elevation: 7,
  },
  headerContainer: {
    width: "100%",
    height: "25%",
    backgroundColor: "orange",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center"
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tittle: {
    marginTop: "2%",
    fontWeight: "bold",
    fontSize: 20,
  },
  subtitles: {
    marginTop: "1%",
    color: "#727272",
    fontSize: 15,
  },
  inputStyle: {
    padding: 10,
    marginTop: "2%",
    height: "22%",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#727272",
    fontSize: 17
  },
  inputStyleDetails: {
    padding: 10,
    marginTop: "2%",
    height: "40%",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#727272",
    fontSize: 17
  },
  buttonContainer: {
    flexDirection:"row",
    marginTop:"10%",
    justifyContent:"space-between"
  },
  buttonStyle: {
    backgroundColor: "#ffffff",
    borderRadius:20,
    borderWidth: 2,
    borderColor: "#fdcf04",
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fdcf04",
    alignSelf:"center",
  },
})