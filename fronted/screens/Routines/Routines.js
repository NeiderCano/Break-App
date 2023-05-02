import React from "react";
import { Text, View, ScrollView, StyleSheet, Button } from "react-native";
import { useState } from "react";

import RutineCalendar from "../../components/RutinesComponents/RutineCalendar";
import RutineCard from "../../components/RutinesComponents/RutineCard";
import Subtitle from "../../components/RutinesComponents/RutineSubtitles";
import RutineTopButtoms from "../../components/RutinesComponents/RutineTopButtoms";
import RutineChart from "../../components/RutinesComponents/RutineChart";
import RutineCalendarScreen from "./RutineCalendarScreen";
import RutineNotificationScreen from "./RutineNotificationScreen"
import TestScreen from "./testScreen";
// En esta pantalla {William} desarrolla la "Screen" (pantalla) "Mis rutinas"

export default Routines = () => {
  return (
    <ScrollView>
      <View style={styles.rutineContainer}>
        <View style={styles.ComponentSpaces}>
          <RutineTopButtoms />
        </View>
        <View style={styles.ComponentSpaces}>
          <RutineCard />
        </View>
        <View style={{ alignSelf: "flex-start" }}>
          <Subtitle name="calendar-sharp" label="Historia" color="#7c7e82" />
        </View>
        <RutineCalendar />
        <View style={{ alignSelf: "flex-start" }}>
          <Subtitle name="ios-bar-chart" label="Informe" color="#7c7e82" />
        </View>
        <View>
          <RutineChart />
        </View>
      </View>
    </ScrollView>
    // <RutineCalendarScreen />
    // <TestScreen />
  );
};

const styles = StyleSheet.create({
  rutineContainer: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
  },
  ComponentSpaces: {
    marginTop: 20,
    alignSelf: "center",
  },
});
