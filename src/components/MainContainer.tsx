import { Main } from "../assets/style/Sidebar.style";
import Sidebar from "./Sidebar";
import newsData from "../news.json";
import Survey from "./Survey";

const MainContainer = () => {
  return (
    <Main>
      <Sidebar />
      <article>
        <h1>
          Naučna konferencija <br /> <span>IZperaBA Berane</span>
        </h1>
        <p
          dangerouslySetInnerHTML={{
            __html: newsData[1].body.replace(/\n/g, "<br>"),
          }}
        />
      </article>
      <Survey />
    </Main>
  );
};

export default MainContainer;
