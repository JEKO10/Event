import { Nav, FixedMenu } from "../assets/style/Navbar.style";
import Logo from "../assets/images/logo.png";
import { VscMenu } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <Nav>
      {isMenuOpen && (
        <FixedMenu>
          <ul>
            <li>
              <a>O Beranama</a>
            </li>
            <li>
              <a>Program konferencije</a>
            </li>
            <li>
              <a>Teme konferencije</a>
            </li>
            <li>
              <a>Cilj konferencije</a>
            </li>
            <li>
              <a>Odbori</a>
            </li>
            <li>
              <a>Prijava radova</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Uputstvo za pisanje radova</a>
            </li>
            <li>
              <a>Infomacije za autore</a>
            </li>
            <li>
              <a>Zbornik radova</a>
            </li>
            <li>
              <a>Raspored sesija</a>
            </li>
            <li>
              <a>Sponzori</a>
            </li>
            <li>
              <a>Foto galerija</a>
            </li>
          </ul>
        </FixedMenu>
      )}
      {isMenuOpen ? (
        <RxCross1 onClick={() => setIsMenuOpen(!isMenuOpen)} />
      ) : (
        <VscMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
      )}
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <Link to="/info/program-konferencije">Program konferencije</Link>
        </li>
        <li>
          <Link to="/info/teme-konferencije">Teme konferencije</Link>
        </li>
        <li>
          <Link to="/info/cilj-konferencije">Cilj konferencije</Link>
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
