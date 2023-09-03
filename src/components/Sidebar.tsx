import { Side } from "../assets/style/Sidebar.style";
import Menu from "../assets/images/menu.png";
import sidebarPages from "../sidebarPages.json";
import { Link, useParams } from "react-router-dom";

const Sidebar = () => {
  const showDropdown = false;
  const params = useParams();

  return (
    <section>
      <img src={Menu} alt="Menu" />
      <Side showDropdown={showDropdown}>
        {sidebarPages.map((listItem) => (
          <li key={listItem.id}>
            <Link
              // to={`/${params.url || "radovi"}/${listItem.path}`}
              to={
                listItem.route === "info"
                  ? params.url?.includes("info")
                    ? listItem.path
                    : `/info/${listItem.path}`
                  : params.url?.includes("radovi")
                  ? listItem.path
                  : `/radovi/${listItem.path}`
              }
            >
              {listItem.title}
            </Link>
          </li>
        ))}
      </Side>
    </section>
  );
};

export default Sidebar;

// to={`stranica/${listItem.path}`}
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
