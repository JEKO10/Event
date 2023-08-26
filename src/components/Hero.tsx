import { HeroSection } from "../assets/style/Hero.style";
import news from "../news.json";
import SingleNew from "./SingleNew";

const Hero = () => {
  return (
    <HeroSection>
      {news.map((singleNew) => (
        <SingleNew key={singleNew.id} {...singleNew} />
      ))}
    </HeroSection>
  );
};

export default Hero;
