import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import { fireEvent, render, screen } from "@testing-library/react";
import SinglePageNav from "../../components/SinglePageNav";

describe("tests for Navbar components", () => {
  beforeEach(() => {
    render(
      <Router>
        <SinglePageNav />
      </Router>
    );
  });

  it("should render Logo with a specific alt text", () => {
    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();
  });

  it("should render date elements", () => {
    const dateElement1 = screen.getByText("2.11.2023.");
    expect(dateElement1).toBeInTheDocument();

    const dateElement2 = screen.getByText("3.11.2023.");
    expect(dateElement2).toBeInTheDocument();

    const dateElement3 = screen.getByText("4.11.2023.");
    expect(dateElement3).toBeInTheDocument();
  });

  it("should toggle the menu when the menu icon is clicked", () => {
    const menuIcon = screen.getByTestId("menu-icon");
    expect(menuIcon).toBeInTheDocument();

    fireEvent.click(menuIcon);

    const linkOdbori = screen.getByText("Odbori");
    expect(linkOdbori).toBeInTheDocument();

    const linkSponzori = screen.getByText("Sponzori");
    expect(linkSponzori).toBeInTheDocument();

    const linkFoto = screen.getByText(/Foto/i);
    expect(linkFoto).toBeInTheDocument();

    const closeIcon = screen.getByTestId("close-menu-icon");
    expect(closeIcon).toBeInTheDocument();

    fireEvent.click(closeIcon);

    expect(linkOdbori).not.toBeInTheDocument();
    expect(linkSponzori).not.toBeInTheDocument();
    expect(closeIcon).not.toBeInTheDocument();
    expect(linkFoto).not.toBeInTheDocument();
  });
});
