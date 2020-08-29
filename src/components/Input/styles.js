import styled from "styled-components/native";

export const Container = styled.View`
  width: 85%;
  height: 40px;
  align-self: center;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: "#9E9E9E",
})`
  font-size: 16px;
  line-height: 24px;
  height: 40px;
  width: 100%;
  padding-left: 10px;
  border: 1px solid #424242;
`;

export const TextLabel = styled.Text`
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  align-self: flex-start;
  color: #212121;
`;
