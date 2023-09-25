import { render, screen } from "@testing-library/react";
import Berane from "../../pages/Berane";
import { BrowserRouter as Router } from "react-router-dom";

describe("tests for Berane Page", () => {
  beforeEach(() => {
    render(
      <Router>
        <Berane />
      </Router>
    );
  });

  it("should render the page title", () => {
    const titleElement = screen.getByText("O Beranama");

    expect(titleElement).toBeInTheDocument();
  });

  it("should render the body paragraphs", () => {
    const bodyParagraphs = [
      /O bogatoj istorijskoj prošlosti Berana/i,
      /U srednjem vijeku područje Berana je bilo poznato kao Budimlja./i,
      /Na mjestu gdje se danas nalazi, do 1862. godine nije bilo nijedne kuće./i,
      /Naselje je počelo brzo da se širi, a na desnoj obali Lima na Prosinama nastalo je drugo naselje./i,
      /Tokom vijekova Gornje Polimlje je više puta mijenjalo ime./i,
      /Od jula 1949. do marta 1992. godine grad je nosio ime Ivangrad./i,
      /Na području opštine Berane živi 28.488 stanovnika, od čega je 14.238 žena ili 49,98% i 14.250 muškaraca ili 50,02 %./i,
      /Skoro samom sredinom opštine teče kompozitna dolina Lima daleko najvažnija privredna i saobraćajna veza./i,
      /Nasuprot ograničenjima/i,
      /Razvojna uloga Berana sadržana je u visokom stepenu funkcionalnosti/i,
      /Važna razvojna uloga ovog obilježja geografskog položaja opštine/i,
    ];

    bodyParagraphs.forEach((paragraph) => {
      const paragraphElement = screen.getByText(paragraph);

      expect(paragraphElement).toBeInTheDocument();
    });
  });

  it("should render images", () => {
    const images = screen.getAllByRole("img");

    expect(images.length).toBeGreaterThanOrEqual(2);
  });

  it("should render download links", () => {
    const downloadLinks = screen.getAllByRole("link");

    expect(downloadLinks.length).toBeGreaterThanOrEqual(1);
  });
});
