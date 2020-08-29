import React from "react";
import {
  Container,
  Content,
  Text,
  TextInfo,
  TouchImage,
  ImageGoBack,
} from "./styles";
import CloseButton from "../../../assets/CloseButton.png";

const ModalContainer = ({ onClose = () => {}, children }) => {
  return (
    <Container>
      <Content>
        <TouchImage onPress={() => onClose()}>
          <ImageGoBack source={CloseButton} />
        </TouchImage>
        <Text>{children}</Text>
        <TextInfo>{children}</TextInfo>
      </Content>
    </Container>
  );
};
export default ModalContainer;
