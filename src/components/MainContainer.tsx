import { Main } from "../assets/style/Sidebar.style";
import Sidebar from "./Sidebar";
import newsData from "../news.json";

const MainContainer = () => {
  const news = newsData[0];

  return (
    <Main>
      <Sidebar />
      <div>
        <h1>
          Naučna konferencija <br /> <span>IZperaBA Berane</span>
        </h1>
        <p
          dangerouslySetInnerHTML={{
            __html: news.body.replace(/\n/g, "<br>"),
          }}
        />
      </div>
      <Sidebar />
    </Main>
  );
};

export default MainContainer;
