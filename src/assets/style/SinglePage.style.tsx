import { styled } from "styled-components";
import { flexMixin, secondaryColor } from "./GlobalStyles";

export const Header = styled.section`
  ${flexMixin({ justify: "space-between", align: "flex-start" })};
  margin: 80px 0;
  padding: 0 65px;

  article {
    text-align: right;

    h2 {
      font-size: 40px;
      margin-bottom: 16px;

      span {
        color: ${secondaryColor};
      }
    }

    p {
      max-width: 1000px;
      font-size: 25px;
      font-weight: 600;
      line-height: 35px;
    }
  }
`;

export const Main = styled.section`
  ${flexMixin({ justify: "space-between", align: "flex-start" })};
  padding: 80px 65px;

  p {
    max-width: 1000px;
    font-size: 25px;
    font-weight: 600;
    line-height: 35px;
  }
`;

export const Image = styled.section`
  text-align: center;

  img {
    display: block;
    margin: 0 auto;
  }

  p {
    max-width: 1500px;
    font-size: 25px;
    font-weight: 600;
    line-height: 35px;
    margin: 80px auto;
  }
`;
