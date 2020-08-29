import styled from "styled-components/native";
import Input from "../../components/Input";
import Button from "../../components/Button";

export const Container = styled.ScrollView``;

export const TouchImage = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  bottom: 25px;
`;

export const IconGoBack = styled.Image``;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 30px;
  align-items: center;
`;

export const FormInput = styled(Input)`
  height: 80px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 30px;
`;
