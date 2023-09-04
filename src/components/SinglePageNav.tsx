import Logo from "../assets/images/logo.png";
import { Nav } from "../assets/style/SinglePage.style";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";

const SinglePageNav = () => {
  return (
    <Nav>
      <VscMenu />
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div>
        <p>8.9.2023.</p>
        <p>9.9.2023.</p>
        <p>10.9.2023.</p>
      </div>
      <ul>
        <li>
          <Link to="/info/program-konferencije">Program konferencije</Link>
        </li>
        <li>
          <Link to="/info/teme-konferencije">Teme konferencije</Link>
        </li>
        <li>
          <Link to="/info/cilj-konferencije">Cilj konferencije</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default SinglePageNav;
