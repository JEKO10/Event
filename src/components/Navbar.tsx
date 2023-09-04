import { Nav } from "../assets/style/Navbar.style";
import Logo from "../assets/images/logo.png";
import { VscMenu } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <VscMenu />
      <img src={Logo} alt="Logo" />
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
      <div>
        <p>8.9.2023.</p>
        <p>9.9.2023.</p>
        <p>10.9.2023.</p>
      </div>
    </Nav>
  );
};

export default Navbar;
