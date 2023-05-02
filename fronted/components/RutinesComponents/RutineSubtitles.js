import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const Subtitle = ({ name, label, color }) => {
  return (
    <View style={styles.subtitleBox}>
      <Ionicons
        style={styles.subtitleIcon}
        name={name}
        size={24}
        color={color}
      />
      <Text style={styles.subtitleText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleBox: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  subtitleText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#7c7e82",
    marginLeft: 6,
  },
  subtitleIcon: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default Subtitle;
