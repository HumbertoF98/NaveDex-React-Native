import React from "react";
import { Container, LogoImage, Form } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function SignIn({ navigation }) {
  return (
    <Container>
      <LogoImage source={require("../../../assets/LogoNave.png")} />
      <Form>
        <Input label="E-mail" placeholder="E-mail" />
        <Input label="Senha" placeholder="Senha" />
        <Button onPress={() => navigation.navigate("Drawer")}>Entrar</Button>
      </Form>
    </Container>
  );
}
