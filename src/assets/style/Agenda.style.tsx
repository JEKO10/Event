import styled from "styled-components";
import { devices } from "./GlobalStyles";

export const AgendaArticle = styled.article`
  max-width: 85vw;
  margin: 0 auto;

  @media ${devices.laptopS} {
    max-width: 95vw;
    padding: 0 20px;
  }

  @media ${devices.mobile} {
    padding: 0 10px;
  }

  h2 {
    text-align: center;
    font-weight: 500;
    margin: 5rem 0;

    @media ${devices.tablet} {
      font-size: 1.1rem;
    }

    @media ${devices.mobile} {
      margin: 4rem 0;
    }

    span {
      text-decoration: underline;

      @media ${devices.mobile} {
        font-size: 1rem;
      }
    }
  }

  h3 {
    font-weight: 500;
    text-decoration: underline;
    margin: 5rem 0 1rem;

    @media ${devices.tablet} {
      margin: 5rem 0 0;
    }
  }

  ul {
    list-style-type: none;

    li {
      margin: 0.5rem 0;

      @media ${devices.tablet} {
        font-size: 1rem;
        margin: 1rem 0;
      }

      @media ${devices.mobile} {
        margin: 1rem 0 3rem;
      }

      span {
        font-weight: 600;
      }
    }
  }
`;
