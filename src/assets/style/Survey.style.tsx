import { styled } from "styled-components";
import { flexMixin } from "./GlobalStyles";

export const SurveyContainer = styled.section`
  background-color: #004574;
  color: #fff;
  width: 350px;
  padding: 20px;
  margin-bottom: 1.5rem;
  list-style-type: none;
  border-radius: 15px 0 0 15px;
  /* border: 1px solid #000; */

  h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    text-align: center;

    span {
      color: #8dc63f;
    }
  }

  article {
    text-align: center;

    label {
      font-size: 1.5rem;
      text-transform: uppercase;
    }

    input {
      width: 20px;
      height: 20px;
      background-color: #fff;
      margin: 1rem 1rem 1rem 0.5rem;
    }

    > div {
      margin-bottom: 1rem;
      ${flexMixin({ justify: "center", align: "center" })};
      flex-direction: column;

      > div {
        ${flexMixin({ justify: "flex-start", align: "center" })};

        p {
          font-size: 1.3rem;
          margin: 0 0.5rem;
        }
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

//  article {
//     ${flexMixin({ justify: "space-between", align: "center" })};
//     flex-direction: column;

//     div {
//       ${flexMixin({ justify: "center", align: "center" })};
//       margin: 1rem 0;

//       input {
//         margin-top: 0.5rem;
//       }

//       p {
//         text-align: center;
//         margin-top: 0.5rem;
//       }
//     }
//   }
