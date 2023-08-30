import { Side } from "../assets/style/Sidebar.style";
import Menu from "../assets/images/menu.png";

const Sidebar = () => {
  return (
    <section>
      <img src={Menu} alt="Menu" />
      <Side>
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
          <a>Prijava radova</a>
        </li>
        <li>
          <a>Informacije za autore</a>
        </li>
        <li>
          <a>Raspored sekcija</a>
        </li>
        <li>
          <a>Zbornici radova</a>
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
      </Side>
    </section>
  );
};

export default Sidebar;
