import { Nav } from "../assets/style/Navbar.style";
import Logo from "../assets/images/logo.png";
import { VscMenu } from "react-icons/vsc";

const Navbar = () => {
  return (
    <Nav>
      <VscMenu />
      <img src={Logo} alt="Logo" />
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
      <div>
        <p>8.9.2023.</p>
        <p>9.9.2023.</p>
        <p>10.9.2023.</p>
      </div>
    </Nav>
  );
};

export default Navbar;
