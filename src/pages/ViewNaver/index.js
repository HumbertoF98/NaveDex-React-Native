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
import { useRoute } from "@react-navigation/native";
import logo from "../../../assets/JulianoReis.png";
import Trash from "../../../assets/Trash.png";
import Pencil from "../../../assets/PencilWhite.png";
//Header
import Header from "../../components/Header";
import GoBack from "../../../assets/GoBack.png";

export default function ViewNaver({ navigation }) {
  const route = useRoute();

  // get params
  const naver = route.params.naver;

  return (
    <Container>
      <Header>
        <TouchImage onPress={() => navigation.goBack()}>
          <IconGoBack source={GoBack} />
        </TouchImage>
      </Header>
      <ImageNaver resizeMode="cover" source={{ uri: naver.url }} />
      <TextNameNaver>{naver.name}</TextNameNaver>
      <TextJobNaver>{naver.job_role}</TextJobNaver>

      <TextNameNaver>Idade</TextNameNaver>
      <TextJobNaver>{naver.birthdate}</TextJobNaver>

      <TextNameNaver>Tempo de empresa</TextNameNaver>
      <TextJobNaver>{naver.admission_date}</TextJobNaver>

      <TextNameNaver>Projetos que participou</TextNameNaver>
      <TextJobNaver>{naver.project}</TextJobNaver>

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
