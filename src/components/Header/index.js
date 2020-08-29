import React from "react";
import { Container, ImageHeader, Line } from "./styles";
import logo from "../../../assets/LogoNave.png";

export default function HeaderDrawer({ ...rest }) {
  return (
    <Container {...rest}>
      <ImageHeader source={logo} />
      <Line />
    </Container>
  );
}
