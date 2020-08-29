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

export const TextAddNaver = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  font-size: 22px;
  color: #212121;
  line-height: 32px;
`;

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
