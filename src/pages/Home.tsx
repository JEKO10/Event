import Hero from "../components/Hero";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <main>
      <Sidebar />
      <Hero />
      <RightSidebar top={5} isSurvey={true} />
    </main>
  );
};

export default Home;
