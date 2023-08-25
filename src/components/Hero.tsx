import { HeroSection, NewsInfo } from "../assets/style/Hero.style";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

const Hero = () => {
  return (
    <HeroSection>
      <div>
        <img src={img1} alt="img1" />
        <NewsInfo>
          <h2>Naslov</h2>
          <p>Pocetak teskta... Lorem ipsum, dolor sit amet consectetur...</p>
        </NewsInfo>
      </div>
      <div>
        <img src={img2} alt="img2" />
        <NewsInfo>
          <h2>Naslov</h2>
          <p>Pocetak teskta... Lorem ipsum, dolor sit amet consectetur...</p>
        </NewsInfo>
      </div>
      <div>
        <img src={img3} alt="img3" />
        <NewsInfo>
          <h2>Naslov</h2>
          <p>Pocetak teskta... Lorem ipsum, dolor sit amet consectetur...</p>
        </NewsInfo>
      </div>
    </HeroSection>
  );
};

export default Hero;
