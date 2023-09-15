import { Image } from "../assets/style/SinglePage.style";
import SinglePageHeader from "../components/SinglePageHeader";
import SinglePageNav from "../components/SinglePageNav";

const Program = () => {
  const body = `Preliminarna Agenda Naučne Konferencije sa Međunarodnim Učešćem <br /> <br />
        Izazovi i Perspektive za Razvoj Opštine Berane kao Preduslov za Valorizaciju Sjeverne Regije Crne Gore - IZperaBA
`;

  return (
    <>
      <SinglePageNav />
      <SinglePageHeader title="Program konferencije" body={body} />
      <Image>
        <article>
          <p>Prvi dan: 3. 11. 2023.</p>
          <ul>
            <li>9:45 Registracija učesnika</li>
            <li>10:00 Otvaranje i Pozdravna obraćanja</li>
            <li>
              10:30 Prva sesija (Razvoj turizma i poljoprivrede kao preduslov
              poboljšanja standarda građana)
            </li>
            <li>12:00 Pauza za kafu</li>
            <li>
              12:30 Druga sesija (Razvoj saobraćajne infrastructure kao
              preduslov zaustavljanja migracije stanovništva)
            </li>
            <li>14:30 Pauza za ručak</li>
            <li>16:00 Nastavak druge sesije</li>
            <li>18:00 Zatvaranje naučnog dela konferencije, zaključci</li>
            <li>20:00 Svečana večera</li>
          </ul>
        </article>
        <article>
          <p>Drugi dan: 4. 11. 2023.</p>
          <ul>
            <li>11:00 Okupljanje ispred Zgrade Opštine</li>
            <li>11:15 Izlet</li>
            <li>13:00 Kafa, ručak</li>
          </ul>
        </article>
      </Image>
    </>
  );
};

export default Program;
