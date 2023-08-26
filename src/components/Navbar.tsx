import Logo from "../assets/images/logo.png";
import { Flags, Nav } from "../assets/style/Navbar.style";
import mne from "../assets/images/mne.png";
import uk from "../assets/images/uk.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <a>Info</a>
        </li>
        <li>
          <a>Cilj konferencije</a>
        </li>
        <li>
          <a>Teme konferencije</a>
        </li>
        <li>
          <a>Odbori</a>
        </li>
        <li>
          <a>Sponzori</a>
        </li>
        <li>
          <a>Raspored sekcija</a>
        </li>
        <li>
          <a>Foto galerija</a>
        </li>
        <li>
          <a>Program konferencije</a>
        </li>
      </ul>
      <Flags>
        <img src={mne} alt="mne" />
        <img src={uk} alt="uk" />
      </Flags>
    </Nav>
  );
};

export default Navbar;
