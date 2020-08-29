import React, { useState, useEffect } from "react";
import {
  Container,
  SubHeader,
  TextNaver,
  AddNaverButton,
  ViewNavers,
  ViewOneNaver,
  ImageNaver,
  TouchImage,
  TextNameNaver,
  TextJobNaver,
  ViewTrashAndPencil,
  ImageTrashAndPencil,
} from "./styles";
// header
import Header from "../../components/Header";
import { useIsFocused } from "@react-navigation/native";
//api
import api from "../../services/api";
import imageNaver from "../../../assets/Juliano.png";
import Trash from "../../../assets/Trash.png";
import Pencil from "../../../assets/Pencil.png";
import Modal from "../../components/Modal";
import ModalDelete from "../../components/ModalDeleteNaver";

export default function Home({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [navers, setNavers] = useState([]);
  const isFocused = useIsFocused();

  // function responsible to load the navers
  async function loadNavers() {
    try {
      const response = await api.get("navers");
      if (response.status === 200) {
        setNavers(response.data);
      }
    } catch (err) {
      setNavers([]);
    }
  }

  // runs whenever the page is focused
  useEffect(() => {
    if (isFocused) {
      loadNavers();
    }
  }, [isFocused]);

  return (
    <Container>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)} />
      ) : null}
      {isModalDelete ? (
        <ModalDelete onClose={() => setIsModalDelete(false)} />
      ) : null}
      <Header />
      <SubHeader>
        <TextNaver>Navers</TextNaver>
        <AddNaverButton onPress={() => navigation.navigate("AddNaver")}>
          Adicionar naver
        </AddNaverButton>
      </SubHeader>
      <ViewNavers>
        {navers.map((nav) => (
          <ViewOneNaver key={nav.id}>
            <TouchImage onPress={() => navigation.navigate("ViewNaver")}>
              <ImageNaver source={imageNaver} />
            </TouchImage>
            <TextNameNaver>Juliano Reis</TextNameNaver>
            <TextJobNaver>Front-end Developer</TextJobNaver>
            <ViewTrashAndPencil>
              <ImageTrashAndPencil source={Trash} />
              <ImageTrashAndPencil source={Pencil} />
            </ViewTrashAndPencil>
          </ViewOneNaver>
        ))}
      </ViewNavers>
    </Container>
  );
}
