import React, { useState, useEffect } from "react";
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
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Link to={`vijesti/${path}`}>
      <img src={banner} alt="img" />
      <NewsInfo>
        <h4>{date}</h4>
        <h2>{title}</h2>
        {innerWidth > 500 ? (
          <p>{body.slice(0, 50)}...</p>
        ) : (
          <p>{body.slice(0, 40)}...</p>
        )}
      </NewsInfo>
    </Link>
  );
};

export default SingleNew;
