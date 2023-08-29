import { HeaderContainer, Hero } from "../assets/style/Header.style";
import HeroImg from "../assets/images/hero.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Hero>
        <img src={HeroImg} alt="HeroImg" />
      </Hero>
    </HeaderContainer>
  );
};

export default Header;
