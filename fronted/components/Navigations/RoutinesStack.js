import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Routines from "../../screens/Routines/Routines";
import RutineNotificationScreen from "../../screens/Routines/RutineNotificationScreen";
import RutineCreateRutine from "../../screens/Routines/RutineCreateRutine";
import MyRutinesScreen from "../../screens/Routines/MyRutineScreen";
import RutineCalendarScreen from "../../screens/Routines/RutineCalendarScreen";
import RutineReportScreen from "../../screens/Routines/RutineReportScreen";
const Stack = createStackNavigator();

const RoutinesStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        navigation={navigation}
        name="ExerciseScreen"
        component={Routines}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        navigation={navigation}
        name="Notificaciones"
        component={RutineNotificationScreen}
        options={{
          headerShown: false,
          presentation: "transparentModal",
        }}
      />
      <Stack.Screen
        navigation={navigation}
        name="CrearRutina"
        component={RutineCreateRutine}
        options={{
          headerShown: true,
          presentation: "transparentModal",
        }}
      />
      <Stack.Screen
        navigation={navigation}
        name="MisRutinas"
        component={MyRutinesScreen}
        options={{
          headerShown: true,
          presentation: "card",
        }}
      />
      <Stack.Screen
        navigation={navigation}
        name="RutineHistory"
        component={RutineCalendarScreen}
        options={{
          headerShown: true,
          presentation: "card",
        }}
      />
      <Stack.Screen
        navigation={navigation}
        name="RutineInforme"
        component={RutineReportScreen}
        options={{
          headerShown: true,
          presentation: "card",
        }}
      />
    </Stack.Navigator>
  );
};

export default RoutinesStack;
