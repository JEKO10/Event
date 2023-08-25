import { GlobalStyles } from "./assets/style/GlobalStyles";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Survey from "./components/Survey";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Sidebar />
      <Survey />
    </>
  );
}

export default App;
