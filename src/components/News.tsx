import { NewsSection } from "../assets/style/News.style";
import news from "../news.json";
import SingleNew from "./SingleNew";

const News = () => {
  return (
    <NewsSection data-testid="news-section">
      {news.map((singleNew) => (
        <SingleNew key={singleNew.id} {...singleNew} />
      ))}
    </NewsSection>
  );
};

export default News;
