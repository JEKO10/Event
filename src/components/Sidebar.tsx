import { useState } from "react";
import { Side } from "../assets/style/Sidebar.style";
import Menu from "../assets/images/menu.png";
import sidebarPages from "../sidebarPages.json";
import { Link, useParams } from "react-router-dom";

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const params = useParams();

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
        {sidebarPages.map((listItem) => (
          <li key={listItem.id}>
            {listItem.route !== "" ? (
              <Link
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
            ) : listItem.title === "Odbori" ? (
              <a href="#" onClick={handleOdboriClick}>
                {listItem.title}
              </a>
            ) : (
              <Link to={`/${listItem.path}`}>{listItem.title}</Link>
            )}
            {listItem.title === "Odbori" && showDropdown && (
              <ul>
                <li>
                  <Link to="/info/odbori">Programski</Link>
                </li>
                <li>
                  <Link to="/info/odbori">Organizacioni</Link>
                </li>
              </ul>
            )}
          </li>
        ))}
      </Side>
    </section>
  );
};

export default Sidebar;
