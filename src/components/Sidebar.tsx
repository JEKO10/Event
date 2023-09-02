import { Side } from "../assets/style/Sidebar.style";
import Menu from "../assets/images/menu.png";
import sidebarPages from "../sidebarPages.json";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const showDropdown = false;

  return (
    <section>
      <img src={Menu} alt="Menu" />
      <Side showDropdown={showDropdown}>
        {sidebarPages.map((listItem) => (
          <li key={listItem.id}>
            <Link to={`stranica/${listItem.path}`}>{listItem.title}</Link>
          </li>
        ))}
      </Side>
    </section>
  );
};

export default Sidebar;

// const [showDropdown, setShowDropdown] = useState(false);

{
  /* <li>
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
        </li> */
}
