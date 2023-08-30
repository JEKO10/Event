import { Main } from "../assets/style/Sidebar.style";
import Sidebar from "./Sidebar";
import newsData from "../news.json";
import Survey from "./Survey";

const MainContainer = () => {
  const news = newsData[0];

  return (
    <Main>
      <Sidebar />
      <article>
        <h1>
          Naučna konferencija <br /> <span>IZperaBA Berane</span>
        </h1>
        <p
          dangerouslySetInnerHTML={{
            __html: news.body.replace(/\n/g, "<br>"),
          }}
        />
      </article>
      <Survey />
    </Main>
  );
};

export default MainContainer;
