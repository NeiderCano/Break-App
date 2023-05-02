import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#ffffffff",
  backgroundGradientFromOpacity: 1,
  // Este es el valor de la opacidad del primer color.
  backgroundGradientTo: "#ffffffff",
  backgroundGradientToOpacity: 1,
  // Este es el valor de la opacidad del segundo color.
  color: (opacity = 1) => `rgba(225, 95, 0, ${opacity})`,
  // Este corresponde al color de la letra
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(225, 95, 0, ${opacity})`, // optional}
      // Este es el color de los puntos de chart
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Informe"], // optional
};

export default function RutineChart() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.chartContainer}>
        <View>
          <LineChart
            data={data}
            width={screenWidth - 30}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={{
              alignSelf: "center",
              borderRadius: 20,
            }}
          />
          <TouchableOpacity
            style={styles.more}
            onPress={() => navigation.navigate("RutineInforme")}
          >
            <Text style={styles.moreText}>Ver más</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  chartContainer: {
    alignSelf: "center",
    width: screenWidth - 30,
    height: 320,
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
  chartStyle: {},
  more: {
    backgroundColor: "#ffae00",
    alignSelf: "flex-end",
    borderRadius: 20,
    width: "30%",
    height: "13%",
    marginRight: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  moreText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
