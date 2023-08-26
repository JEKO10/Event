import Hero from "../components/Hero";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <Hero />
      <Sidebar />
      <RightSidebar top={5} isSurvey={true} />
    </>
  );
};

export default Home;
