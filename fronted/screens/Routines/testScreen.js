import React, { useState } from "react";
import { Button, View, StyleSheet, Text, Platform } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

export default function testScreen() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "android");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
      
    let fTime =
      "Hours: " + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();
    setText(fDate + "\n" + fTime);

    console.log(fDate + " (" + fTime + ")");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <>
      <View style={styles.generalContainer}>
        <Text> {text} </Text>
        <Button title="DatePicker" onPress={() => showMode("date")} />
        <Button title="TimePicker" onPress={() => showMode("time")} />
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

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    alignItems: "center",
  },
});
