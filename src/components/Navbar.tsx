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

  const handleClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <Nav>
      {isMenuOpen && (
        <FixedMenu>
          <ul>
            <li>
              <Link to="/info/o-beranama" onClick={() => handleClick()}>
                O Beranama
              </Link>
            </li>
            <li>
              <Link
                to="/info/program-konferencije"
                onClick={() => handleClick()}
              >
                Program konferencije
              </Link>
            </li>
            <li>
              <Link to="/info/teme-i-raspored" onClick={() => handleClick()}>
                Teme konferencije i raspored sesija
              </Link>
            </li>
            <li>
              <Link to="/info/cilj-konferencije" onClick={() => handleClick()}>
                Cilj konferencije
              </Link>
            </li>
            <li>
              <Link to="/info/odbori" onClick={() => handleClick()}>
                Odbori
              </Link>
            </li>
            <li>
              <Link to="/radovi/prijava-radova" onClick={() => handleClick()}>
                Prijava radova
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                to="/radovi/uputstvo-za-pisanje-radova"
                onClick={() => handleClick()}
              >
                Uputstvo za pisanje radova
              </Link>
            </li>
            <li>
              <Link
                to="/radovi/infomacije-za-autore"
                onClick={() => handleClick()}
              >
                Infomacije za autore
              </Link>
            </li>
            <li>
              <Link to="/radovi/zbornik-radova" onClick={() => handleClick()}>
                Zbornik radova
              </Link>
            </li>
            <li>
              <Link to="/info/sponzori" onClick={() => handleClick()}>
                Sponzori
              </Link>
            </li>
            <li>
              <Link to="/radovi/foto-galerija" onClick={() => handleClick()}>
                Foto galerija
              </Link>
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
          <Link to="/info/o-beranama">O Beranama</Link>
        </li>
        <li>
          <Link to="/info/program-konferencije">Program konferencije</Link>
        </li>
        <li>
          <Link to="/cilj-konferencije">Cilj konferencije</Link>
        </li>
      </ul>
      <div>
        <p>19.9.2023.</p>
        <p>20.9.2023.</p>
        <p>21.9.2023.</p>
      </div>
    </Nav>
  );
};

export default Navbar;
