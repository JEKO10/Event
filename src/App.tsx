import { GlobalStyles } from "./assets/style/GlobalStyles";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Navbar />
        <Hero />
      </main>
    </>
  );
}

export default App;
