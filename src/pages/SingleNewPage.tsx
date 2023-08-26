import { useParams } from "react-router-dom";
import newsData from "../news.json";

const SingleNewPage = () => {
  const { path } = useParams();
  const news = newsData.find((item) => item.path === path);

  if (!news) {
    return <div>News not found</div>;
  }

  return (
    <div>
      <h2>{news.title}</h2>
      <img src={news.img} alt={news.title} />
      <p>{news.body}</p>
    </div>
  );
};

export default SingleNewPage;
