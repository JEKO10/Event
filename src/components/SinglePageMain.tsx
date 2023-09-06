import { Main } from "../assets/style/SinglePage.style";

type SinglePageMainProps = {
  body: string;
};

const SinglePageMain: React.FC<SinglePageMainProps> = ({ body }) => {
  return (
    <Main>
      <p dangerouslySetInnerHTML={{ __html: body }} />
    </Main>
  );
};

export default SinglePageMain;
