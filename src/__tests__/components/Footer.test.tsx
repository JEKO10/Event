import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("Footer component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("should render the FooterContainer", () => {
    const footerContainer = screen.getByRole("contentinfo");

    expect(footerContainer).toBeInTheDocument();
  });

  test("should render the name paragraph", () => {
    const nameParagraph = screen.getByText(/IZpera Berane © \+382 67 275 690/i);

    expect(nameParagraph).toBeInTheDocument();
    expect(nameParagraph).toHaveTextContent("IZpera Berane © +382 67 275 690");
  });

  test("should render the author paragraph", () => {
    const authorParagraph = screen.getByText("Aleksa Bubanja");

    expect(authorParagraph).toBeInTheDocument();
    expect(authorParagraph).toHaveTextContent("Aleksa Bubanja");
  });

  test("should render the year paragraph", () => {
    const yearParagraph = screen.getByText("2023. Sva prava zadržana.");

    expect(yearParagraph).toBeInTheDocument();
    expect(yearParagraph).toHaveTextContent("2023. Sva prava zadržana.");
  });
});
