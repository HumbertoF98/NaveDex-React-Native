import styled from "styled-components/native";
import Button from "../../components/Button";

export const Container = styled.ScrollView``;

export const TouchImage = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  bottom: 25px;
`;

export const IconGoBack = styled.Image``;

export const ImageNaver = styled.Image`
  width: 100%;
`;

export const TextNameNaver = styled.Text`
  margin: 20px 20px 5px 20px;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
  color: #212121;
`;

export const TextJobNaver = styled.Text`
  margin-left: 20px;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`;

export const ViewButtons = styled.View`
  flex-direction: row;
  padding-bottom: 3px;
`;

export const ButtonBorder = styled.View`
  width: 45%;
  border: 1px solid #212121;
  height: 46px;
  margin: 20px;
`;

export const DeleteButton = styled(Button)`
  background: #fff;
  height: 44px;
  width: 100%;
`;

export const EditButton = styled(Button)`
  width: 45%;
  margin-top: 20px;
  margin-left: -10px;
  align-items: center;
  flex-direction: row;
`;

export const TextDeleteButton = styled.Text`
  color: #212121;
`;
