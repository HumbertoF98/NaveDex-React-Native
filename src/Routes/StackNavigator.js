import React from "react";
import SignIn from "../pages/SignIn";
import { TouchableOpacity, Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

export function StackNavigator({ navigation }) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <TouchableOpacity
            style={{ paddingLeft: 10 }}
            transparent
            onPress={() => alert("oi")}
          >
            <Image source={require("../../assets/Vector.png")} />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
    </Stack.Navigator>
  );
}
