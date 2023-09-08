import { useState } from "react";
import { Side } from "../assets/style/Sidebar.style";
import Menu from "../assets/images/menu.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // const params = useParams();

  const handleOdboriClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <section>
      <img src={Menu} alt="Menu" />
      <Side showDropdown={showDropdown}>
        <li>
          <Link to="/o-beranama">O Beranama</Link>
        </li>
        <li>
          <Link
            to="https://docs.google.com/document/d/1rZ4IUo48ddZV4mfDaF025Jeoi8faDq8W/edit?usp=sharing&ouid=108204098677108985370&rtpof=true&sd=true"
            target="_blank"
          >
            Program konferencije
          </Link>
        </li>
        <li>
          <Link to="/teme-i-raspored">Teme konferencije i raspored sesija</Link>
        </li>
        <li>
          <Link to="/cilj-konferencije">Cilj konferencije</Link>
        </li>
        <li>
          <Link to="#" onClick={handleOdboriClick}>
            Odbori
          </Link>
          <ul>
            <li>
              <Link to="/odbori">Organizacioni</Link>
            </li>
            <li>
              <Link to="/odbori">Naučni</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/radovi/prijava-radova">Prijava radova</Link>
        </li>
        <li>
          <Link to="/informacije-za-autore">Informacije za autore</Link>
        </li>
        <li>
          <Link to="/radovi/zbornik-radova">Zbornik radova</Link>
        </li>
        <li>
          <Link to="/info/sponzori">Sponzori</Link>
        </li>
        <li>
          <Link to="/radovi/foto-galerija">Foto galerija</Link>
        </li>
      </Side>
    </section>
  );
};

export default Sidebar;

//  {
//    sidebarPages.map((listItem) => (
//      <li key={listItem.id}>
//        {listItem.route !== "" ? (
//          <Link
//            to={
//              listItem.route === "info"
//                ? params.url?.includes("info")
//                  ? listItem.path
//                  : `/info/${listItem.path}`
//                : params.url?.includes("radovi")
//                ? listItem.path
//                : `/radovi/${listItem.path}`
//            }
//          >
//            {listItem.title}
//          </Link>
//        ) : listItem.title === "Odbori" ? (
//          <a href="#" onClick={handleOdboriClick}>
//            {listItem.title}
//          </a>
//        ) : (
//          <Link to={`/${listItem.path}`}>{listItem.title}</Link>
//        )}
//        {listItem.title === "Odbori" && showDropdown && (
//          <ul>
//            <li>
//              <Link to="/info/odbori">Programski</Link>
//            </li>
//            <li>
//              <Link to="/info/odbori">Organizacioni</Link>
//            </li>
//          </ul>
//        )}
//      </li>
//    ));
//  }
