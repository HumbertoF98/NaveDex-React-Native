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

// library to manipulate dates
import moment from "moment";

export default function ViewNaver({ navigation }) {
  const route = useRoute();

  // get params
  const naver = route.params.naver;

  // get today
  let today = new Date().toJSON().slice(0, 10).toString();
  // get birthdate
  let age = moment(naver.birthdate.slice(0, 10).toString());
  // difference between birthdate and today is the naver's age
  let calc = Math.abs(age.diff(today, "years"));

  // get admission date
  let admissionDate = moment(naver.admission_date.slice(0, 10).toString());
  // difference between the admission date and today is naver's company time
  let calcTimeAdmission = Math.abs(admissionDate.diff(today, "months"));

  // this function navigates to the next route by sending a parameter
  function navigateToEditNaver(naver) {
    navigation.navigate("AddNaver", { naver });
  }

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
      <TextJobNaver>{calc} anos</TextJobNaver>

      <TextNameNaver>Tempo de empresa</TextNameNaver>
      <TextJobNaver>{calcTimeAdmission} meses</TextJobNaver>

      <TextNameNaver>Projetos que participou</TextNameNaver>
      <TextJobNaver>{naver.project}</TextJobNaver>

      <ViewButtons>
        <ButtonBorder>
          <DeleteButton image={Trash}>
            <TextDeleteButton>Excluir</TextDeleteButton>
          </DeleteButton>
        </ButtonBorder>
        <EditButton image={Pencil} onPress={() => navigateToEditNaver(naver)}>
          Editar
        </EditButton>
      </ViewButtons>
    </Container>
  );
}
