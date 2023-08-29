import { GlobalStyles } from "./assets/style/GlobalStyles";
import Header from "./components/Header";
import StrokeImg from "./assets/images/stroke.png";
import { Stroke } from "./assets/style/Header.style";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Stroke src={StrokeImg} alt="StrokeImg" />
    </>
  );
}

export default App;
