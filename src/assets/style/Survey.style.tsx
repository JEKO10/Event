import { styled } from "styled-components";
import { flexMixin } from "./GlobalStyles";

export const SurveyContainer = styled.section`
  background-color: #7fbaf4;
  position: absolute;
  top: 5rem;
  right: 4rem;
  padding: 20px;
  margin-top: 5rem;
  list-style-type: none;
  border-radius: 15px;
  border: 1px solid #000;

  article {
    ${flexMixin({ justify: "space-between", align: "center" })};

    div {
      ${flexMixin({ justify: "center", align: "center" })};
      flex-direction: column;
      margin: 1rem 0;

      input {
        margin-top: 0.5rem;
      }

      p {
        text-align: center;
        margin-top: 0.5rem;
      }
    }
  }

  button {
    width: 100%;
    background-color: #0b27f1;
    color: #fff;
    font-size: 1.2rem;
    padding: 10px;
    margin-top: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;
