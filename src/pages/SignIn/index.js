import React, { useState, useRef } from "react";
import { Container, LogoImage, Form } from "./styles";
// alert for user experience in responses
import { Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
// storage data of cellphone
import AsyncStorage from "@react-native-community/async-storage";
//api
import api from "../../services/api";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // refference to password
  const passwordRef = useRef();

  // function to submit login
  async function handleLogin() {
    setLoading(true);
    if (!email || !password) {
      Alert.alert("Erro", "Preencha e-mail e senha para continuar!");
      setLoading(false);
    } else {
      try {
        const response = await api.post("/users/login", {
          email,
          password,
        });
        if (response.data.token) {
          setLoading(false);
          AsyncStorage.setItem("token", response.data.token);
          navigation.navigate("Drawer");
        }
      } catch (err) {
        Alert.alert("Error", err.response.data.message);
        setLoading(false);
        AsyncStorage.clear();
      }
    }
  }

  return (
    <Container>
      <LogoImage source={require("../../../assets/LogoNave.png")} />
      <Form>
        <Input
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
          label="E-mail"
          placeholder="E-mail"
        />
        <Input
          ref={passwordRef}
          value={password}
          onChangeText={setPassword}
          label="Senha"
          secureTextEntry
          placeholder="Senha"
          onSubmitEditing={handleLogin}
        />
        <Button loading={loading} onPress={handleLogin}>
          Entrar
        </Button>
      </Form>
    </Container>
  );
}
