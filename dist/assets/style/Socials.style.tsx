import { styled } from "styled-components";
import { devices, flexMixin } from "./GlobalStyles";

export const SocialsContainer = styled.section`
  background: rgb(0, 127, 213);
  background: linear-gradient(
    90deg,
    rgba(0, 127, 213, 1) 25%,
    rgba(0, 127, 213, 1) 25%,
    rgba(0, 69, 116, 1) 50%
  );
  ${flexMixin({ justify: "space-between", align: "center" })};
  height: 146px;
  width: 796px;
  margin: 10rem auto 5rem;
  padding: 20px 50px;
  border-radius: 50px;

  > img {
    height: 100px;
    width: 172px;

    @media ${devices.tablet} {
      height: auto;
      width: 150px;
    }
  }

  a {
    margin: 0 0.5rem;
    cursor: pointer;

    @media ${devices.tablet} {
      img {
        height: auto;
        width: 50px;
      }
    }

    @media ${devices.mobile} {
      margin: 0 0.7rem;

      img {
        height: auto;
        width: 40px;
      }
    }
  }

  @media ${devices.laptopS} {
    background: #007fd5;
    flex-direction: column;
    height: 230px;
    width: 80%;

    > img {
      margin-bottom: 1rem;
    }
  }

  @media ${devices.mobile} {
    height: 180px;
    width: 90%;
    padding: 20px 10px;
    border-radius: 10px;

    > img {
      width: 115px;
    }
  }
`;
