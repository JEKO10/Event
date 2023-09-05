import React from "react";
import { Header } from "../assets/style/SinglePage.style";
import Sidebar from "./Sidebar";

type SinglePageHeaderProps = {
  selectedPage: {
    id: number;
    title: string;
    path: string;
    route: string;
  };
};

const SinglePageHeader: React.FC<SinglePageHeaderProps> = ({
  selectedPage,
}) => {
  const titleWords = selectedPage.title.split(" ");

  if (titleWords.length >= 2) {
    titleWords[1] = `<span>${titleWords[1]}</span>`;
  }

  const titleWithSpan = titleWords.join(" ");

  return (
    <Header>
      <Sidebar />
      <article>
        <h2 dangerouslySetInnerHTML={{ __html: titleWithSpan }} />
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum."
        </p>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum."
        </p>
      </article>
    </Header>
  );
};

export default SinglePageHeader;
