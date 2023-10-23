import SinglePageNav from "../components/SinglePageNav";
import SinglePageHeader from "../components/SinglePageHeader";
import { SponsorsContainer } from "../assets/style/Sponsors.style";
import Ministarstvo from "../assets/images/ministarstvo.jpg";
import Uprava from "../assets/images/uprava.jpg";
import Hotel from "../assets/images/hotel.png";
import Cedis from "../assets/images/cedis.png";
import Reviko from "../assets/images/reviko.png";
import Epcg from "../assets/images/epcg.jpg";
import Granit from "../assets/images/granit.png";
import Viktorija from "../assets/images/viktorija.png";
import Eloksir from "../assets/images/eloksir.png";
import Logo from "../assets/images/logo-placeholder.png";

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
      bg: "#000",
      color: "#fff",
    },
    {
      name: "Elektroprivreda",
      src: Epcg,
    },
    {
      name: "V&V Bar",
      src: Logo,
    },
    {
      name: "Granit Berane",
      src: Granit,
    },
    {
      name: "Knjižara Progres Berane",
      src: Logo,
    },
    {
      name: "Ortak Berane",
      src: Logo,
    },
    {
      name: "Geo-lux Berane",
      src: Logo,
    },
    {
      name: "Viktorija Berane",
      src: Viktorija,
    },
    {
      name: "Eloksir Plus Berane",
      src: Eloksir,
    },
  ];

  return (
    <section>
      <SinglePageNav />
      <SinglePageHeader title="Sponzori" body={""} />
      <SponsorsContainer>
        {organizations.map((sponsor) => (
          <div
            key={sponsor.name}
            style={{ background: sponsor.bg, color: sponsor.color }}
          >
            <img src={sponsor.src} alt="SPONSORS IMAGE" />
            <p>{sponsor.name}</p>
          </div>
        ))}
      </SponsorsContainer>
    </section>
  );
};

export default Sponsors;
