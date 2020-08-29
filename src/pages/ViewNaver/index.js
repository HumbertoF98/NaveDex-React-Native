import React from "react";
import {
  Container,
  TouchImage,
  IconGoBack,
  ImageNaver,
  TextNameNaver,
  TextJobNaver,
  ViewButtons,
  DeleteButton,
  TextDeleteButton,
  EditButton,
  ButtonBorder,
} from "./styles";
import logo from "../../../assets/JulianoReis.png";
import Trash from "../../../assets/Trash.png";
import Pencil from "../../../assets/PencilWhite.png";
//Header
import Header from "../../components/Header";
import GoBack from "../../../assets/GoBack.png";

export default function ViewNaver({ navigation }) {
  return (
    <Container>
      <Header>
        <TouchImage onPress={() => navigation.goBack()}>
          <IconGoBack source={GoBack} />
        </TouchImage>
      </Header>
      <ImageNaver source={logo} />
      <TextNameNaver>Juliano Reis</TextNameNaver>
      <TextJobNaver>Front-end Developer</TextJobNaver>

      <TextNameNaver>Idade</TextNameNaver>
      <TextJobNaver>19 anos</TextJobNaver>

      <TextNameNaver>Tempo de empresa</TextNameNaver>
      <TextJobNaver>14 meses</TextJobNaver>

      <TextNameNaver>Projetos que participou</TextNameNaver>
      <TextJobNaver>Todos</TextJobNaver>

      <ViewButtons>
        <ButtonBorder>
          <DeleteButton image={Trash}>
            <TextDeleteButton>Excluir</TextDeleteButton>
          </DeleteButton>
        </ButtonBorder>
        <EditButton image={Pencil}>Editar</EditButton>
      </ViewButtons>
    </Container>
  );
}
