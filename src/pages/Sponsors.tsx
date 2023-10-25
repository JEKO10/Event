import SinglePageNav from "../components/SinglePageNav";
import SinglePageHeader from "../components/SinglePageHeader";
import { SponsorsContainer } from "../assets/style/Sponsors.style";
import Ministarstvo from "../assets/images/ministarstvo.jpg";
import Uprava from "../assets/images/uprava.jpg";
import Hotel from "../assets/images/hotel.png";
import Cedis from "../assets/images/cedis.png";
import Reviko from "../assets/images/reviko.jpg";
import Epcg from "../assets/images/epcg.jpg";
import Granit from "../assets/images/granit.png";
import Viktorija from "../assets/images/viktorija.png";
import Eloksir from "../assets/images/eloksir.png";
import TO from "../assets/images/to.jpg";
import Zdravlje from "../assets/images/zdravlje.jpg";
import VV from "../assets/images/VV.jpg";
import Progres from "../assets/images/progres.jpg";
import Ortak from "../assets/images/ortak.jpg";
import GeoLux from "../assets/images/geo-lux.jpg";
import Stab from "../assets/images/stab.png";

const Sponsors = () => {
  const organizations = [
    {
      name: "Ministarstvo poljoprivrede, šumarstva i vodoprivrede",
      src: Ministarstvo,
    },
    {
      name: "Uprava za bezbjednost hrane, veterinarstvo i fitosanitarne poslove",
      src: Uprava,
    },
    {
      name: "Ministarstvo zdravlja",
      src: Zdravlje,
    },
    {
      name: "Turistička organizacija Berane",
      src: TO,
    },
    {
      name: "Hotel Berane",
      src: Hotel,
    },
    {
      name: "Cedis",
      src: Cedis,
    },
    {
      name: "Reviko Podgorica",
      src: Reviko,
    },
    {
      name: "Elektroprivreda",
      src: Epcg,
    },
    {
      name: "V&V Bar",
      src: VV,
    },
    {
      name: "Granit Berane",
      src: Granit,
    },
    {
      name: "Knjižara Progres Berane",
      src: Progres,
    },
    {
      name: "Ortak Berane",
      src: Ortak,
    },
    {
      name: "Geo-lux Berane",
      src: GeoLux,
    },
    {
      name: "Viktorija Berane",
      src: Viktorija,
    },
    {
      name: "Eloksir Plus Berane",
      src: Eloksir,
    },
    {
      name: "Pab Štab",
      src: Stab,
    },
  ];

  const body = [
    "Prva naučna konferencija sa međunarodnim učešćem u organizaciji opštine Berane",
    "Izazovi i perspektive za razvoj opštine Berane kao preduslov za valorizaciju sjeverne regije Crne Gore",
    "Prijatelji konferencije:",
  ];

  return (
    <section>
      <SinglePageNav />
      <SinglePageHeader title="Sponzori" body={body} />
      <SponsorsContainer>
        {organizations.map((sponsor) => (
          <div key={sponsor.name}>
            <img src={sponsor.src} alt={sponsor.name} />
            <p>{sponsor.name}</p>
          </div>
        ))}
      </SponsorsContainer>
    </section>
  );
};

export default Sponsors;
