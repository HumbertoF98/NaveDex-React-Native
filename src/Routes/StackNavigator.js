import React from "react";
// pages
import SignIn from "../pages/SignIn";
import AddNaver from "../pages/AddNaver";
import ViewNaver from "../pages/ViewNaver";
// component drawer navigator
import { Drawer } from "./DrawerNavigator";
import { TouchableOpacity, Image } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// function that will export stack navigator
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
            <Image source={require("../../assets/Drawer.png")} />
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
      <Stack.Screen
        options={{ headerShown: false }}
        name="AddNaver"
        component={AddNaver}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ViewNaver"
        component={ViewNaver}
      />
    </Stack.Navigator>
  );
}
