import React from "react";
import SignIn from "../pages/SignIn";
import { Drawer } from "./DrawerNavigator";
import { TouchableOpacity, Image } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Stack Navigator
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
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Image source={require("../../assets/Vector.png")} />
          </TouchableOpacity>
        ),
      })}
    >
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
    </Stack.Navigator>
  );
}
