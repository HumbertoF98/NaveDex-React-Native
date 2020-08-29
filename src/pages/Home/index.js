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
import Trash from "../../../assets/Trash.png";
import Pencil from "../../../assets/Pencil.png";
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

  // this function navigates to the next route by sending a parameter
  function navigateToNaverInfo(naver) {
    navigation.navigate("ViewNaver", { naver });
  }

  // this function navigates to the next route by sending a parameter
  function navigateToEditNaver(naver) {
    navigation.navigate("AddNaver", { naver });
  }

  return (
    <ViewNavers
      ListHeaderComponent={
        <Container>
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
        </Container>
      }
      data={navers}
      keyExtractor={(nav) => String(nav.id)}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: nav }) => (
        <ViewOneNaver>
          <TouchImage onPress={() => navigateToNaverInfo(nav)}>
            <ImageNaver source={{ uri: nav.url }} />
          </TouchImage>
          <TextNameNaver>
            {nav.name.length > 20
              ? nav.name.substring(0, 20, -3) + "..."
              : nav.name}
          </TextNameNaver>
          <TextJobNaver>
            {nav.job_role.length > 20
              ? nav.job_role.substring(0, 20, -3) + "..."
              : nav.job_role}
          </TextJobNaver>
          <ViewTrashAndPencil>
            <TouchImage>
              <ImageTrashAndPencil source={Trash} />
            </TouchImage>
            <TouchImage onPress={() => navigateToEditNaver(nav)}>
              <ImageTrashAndPencil source={Pencil} />
            </TouchImage>
          </ViewTrashAndPencil>
        </ViewOneNaver>
      )}
    />
  );
}
