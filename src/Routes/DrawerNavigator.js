import React from "react";
import Home from "../pages/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContainer } from "../components/DrawerContent";

export function Drawer({ navigation }) {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerStyle={{
        width: 274,
      }}
      drawerContentOptions={{
        activeTintColor: "#212121",
        inactiveBackgroundColor: "#212121",
        activeBackgroundColor: "#FFF",
        labelStyle: { fontSize: 22, lineHeight: 32 },
      }}
      drawerContent={(props) => <DrawerContainer {...props} />}
    >
      <Drawer.Screen name="Navers" component={Home} />
    </Drawer.Navigator>
  );
}
