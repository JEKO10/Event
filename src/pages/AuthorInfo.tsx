import SinglePageNav from "../components/SinglePageNav";
import SinglePageHeader from "../components/SinglePageHeader";

const AuthorInfo = () => {
  const infoText =
    `Prvi poziv za dostavljanje apstrakta: <span>15.10.</span> <br />
        Prvi poziv za dostavljanje konačnih radova: <span>10.10.</span> <br />
        Prvi poziv za dostavljanje konačnih radova: <span>15.10.</span>  <br />  <br />
        Na sledećem linku možete preuzeti informacije za autore: <br />` +
    '<a href="/src/assets/documents/uputstvo-za-autore.doc" download>' +
    "Preuzmite informacije za autore" +
    "</a>";

  return (
    <>
      <SinglePageNav />
      <SinglePageHeader title="Informacije za autore" body={infoText} />
    </>
  );
};

export default AuthorInfo;
