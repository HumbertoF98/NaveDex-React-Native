import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  margin-top: 35px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Content = styled.View`
  align-self: center;
  width: 90%;
  height: 120px;
  margin: 10px;
  background: #fff;
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
