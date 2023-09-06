import React from "react";
import { Header } from "../assets/style/SinglePage.style";
import Sidebar from "./Sidebar";

type SinglePageHeaderProps = {
  title: string;
  body: string | string[];
};

const SinglePageHeader: React.FC<SinglePageHeaderProps> = ({ title, body }) => {
  const titleWords = title.split(" ");

  if (titleWords.length >= 2) {
    titleWords[1] = `<span>${titleWords[1]}</span>`;
  }

  const titleWithSpan = titleWords.join(" ");

  return (
    <Header>
      <Sidebar />
      <article>
        <h2 dangerouslySetInnerHTML={{ __html: titleWithSpan }} />
        {/* {Array.isArray(body) ? (
          body.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))
        ) : (
          <p dangerouslySetInnerHTML={{ __html: body as string }} />
        )} */}
        <p>{body}</p>
      </article>
    </Header>
  );
};

export default SinglePageHeader;
