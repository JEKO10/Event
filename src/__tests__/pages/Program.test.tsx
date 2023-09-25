import { render, screen } from "@testing-library/react";
import Program from "../../pages/Program";
import { BrowserRouter as Router } from "react-router-dom";

describe("Program Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Program />
      </Router>
    );
  });

  it("should render the title", () => {
    const titleElement = screen.getByRole("heading", {
      name: "Program konferencije",
    });

    expect(titleElement).toBeInTheDocument();
  });

  it("should render the body text", () => {
    const bodyElement = screen.getByText(
      /Preliminarna Agenda Naučne Konferencije sa Međunarodnim Učešćem/i
    );

    expect(bodyElement).toBeInTheDocument();
  });

  it("should render the first day agenda", () => {
    const firstDayAgenda = screen.getByText(/Prvi dan: 3. 11. 2023./i);

    expect(firstDayAgenda).toBeInTheDocument();
  });

  it("should render the second day agenda", () => {
    const secondDayAgenda = screen.getByText(/Drugi dan: 4. 11. 2023./i);

    expect(secondDayAgenda).toBeInTheDocument();
  });

  it("should render a list of agenda items for the first day", () => {
    const agendaItemsFirstDay = [
      /9:45 Registracija učesnika/i,
      /10:00 Otvaranje i Pozdravna obraćanja/i,
      /10:30 Prva sesija \(Razvoj turizma i poljoprivrede kao preduslov poboljšanja standarda građana\)/i,
      /12:00 Pauza za kafu/i,
      /12:30 Druga sesija \(Razvoj saobraćajne infrastructure kao preduslov zaustavljanja migracije stanovništva\)/i,
      /14:30 Pauza za ručak/i,
      /16:00 Nastavak druge sesije/i,
      /18:00 Zatvaranje naučnog dela konferencije, zaključci/i,
      /20:00 Svečana večera/i,
    ];

    agendaItemsFirstDay.forEach((item) => {
      const agendaItemElement = screen.getByText(item);

      expect(agendaItemElement).toBeInTheDocument();
    });
  });

  it("should render a list of agenda items for the second day", () => {
    const agendaItemsSecondDay = [
      /11:00 Okupljanje ispred Zgrade Opštine/i,
      /11:15 Izlet/i,
      /13:00 Kafa, ručak/i,
    ];

    agendaItemsSecondDay.forEach((item) => {
      const agendaItemElement = screen.getByText(item);

      expect(agendaItemElement).toBeInTheDocument();
    });
  });
});
