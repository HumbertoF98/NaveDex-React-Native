import React from "react";
import {
  Container,
  SubHeader,
  TextNaver,
  AddNaverButton,
  ViewNavers,
  ViewOneNaver,
  ImageNaver,
  TextNameNaver,
  TextJobNaver,
  ViewTrashAndPencil,
  ImageTrashAndPencil,
} from "./styles";
import Header from "../../components/Header";
import imageNaver from "../../../assets/Juliano.png";
import Trash from "../../../assets/Trash.png";
import Pencil from "../../../assets/Pencil.png";

export default function Home({ navigation }) {
  return (
    <Container>
      <Header />
      <SubHeader>
        <TextNaver>Navers</TextNaver>
        <AddNaverButton onPress={() => navigation.navigate("AddNaver")}>
          Adicionar naver
        </AddNaverButton>
      </SubHeader>
      <ViewNavers>
        <ViewOneNaver>
          <ImageNaver source={imageNaver} />
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

      <ViewNavers>
        <ViewOneNaver>
          <ImageNaver source={imageNaver} />
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
