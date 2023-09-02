import { Nav } from "../assets/style/Navbar.style";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <Nav>
      {/* <ul>
        <li>
          <a>O Beranama</a>
        </li>
        <li>
          <a>Cilj konferencije</a>
        </li>
        <li>
          <a>Teme konferencije</a>
        </li>
        {/* <li>
          <a>Odbori</a>
        </li> */}
      {/* <li>
          <a>Sponzori</a>
        </li> */}
      {/* <li>
        <a>Raspored sekcija</a>
      </li> */}
      {/* <li>
          <a>Foto galerija</a>
        </li> 
        <li>
          <a>Program konferencije</a>
        </li>
      </ul> */}
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <a>Program konferencije</a>
        </li>
        <li>
          <a>Teme konferencije</a>
        </li>
        <li>
          <a>Cilj konferencije</a>
        </li>
      </ul>
      <div>
        <p>8.9.2023.</p>
        <p>9.9.2023.</p>
        <p>10.9.2023.</p>
      </div>
    </Nav>
  );
};

export default Navbar;
