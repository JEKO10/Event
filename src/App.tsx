import { GlobalStyles } from "./assets/style/GlobalStyles";
import Header from "./components/Header";
import StrokeImg from "./assets/images/stroke.png";
import { Stroke } from "./assets/style/Header.style";
import MainContainer from "./components/MainContainer";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Stroke src={StrokeImg} alt="StrokeImg" />
      <MainContainer />
      <News />
      <Footer />
    </>
  );
}

export default App;
