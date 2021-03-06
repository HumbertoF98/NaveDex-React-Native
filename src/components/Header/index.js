import React from "react";
import { Container, ImageHeader, Line } from "./styles";
import logo from "../../../assets/LogoNave.png";

export default function HeaderDrawer({ children, ...rest }) {
  return (
    <Container {...rest}>
      {children}
      <ImageHeader source={logo} />
      <Line />
    </Container>
  );
}
