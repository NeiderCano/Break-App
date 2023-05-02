import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Switch,
  TextInput,
  Platform,
  Button
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker"

import { Entypo } from '@expo/vector-icons';
import { Fontisto } from "@expo/vector-icons";
import { ScreenWidth } from "@rneui/base";

export default function RutineNotificationScreen() {
  const navigation = useNavigation();
  // Este se encarga de la navegación de la pantalla
  const [switch1, setSwitch1] = React.useState(false);
  // Este se encarga de la activción del as notificaciones
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("No Seleccionado");
  // Estos son los useStates de los DateTimesPickers
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "android");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear();
    let fTime = "Horas: " + tempDate.getHours() + " | Minutos: " + tempDate.getMinutes(); 
    
    setText(fDate + "\n" + fTime);
    // Este maneja el flujo de nuestro date y escribe en pantalla nuestras variables
    console.log(fDate + " (" + fTime + ")");
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <>
      <View style={styles.generalContainer}>
        <View style={styles.notiContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Notificaciones</Text>
            <TouchableOpacity
              style={styles.headerIcon}
              onPress={() => navigation.navigate("ExerciseScreen")}
            >
              <Fontisto name="close-a" size={20} color="#9b9797" />
            </TouchableOpacity>
          </View>

          <View style={styles.notificationActivationContainer}>
            <Text style={styles.minText}>Mostrar notificaciones </Text>
              <Switch
                value={switch1}
                onChange={() => setSwitch1(!switch1)}
                style={{ marginRight:"3%", marginTop:"3%", transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
                trackColor={{ false: "#ece4c1", true: "#fdd804" }}
                thumbColor={setSwitch1 ? "#e9ec0b" : "red"}
              />
          </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Nombre:</Text>
              <TextInput
                style={styles.inputStyle}
                placeholder="Rutina de ..."
                placeholderTextColor="#5a5a5a"
              />
            </View>

            <View style={styles.buttonPickers}>
              
              <TouchableOpacity
                style={styles.dateButton}
                onPress={() => showMode("date")}
                >
                <Text style={styles.buttonText}>Escoge la fecha</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => showMode ("time")}
                style={styles.hourButton}
                >
                <Text style={styles.buttonText}>Escoge la hora</Text>
              </TouchableOpacity >
              

            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputText}>Fecha: {"\n"}Hora:</Text>
              <Text style={styles.datetimeText}> {text} </Text>
            </View>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.buttonText}>Guardar Notificación</Text>
            </TouchableOpacity>

            <View style={{alignSelf: "center"}}>
              
            </View>
        </View>
      </View>
      {
        show && (
          <DateTimePicker
            testID = "dateTimePicker"
            value = {date}
            mode = {mode}
            is24Hour = {true}
            display = "default"
            onChange={onChange} 
          />
        )
      }
    </>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    backgroundColor: "#dfc21d9a",
  },
  notiContainer: {
    marginTop: "3%",
    alignSelf: "center",
    width: windowWidth - 50,
    height: windowHeight - 170,
    backgroundColor: "#fff",
    borderRadius: 20,
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
    height: "5%",
    flexDirection: "row",
    marginTop: 20,
  },
  headerText: {
    width: "50%",
    fontWeight: "bold",
    fontSize: 25,
    color: "#5c5c5c",
    marginLeft: "5%"
  },
  headerIcon: {
    width: "50%",
    fontWeight: "500",
    fontSize: 25,
    color: "#474646",
    alignSelf: "flex-start",
    marginLeft: "36%"
  },
  minText: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    color: "#fdcf04",
    marginRight:"10%",
    
  },
  notificationActivationContainer: {
    flexDirection:"row",
    alignSelf:"center",
    width: "80%",
    marginTop:"2%"
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: "4%",
  },
  inputText: {
    marginRight: "2%",
    marginLeft: "4%",
    fontWeight: "bold",
    fontSize: 18,
    color: "#5c5c5c",
    alignSelf: "flex-end"
  },
  inputStyle: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#e9ec0b",
    width: "70%",
    color: "#5c5c5c",
    fontWeight:"500",
    fontSize: 15
  },
  buttonPickers: {
    marginTop: "5%",
    alignSelf: "center",
    width: ScreenWidth - 150,
    height: "5%",
    flexDirection:"row",
  },
  dateButton: {
    backgroundColor:"#ffffff",
    borderRadius: 20,
    width:"45%",
    height:"100%",
    borderWidth: 2,
    borderColor: "#fdcf04"
  },
  hourButton: {
    backgroundColor: "#ffffff",
    borderRadius:20,
    width:"45%",
    height:"100%",
    borderWidth: 2,
    borderColor: "#fdcf04",
    marginLeft:"10%"
    
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fdcf04",
    alignSelf:"center",
  },
  datetimeText: {
    fontSize: 18,
    color:"#5c5c5c",
    fontWeight:"500"
  },
  submitButton: {
    backgroundColor: "#ffffff",
    borderRadius:20,
    width:"80%",
    height:"5%",
    borderWidth: 2,
    borderColor: "#fdcf04",
    marginTop: "3%",
    alignItems: "center",
    alignSelf: "center"
  }
});
