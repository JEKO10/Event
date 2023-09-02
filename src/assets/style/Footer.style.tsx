import { styled } from "styled-components";
import { flexMixin, primaryColor, secondaryColor } from "./GlobalStyles";

export const FooterContainer = styled.footer`
  ${flexMixin({ justify: "center", align: "center" })};
  height: 90px;
  width: 100%;
  background-color: ${secondaryColor};
  color: ${primaryColor};

  p {
    font-size: 19.2px;
    font-weight: 500;
  }
`;
