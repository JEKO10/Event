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
              <Link
                to="https://docs.google.com/document/d/1rZ4IUo48ddZV4mfDaF025Jeoi8faDq8W/edit?usp=sharing&ouid=108204098677108985370&rtpof=true&sd=true"
                target="_blank"
                onClick={() => handleClick()}
              >
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
              <Link to="#" onClick={() => handleClick()}>
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
              <Link to="#" onClick={() => handleClick()}>
                Zbornik radova
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleClick()}>
                Sponzori
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleClick()}>
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
        {/* <p>19.9.2023.</p>
        <p>20.9.2023.</p>
        <p>21.9.2023.</p> */}
        <p>+382 67 275 690</p>
      </div>
    </Nav>
  );
};

export default Navbar;
