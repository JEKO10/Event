import React from "react";
import { Link } from "react-router-dom";
import { NewsInfo } from "../assets/style/News.style";

type SingleNewProps = {
  id: number;
  path: string;
  title: string;
  body: string;
  banner: string;
  date: string;
};

const SingleNew: React.FC<SingleNewProps> = ({
  path,
  banner,
  title,
  body,
  date,
}) => {
  return (
    <Link to={path}>
      <img src={banner} alt="img" />
      <NewsInfo>
        <h4>{date}</h4>
        <h2>{title}</h2>
        <p>{body.slice(0, 50)}...</p>
      </NewsInfo>
    </Link>
  );
};

export default SingleNew;
