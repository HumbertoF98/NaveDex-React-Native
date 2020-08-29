import React, { useState } from "react";
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
import Header from "../../components/Header";
import imageNaver from "../../../assets/Juliano.png";
import Trash from "../../../assets/Trash.png";
import Pencil from "../../../assets/Pencil.png";
import Modal from "../../components/Modal";
import ModalDelete from "../../components/ModalDeleteNaver";

export default function Home({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);

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
        <ViewOneNaver>
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
        <ViewOneNaver>
          <TouchImage onPress={() => setIsModalVisible(true)}>
            <ImageNaver source={imageNaver} />
          </TouchImage>
          <TextNameNaver>Juliano Reis</TextNameNaver>
          <TextJobNaver>Front-end Developer</TextJobNaver>
          <ViewTrashAndPencil>
            <ImageTrashAndPencil source={Trash} />
            <ImageTrashAndPencil source={Pencil} />
          </ViewTrashAndPencil>
        </ViewOneNaver>
      </ViewNavers>

      <ViewNavers>
        <ViewOneNaver>
          <TouchImage onPress={() => setIsModalDelete(true)}>
            <ImageNaver source={imageNaver} />
          </TouchImage>
          <TextNameNaver>Juliano Reis</TextNameNaver>
          <TextJobNaver>Front-end Developer</TextJobNaver>
          <ViewTrashAndPencil>
            <ImageTrashAndPencil source={Trash} />
            <ImageTrashAndPencil source={Pencil} />
          </ViewTrashAndPencil>
        </ViewOneNaver>
        <ViewOneNaver>
          <ImageNaver source={imageNaver} />
          <TextNameNaver>Juliano Reis</TextNameNaver>
          <TextJobNaver>Front-end Developer</TextJobNaver>
          <ViewTrashAndPencil>
            <ImageTrashAndPencil source={Trash} />
            <ImageTrashAndPencil source={Pencil} />
          </ViewTrashAndPencil>
        </ViewOneNaver>
      </ViewNavers>
    </Container>
  );
}
