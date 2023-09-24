import { render, screen } from "@testing-library/react";
import MainContainer from "../../components/MainContainer";
import { BrowserRouter as Router } from "react-router-dom";

describe("tests for MainContainer component", () => {
  beforeEach(() => {
    render(
      <Router>
        <MainContainer />
      </Router>
    );
  });

  it("should render the conference title", () => {
    const conferenceTitle = screen.getByText(/Naučna konferencija/i);

    expect(conferenceTitle).toBeInTheDocument();
    expect(conferenceTitle).toHaveTextContent(
      "Naučna konferencija IZperaBA Berane"
    );
  });

  it("should render the conference content", () => {
    const invitationText = screen.getByText(/Poštovani,/i);

    expect(invitationText).toBeInTheDocument();
  });
});
