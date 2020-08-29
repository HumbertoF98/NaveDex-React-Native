import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === "ios" ? 35 : 0}px;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
  height: 230px;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.Image`
  align-self: center;
`;
