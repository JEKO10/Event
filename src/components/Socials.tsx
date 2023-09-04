import Logo from "../assets/images/logo.png";
import { SocialsContainer } from "../assets/style/Socials.style";
import twitter from "../assets/images/twitter.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import website from "../assets/images/monitor.svg";

const Socials = () => {
  return (
    <SocialsContainer>
      <img src={Logo} alt="Logo" />
      <article>
        <a href="https://twitter.com/OpstinaBerane" target="__blank">
          <img src={twitter} alt="twitter" />
        </a>
        <a
          href="https://www.facebook.com/OpstinaBerane/?locale=sr_RS"
          target="__blank"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/opstinaberane/">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://berane.me/" target="__blank">
          <img src={website} alt="website" />
        </a>
      </article>
    </SocialsContainer>
  );
};

export default Socials;
