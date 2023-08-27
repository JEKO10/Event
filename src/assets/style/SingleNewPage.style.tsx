import { styled } from "styled-components";
import { flexMixin } from "./GlobalStyles";

type HeaderProps = {
  img: string;
};

export const Header = styled.section<HeaderProps>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.img}) center/cover no-repeat fixed;
`;

export const Hero = styled.section`
  ${flexMixin({ justify: "center", align: "center" })};
  color: #fff;
  text-align: center;
  min-height: 70vh;

  h1 {
    font-size: 4rem;
    padding: 0 30px;
  }
`;

export const NewInfo = styled.article`
  max-width: 40vw;
  margin: 4rem auto;

  p {
    font-size: 20px;
    line-height: 30px;
    word-spacing: 0px;
  }

  img {
    height: auto;
    width: 100%;
    margin: 2rem 0;
  }
`;
