import styled from "styled-components/native";
import Button from "../../components/Button";

export const Container = styled.View`
  height: 100%;
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: absolute;
  margin-top: 35px;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Content = styled.View`
  align-self: center;
  width: 90%;
  height: 220px;
  margin: 10px;
  background: #fff;
  position: relative;
`;

export const Text = styled.Text`
  color: #212121;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
  margin: -20px 20px 0 20px;
`;

export const TextInfo = styled.Text`
  font-size: 16px;
  line-height: 24px;
  width: 80%;
  margin: 10px 20px 20px 20px;
`;

export const TouchImage = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 10px;
  margin-top: 20px;
  width: 30px;
  height: 30px;
`;

export const ImageGoBack = styled.Image``;

export const ViewButtons = styled.View`
  flex-direction: row;
  padding-bottom: 3px;
  width: 95%;
`;

export const ButtonBorder = styled.View`
  width: 45%;
  border: 1px solid #212121;
  height: 46px;
  margin: 20px;
`;

export const CancelButton = styled(Button)`
  background: #fff;
  height: 44px;
  width: 100%;
`;

export const DeleteButton = styled(Button)`
  width: 45%;
  margin-top: 20px;
  margin-left: -10px;
  align-items: center;
  flex-direction: row;
`;

export const TextCancelButton = styled.Text`
  color: #212121;
`;
