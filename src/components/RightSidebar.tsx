import { RightSide } from "../assets/style/Sidebar.style";
import Survey from "./Survey";
import Logo from "../assets/images/logo.png";
import cikom from "../assets/images/cikom.png";
import Etf from "../assets/images/etf.png";
import FonLogo from "../assets/images/fon-logo.png";
import Ieee from "../assets/images/ieee.gif";
import Ugd from "../assets/images/udg.svg";
import Ucg from "../assets/images/ucg.png";

type RightSidebarProps = {
  top: number;
  margin?: number | undefined;
  isSurvey: boolean;
};

const RightSidebar: React.FC<RightSidebarProps> = ({
  top,
  isSurvey,
  margin,
}) => {
  return (
    <RightSide top={top} margin={margin}>
      {isSurvey && <Survey />}
      <img src={Logo} alt="Logo" />
      <img src={Etf} alt="Etf" />
      <img src={cikom} alt="cikom" />
      <img src={FonLogo} alt="FonLogo" />
      <img src={Ieee} alt="Ieee" />
      <img src={Ugd} alt="Ugd" />
      <img src={Ucg} alt="Ucg" />
    </RightSide>
  );
};

export default RightSidebar;
