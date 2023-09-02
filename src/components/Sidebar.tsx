import { useState } from "react";
import { Side } from "../assets/style/Sidebar.style";
import Menu from "../assets/images/menu.png";

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section>
      <img src={Menu} alt="Menu" />
      <Side showDropdown={showDropdown}>
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
          <a onClick={() => setShowDropdown(!showDropdown)}>Odbori</a>
          <ul>
            <li>
              <a>Programski</a>
            </li>
            <li>
              <a>Organizacioni</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Prijava radova</a>
        </li>
        <li>
          <a>Uputstvo za pisanje radova</a>
        </li>
        <li>
          <a>Informacije za autore</a>
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
      </Side>
    </section>
  );
};

export default Sidebar;
