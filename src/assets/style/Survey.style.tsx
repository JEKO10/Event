import { styled } from "styled-components";
import { flexMixin, primaryColor, secondaryColor } from "./GlobalStyles";

export const SurveyContainer = styled.section`
  background-color: ${primaryColor};
  color: #fff;
  width: 350px;
  padding: 20px;
  margin-bottom: 24px;
  list-style-type: none;
  border-radius: 15px 0 0 15px;
  /* border: 1px solid #000; */

  h2 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 16px;
    text-align: center;

    span {
      color: ${secondaryColor};
    }
  }

  article {
    text-align: center;

    label {
      font-size: 24px;
      text-transform: uppercase;
    }

    svg {
      display: none;
    }

    input {
      width: 20px;
      height: 20px;
      background-color: #fff;
      margin: 16px 16px 16px 8px;

      &[type="button"] {
        background-color: ${secondaryColor};
        color: ${primaryColor};
        height: auto;
        width: 100%;
        font-size: 24px;
        font-family: "Outfit", sans-serif;
        text-transform: uppercase;
        font-weight: 600;
        margin-top: 16px;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
      }
    }

    > div {
      margin-bottom: 16px;
      ${flexMixin({ justify: "center", align: "center" })};
      flex-direction: column;

      > div {
        ${flexMixin({ justify: "space-around", align: "center" })};
        width: 100%;

        p {
          font-size: 20.8px;
          margin: 0 8px;
        }
      }
    }
  }

  /* button {
    width: 100%;
    background-color: #0b27f1;
    color: #fff;
    font-size: 1.2rem;
    padding: 10px;
    margin-top: 1rem;
    border-radius: 5px;
    cursor: pointer;
  } */
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
