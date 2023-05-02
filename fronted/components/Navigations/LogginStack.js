import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import LogginBreak from "../../screens/Account/LogginBreak";

const Stack = createStackNavigator();
    const LogginStack = ({ navigation }) => {
      return (
        <Stack.Navigator>
            <Stack.Screen style={styles.Container}
                navigation={navigation}
                name="LogginBreak"
                component={LogginBreak}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
      )
    }

    const styles = StyleSheet.create({
        container: {
            marginTop: '5%',

        },
    })

export default LogginStack;







