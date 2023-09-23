import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../components/Header";

describe("tests for Header component", () => {
  it("should render the header and its elements", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const navbar = screen.getByRole("navigation");

    expect(navbar).toBeInTheDocument();

    const heroImage = screen.getByAltText(
      "IZPera Berane Naučna konferencija berane"
    );

    expect(heroImage).toBeInTheDocument();
  });
});
