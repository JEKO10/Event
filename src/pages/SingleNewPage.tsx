import { useParams } from "react-router-dom";
import newsData from "../news.json";
import { Header, Hero, NewInfo } from "../assets/style/SingleNewPage.style";
import RightSidebar from "../components/RightSidebar";

const SingleNewPage = () => {
  const { path } = useParams();
  const news = newsData.find((item) => item.path === path);

  if (!news) {
    return <div>Nemamo informacije o toj stranici.</div>;
  }

  return (
    <>
      <Header img={news.img}>
        <Hero>
          <h1>{news.title}</h1>
        </Hero>
      </Header>
      <NewInfo>
        <p
          dangerouslySetInnerHTML={{
            __html: news.body.replace(/\n/g, "<br>"),
          }}
        />
      </NewInfo>
      <RightSidebar top={50} isSurvey={false} margin={5} />
    </>
  );
};

export default SingleNewPage;
