import Logo from "../assets/images/logo.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { SocialsContainer } from "../assets/style/Socials.style";
import { TfiWorld } from "react-icons/tfi";

const Socials = () => {
  return (
    <SocialsContainer>
      <img src={Logo} alt="Logo" />
      <article>
        <a
          href="https://www.facebook.com/OpstinaBerane/?locale=sr_RS"
          target="__blank"
        >
          <BsFacebook />
        </a>
        <a href="https://berane.me/" target="__blank">
          <TfiWorld />
        </a>
        <a href="https://www.instagram.com/opstinaberane/" target="__blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/OpstinaBerane">
          <BsTwitter />
        </a>
      </article>
    </SocialsContainer>
  );
};

export default Socials;
