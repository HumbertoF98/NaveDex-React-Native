import React from "react";
import { Container } from "./styles";
import { DrawerItemList, DrawerItem } from "@react-navigation/drawer";

// This component will render the DrawerNavigator
export function DrawerContainer(props) {
  async function handleLogout() {
    /* await AsyncStorage.clear(); */
    props.navigation.navigate("SignIn");
  }

  return (
    <Container {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        activeTintColor={"#212121"}
        inactiveTintColor={"#212121"}
        activeBackgroundColor={"#FFF"}
        labelStyle={{ fontSize: 22, lineHeight: 32, fontWeight: "bold" }}
        label="Sair"
        onPress={handleLogout}
      />
    </Container>
  );
}
