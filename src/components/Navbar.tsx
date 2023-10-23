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
              <Link to="/o-beranama" onClick={() => handleClick()}>
                O Beranama
              </Link>
            </li>
            <li>
              <Link to="/program-konferencije" onClick={() => handleClick()}>
                Program konferencije
              </Link>
            </li>
            <li>
              <Link to="/teme-i-raspored" onClick={() => handleClick()}>
                Teme konferencije i raspored sesija
              </Link>
            </li>
            <li>
              <Link to="/cilj-konferencije" onClick={() => handleClick()}>
                Cilj konferencije
              </Link>
            </li>
            <li>
              <Link to="/odbori" onClick={() => handleClick()}>
                Odbori
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleClick()}>
                Prijava radova
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/informacije-za-autore" onClick={() => handleClick()}>
                Informacije za autore
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleClick()}>
                Zbornik radova
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleClick()}>
                Sponzori
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleClick()}>
                Foto galerija
              </Link>
            </li>
          </ul>
        </FixedMenu>
      )}
      {isMenuOpen ? (
        <RxCross1
          data-testid="close-menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      ) : (
        <VscMenu
          data-testid="menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      )}
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <Link to="/o-beranama">O Beranama</Link>
        </li>
        <li>
          <Link to="/program-konferencije">Program konferencije</Link>
        </li>
        <li>
          <Link to="/cilj-konferencije">Cilj konferencije</Link>
        </li>
      </ul>
      <div>
        <p>2.11.2023.</p>
        <p>3.11.2023.</p>
        <p>4.11.2023.</p>
        {/* <p>+382 67 275 690</p> */}
      </div>
    </Nav>
  );
};

export default Navbar;
