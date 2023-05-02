import React from "react";

import {
  View,
  Text,
  Button,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Calendar } from "react-native-calendars";

export default function RutineCalendar() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.calendarContainer}>
        <Calendar style={styles.calendarStyle} />

        <TouchableOpacity
          onPress={() => navigation.navigate("RutineHistory")}
          style={styles.more}
        >
          <Text style={styles.moreText}>Ver más</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  calendarContainer: {
    alignSelf: "center",
    width: deviceWidth - 30,
    height: 430,
    backgroundColor: "#ffffffff",
    borderRadius: 25,
    shadowColor: "#9b9b9b",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
  },
  calendarStyle: {
    alignSelf: "center",
    width: deviceWidth - 30,
    height: 370,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  more: {
    backgroundColor: "#ffae00",
    alignSelf: "flex-end",
    borderRadius: 20,
    width: "30%",
    height: "9%",
    marginRight: 10,
    marginTop: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  moreText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
