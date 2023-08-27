import { useParams } from "react-router-dom";
import newsData from "../news.json";
import { Header, Hero, NewInfo } from "../assets/style/SingleNewPage.style";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";

const SingleNewPage = () => {
  const { path } = useParams();
  const news = newsData.find((item) => item.path === path);

  if (!news) {
    return <div>Nemamo informacije o toj stranici.</div>;
  }

  const paragraphs = news.body.split("\n");
  const firstParagraph = paragraphs[0];
  const restParagraphs = paragraphs.slice(1);

  return (
    <>
      <Header img={news.banner}>
        <Hero>
          <h1>{news.title}</h1>
        </Hero>
      </Header>
      <main>
        <Sidebar />
        <NewInfo>
          <p>{firstParagraph}</p>
          <img src={news.img} alt="img" />
          {restParagraphs.map((paragraph, index) => (
            <>
              <p key={index}>{paragraph}</p> <br />
            </>
          ))}
        </NewInfo>
        <RightSidebar top={50} isSurvey={false} margin={0} />
      </main>
    </>
  );
};

export default SingleNewPage;
