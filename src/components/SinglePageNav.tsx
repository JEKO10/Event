import Logo from "../assets/images/logo.png";
import { Nav } from "../assets/style/SinglePage.style";
import { Link } from "react-router-dom";

const SinglePageNav = () => {
  return (
    <Nav>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <a>Program konferencije</a>
        </li>
        <li>
          <a>Teme konferencije</a>
        </li>
        <li>
          <a>Cilj konferencije</a>
        </li>
      </ul>
    </Nav>
  );
};

export default SinglePageNav;
