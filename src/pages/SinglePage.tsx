import { useParams } from "react-router-dom";
import pages from "../sidebarPages.json";
import { Image, Main } from "../assets/style/SinglePage.style";
import Berane from "../assets/images/berane.jpg";
import Centar from "../assets/images/centar.jpg";
import SinglePageNav from "../components/SinglePageNav";
import SinglePageHeader from "../components/SinglePageHeader";

const SinglePage = () => {
  const { path } = useParams();

  const selectedPage = pages.find((page) => page.path === path);

  if (!selectedPage) {
    return <p>Nepostojeća stranica!</p>;
  }

  return (
    <>
      <SinglePageNav />
      <SinglePageHeader title={selectedPage.title} body={selectedPage.route} />
      <Main>
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
        <img src={Berane} alt="Berane" />
      </Main>
      <Image>
        <img src={Centar} alt="Centar" />
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum." "Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore.
        </p>
      </Image>
    </>
  );
};

export default SinglePage;
