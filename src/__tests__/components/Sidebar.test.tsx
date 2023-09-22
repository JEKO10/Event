import { render, screen } from "@testing-library/react";
import Sidebar from "../../components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

describe("tests for Sidebar component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
  });

  it("should render sidebar section and all lists", () => {
    const sidebarSection = screen.getByTestId("sidebar-section");
    expect(sidebarSection).toBeInTheDocument();

    const lists = screen.getAllByRole("list");

    lists.forEach((list) => {
      expect(list).toBeInTheDocument();
    });
  });

  it("should render links", () => {
    const links = [
      "O Beranama",
      "Program konferencije",
      "Teme konferencije i raspored sesija",
      "Cilj konferencije",
      "Odbori",
      "Prijava radova",
      "Informacije za autore",
      "Zbornik radova",
      "Sponzori",
      "Foto galerija",
    ];

    links.forEach((linkText) => {
      const link = screen.getByText(linkText);

      expect(link).toBeInTheDocument();
    });
  });
});
