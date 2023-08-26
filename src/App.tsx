import { GlobalStyles, RightSide } from "./assets/style/GlobalStyles";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Survey from "./components/Survey";
import Logo from "./assets/images/logo.png";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Sidebar />
      <RightSide>
        <Survey />
        <img src={Logo} alt="Logo" />
      </RightSide>
    </>
  );
}

export default App;
