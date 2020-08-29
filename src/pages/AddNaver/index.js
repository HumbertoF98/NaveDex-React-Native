import React from "react";
import {
  Container,
  IconGoBack,
  TouchImage,
  Form,
  FormInput,
  SubmitButton,
} from "./styles";
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
      <Form>
        <FormInput label="Nome" placeholder="Nome" />
        <FormInput label="Cargo" placeholder="Cargo" />
        <FormInput
          label="Data de nascimento"
          placeholder="Data de nascimento"
        />
        <FormInput label="Dia de admissão" placeholder="Dia de admissão" />
        <FormInput
          label="Projetos que participou"
          placeholder="Projetos que participou"
        />
        <FormInput
          label="URL da foto do naver"
          placeholder="URL da foto do naver"
        />
        <SubmitButton>Salvar</SubmitButton>
      </Form>
    </Container>
  );
}
