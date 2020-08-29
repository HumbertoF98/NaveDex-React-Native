import React from "react";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
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
            style={{ paddingLeft: 20, paddingTop: 30 }}
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
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
