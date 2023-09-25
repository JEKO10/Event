import { render, screen } from "@testing-library/react";
import Goal from "../../pages/Goal";
import { BrowserRouter as Router } from "react-router-dom";

describe("tests for Goal page", () => {
  beforeEach(() => {
    render(
      <Router>
        <Goal />
      </Router>
    );
  });

  it("should render the title", async () => {
    const titleElement = screen.getByRole("heading", {
      name: /Cilj konferencije/i,
    });

    expect(titleElement).toBeInTheDocument();
  });

  it("should render the navigation component", () => {
    const navElement = screen.getByRole("navigation");

    expect(navElement).toBeInTheDocument();
  });

  it("should render the body content", () => {
    const bodyText = /Imajući u vidu da je sjever Crne Gore/i;
    const bodyElement = screen.getByText(bodyText);

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveTextContent(
      /Imajući u vidu da je sjever Crne Gore, više od decenije ugrožen velikom migracijom stanovništva, smatrali smo da je neophodno razmotriti koji su to izazovi sa kojima se opština Berane kao nekadašnji razvojni centar sjevera Crne Gore, suočava i na koji način može, ako ne zaustaviti onda, smanjiti migraciju stanovništva iz ove opštine. Te je s toga glavni cilj ove Konferencije da kroz sagledavanje svih izazova sa kojima se sjeverna regija suočava dođemo do perspektiva koje će pomoći i u samoj valorizaciji kako opštine Berane tako i čitave sjeverne regije i na taj način smanjiti migraciju stanovništva./i
    );
  });
});
