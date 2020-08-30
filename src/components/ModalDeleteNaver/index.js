import React, { useState } from "react";
import { Alert } from "react-native";
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
import { useNavigation } from "@react-navigation/native";
//api
import api from "../../services/api";
import Modal from "../Modal";

const ModalDelete = ({ onClose = () => {}, children }) => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  async function deleteNaver() {
    setLoading(true);
    try {
      await api.delete(`navers/${children}`);
      setIsModalVisible(true);
      setLoading(false);
    } catch (err) {
      Alert.alert(
        "Erro",
        "Desculpe, ocorreu um erro ao tentar deletar o usuário"
      );
      setLoading(false);
    }
  }
  // function to close Modal
  function closeModal() {
    onClose(false);
    setIsModalVisible(false);
    navigation.navigate("Drawer");
  }
  return (
    <Container>
      {isModalVisible ? (
        <Modal onClose={() => closeModal()}>Naver excluído com sucesso</Modal>
      ) : null}
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
          <DeleteButton loading={loading} onPress={() => deleteNaver()}>
            Excluir
          </DeleteButton>
        </ViewButtons>
      </Content>
    </Container>
  );
};
export default ModalDelete;
