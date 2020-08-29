import React from "react";
import { Text } from "react-native";
import { Container, IconGoBack, TouchImage } from "./styles";
import Header from "../../components/Header";
import GoBack from "../../../assets/GoBack.png";

export default function AddNaver({ navigation }) {
  return (
    <Container>
      <Header>
        <TouchImage onPress={() => navigation.goBack()}>
          <IconGoBack source={GoBack} />
        </TouchImage>
      </Header>
    </Container>
  );
}
