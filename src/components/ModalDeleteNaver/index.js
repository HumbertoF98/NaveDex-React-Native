import React from "react";
import {
  Container,
  Content,
  Text,
  TextInfo,
  TouchImage,
  ImageGoBack,
  ViewButtons,
  ButtonBorder,
  CancelButton,
  DeleteButton,
  TextCancelButton,
} from "./styles";
import CloseButton from "../../../assets/CloseButton.png";

const ModalDelete = ({ onClose = () => {}, children }) => {
  return (
    <Container>
      <Content>
        <TouchImage onPress={() => onClose()}>
          <ImageGoBack source={CloseButton} />
        </TouchImage>
        <Text>Excluir naver</Text>
        <TextInfo>Tem certeza que deseja excluir este naver?</TextInfo>
        <ViewButtons>
          <ButtonBorder>
            <CancelButton onPress={onClose}>
              <TextCancelButton>Cancelar</TextCancelButton>
            </CancelButton>
          </ButtonBorder>
          <DeleteButton>Excluir</DeleteButton>
        </ViewButtons>
      </Content>
    </Container>
  );
};
export default ModalDelete;
