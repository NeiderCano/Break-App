import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function RutineCard() {
  const navigation = useNavigation();
  return (
    <>
      <View style={Styles.cardContainer}>
        <View style={Styles.imageContainer}>
          <Image
            style={Styles.imageStyle}
            source={require("../../assets/pesas.png")}
          />
        </View>
        <View style={Styles.titleContainer}>
          <View style={Styles.containerTittle}>
            <Text style={Styles.titleCard}>Mis Rutinas</Text>
          </View>
          <View style={Styles.containerButton}>
            <TouchableOpacity
              style={Styles.buttonTittle}
              onPress={() => navigation.navigate("MisRutinas")}
            >
              <Text style={Styles.textButtonTittle}>Ver más</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

{
  /* <Text>Hola guapo</Text> */
}

const deviceWidth = Dimensions.get("window").width;

const Styles = StyleSheet.create({
  cardContainer: {
    alignSelf: "center",
    marginTop: 20,
    width: deviceWidth - 25,
    height: 250,
    backgroundColor: "#fae100cc",
    borderRadius: 20,
    shadowColor: "#dfa731",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
  },
  imageContainer: {
    width: deviceWidth - 25,
    height: "80%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imageStyle: {
    width: deviceWidth - 25,
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleContainer: {
    width: deviceWidth - 25,
    height: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "fae100cc",
    alignItems: "center",
    flexDirection: "row",
  },
  containerTittle: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "100%",
  },
  containerButton: {
    width: "50%",
    height: "100%",
    alignItems: "flex-end",
  },
  titleCard: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  buttonTittle: {
    marginTop: "2.5%",
    marginRight: "5%",
    width: "60%",
    height: "75%",
    backgroundColor: "#ffae00",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonTittle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
