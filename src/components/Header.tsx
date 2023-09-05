import { HeaderContainer, Hero } from "../assets/style/Header.style";
import HeroImg from "../assets/images/hero.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
      <section>
        <Hero>
          <img src={HeroImg} alt="IZPera Berane Naučna konferencija berane" />
        </Hero>
      </section>
    </HeaderContainer>
  );
};

export default Header;
