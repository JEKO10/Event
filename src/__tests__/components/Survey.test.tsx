import { render, screen, cleanup } from "@testing-library/react";
import Survey from "../../components/Survey";

describe("tests for Survey component", () => {
  beforeEach(() => {
    render(<Survey />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should display survey image with specific style", () => {
    const image = screen.getByAltText("SurveyImg");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "SurveyImg");
    expect(image).toHaveStyle({ textAlign: "right" });
  });

  it("should render h2 with specific text", () => {
    const heading = screen.getByText(/Da li ćete doći na/i);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Da li ćete doći na IZperaBA?");
  });

  it("should render article with yes/no options", () => {
    const yesNoArticle = screen.getByRole("article");

    expect(yesNoArticle).toBeInTheDocument();
  });

  it("should display 'Glasovi za da' and its percentage", () => {
    const paragraphs = screen.getAllByTestId("votes");

    paragraphs.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
      expect(paragraph).toHaveTextContent("Glasovi za ");
    });
  });
});
