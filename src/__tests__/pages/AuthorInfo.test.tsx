import { render, screen } from "@testing-library/react";
import AuthorInfo from "../../pages/AuthorInfo";
import { BrowserRouter as Router } from "react-router-dom";

describe("tests for AuthorInfo Page", () => {
  beforeEach(() => {
    render(
      <Router>
        <AuthorInfo />
      </Router>
    );
  });

  it("should render the page title", () => {
    const titleElement = screen.getByText("Informacije za autore");

    expect(titleElement).toBeInTheDocument();
  });

  it("should render information text correctly", () => {
    const infoElement = screen.getByText(/Poziv za dostavljanje rezimea:/i);
    expect(infoElement).toBeInTheDocument();

    const dateElement = screen.getByText("5.10.");
    expect(dateElement).toBeInTheDocument();

    const downloadLinkElement = screen.getByText(
      "Preuzmite informacije za autore"
    );

    expect(downloadLinkElement).toBeInTheDocument();
    expect(downloadLinkElement).toHaveAttribute(
      "href",
      "/src/assets/documents/uputstvo-za-autore.doc"
    );
    expect(downloadLinkElement).toHaveAttribute("download");
  });
});
