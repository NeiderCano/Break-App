import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import CreateAccount from "../../screens/Account/CreateAccount";

const Stack = createStackNavigator();
const CreateAccountStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                navigation={navigation}
                name="CreateAccount"
                component={CreateAccount}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default CreateAccountStack;

