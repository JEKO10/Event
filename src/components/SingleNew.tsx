import React from "react";
import { Link } from "react-router-dom";
import { NewsInfo } from "../assets/style/Hero.style";

type SingleNewProps = {
  id: number;
  path: string;
  title: string;
  body: string;
  img: string;
};

const SingleNew: React.FC<SingleNewProps> = ({ img, path, title, body }) => {
  return (
    <Link to={path}>
      <img src={img} alt="img" />
      <NewsInfo>
        <h2>{title}</h2>
        <p>{body.slice(0, 55)}...</p>
      </NewsInfo>
    </Link>
  );
};

export default SingleNew;
