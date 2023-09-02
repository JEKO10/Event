import Header from "../components/Header";
import { Stroke } from "../assets/style/Header.style";
import MainContainer from "../components/MainContainer";
import News from "../components/News";
import StrokeImg from "../assets/images/stroke.png";

const Home = () => {
  return (
    <main>
      <Header />
      <Stroke src={StrokeImg} alt="StrokeImg" />
      <MainContainer />
      <News />
    </main>
  );
};

export default Home;
