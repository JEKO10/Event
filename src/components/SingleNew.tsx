import React from "react";
import { Link } from "react-router-dom";
import { NewsInfo } from "../assets/style/News.style";

type SingleNewProps = {
  id: number;
  path: string;
  title: string;
  body: string;
  banner: string;
};

const SingleNew: React.FC<SingleNewProps> = ({ banner, title, body }) => {
  return (
    // <Link to={path}>
    <a>
      <img src={banner} alt="img" />
      <NewsInfo>
        <h2>{title}</h2>
        <p>{body.slice(0, 50)}...</p>
      </NewsInfo>
    </a>
    // </Link>
  );
};

export default SingleNew;
