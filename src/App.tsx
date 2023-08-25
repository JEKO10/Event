import { GlobalStyles } from "./assets/style/GlobalStyles";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SIdebar";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Sidebar />
    </>
  );
}

export default App;
