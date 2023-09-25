import { render, screen } from "@testing-library/react";
import Topics from "../../pages/Topics";
import { BrowserRouter as Router } from "react-router-dom";

describe("Topics Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Topics />
      </Router>
    );
  });

  it("should render the title", () => {
    const titleElement = screen.getByText(
      /Teme konferencije i raspored sesija/i
    );

    expect(titleElement).toBeInTheDocument();
  });

  it("should render the body text", () => {
    const bodyElement = screen.getByText(
      /Naučna konferencija sa međunarodnim učešćem pod nazivom/i
    );

    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveTextContent(
      "Naučna konferencija sa međunarodnim učešćem pod nazivom 'Izazovi i Perspektive za Razvoj Opštine Berane' kao preduslov za valorizaciju sjeverne regije Crne Gore, s akronimom 'IZperaBA', kao glavnu temu na osnovu postavljenog cilja održavanja planirane konferencije ima za cilj sagledavanje svih izazova s kojima se Opština Berane susreće kako bi došla do perspektiva koje će uticati na razvoj čitave opštine i na taj način smanjiti migraciju stanovništva iz ove opštine."
    );
  });

  it("should render the session list items", () => {
    const sessionListItems = [
      /Razvoj turizma i poljoprivrede kao preduslov poboljšanja standarda građana./i,
      /Razvoj saobraćajne infrastrukture kao preduslov zaustavljanja migracije stanovništva./i,
    ];

    sessionListItems.forEach((item) => {
      const listItemElement = screen.getByText(item);

      expect(listItemElement).toBeInTheDocument();
    });
  });
});
