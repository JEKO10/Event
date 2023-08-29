import { Nav } from "../assets/style/Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <ul>
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
        <li>
          <a>Raspored sekcija</a>
        </li>
        {/* <li>
          <a>Foto galerija</a>
        </li> */}
        <li>
          <a>Program konferencije</a>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
