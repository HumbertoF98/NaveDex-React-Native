import React, { forwardRef } from "react";
import { Container, TInput, TextLabel } from "./styles";

function Input({ style, label, ...rest }, ref) {
  return (
    <Container style={style}>
      <TextLabel>{label}</TextLabel>
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

/* Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
}; */

export default forwardRef(Input);
