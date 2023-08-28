import Logo from "../assets/images/logo.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { SocialsContainer } from "../assets/style/Socials.style";
import { TfiWorld } from "react-icons/tfi";

const Socials = () => {
  return (
    <SocialsContainer>
      <img src={Logo} alt="Logo" />
      <article>
        <BsFacebook />
        <TfiWorld />
        <BsInstagram />
        <BsTwitter />
      </article>
    </SocialsContainer>
  );
};

export default Socials;
