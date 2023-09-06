import SinglePageHeader from "../components/SinglePageHeader";
import SinglePageMain from "../components/SinglePageMain";
import SinglePageNav from "../components/SinglePageNav";

const Topics = () => {
  const body =
    "Naučna konferencija sa međunarodnim učešćem pod nazivom 'Izazovi i Perspektive za Razvoj Opštine Berane' kao preduslov za valorizaciju sjeverne regije Crne Gore, s akronimom 'IZperaBA', kao glavnu temu na osnovu postavljenog cilja održavanja planirane konferencije ima za cilj sagledavanje svih izazova s kojima se Opština Berane susreće kako bi došla do perspektiva koje će uticati na razvoj čitave opštine i na taj način smanjiti migraciju stanovništva iz ove opštine.";

  const mainBody = `Iz postavljenih tema konferencije proizilaze sljedeće <br/> <br/>
           <h3><strong>S E S I J E:</strong></h3>
           <ol>
              <li>
               Razvoj turizma i poljoprivrede kao preduslov poboljšanja standarda građana.
              </li>
              <li>
               Razvoj saobraćajne infrastrukture kao preduslov zaustavljanja
               migracije stanovništva.
              </li>
           </ol>`;

  return (
    <>
      <SinglePageNav />
      <SinglePageHeader
        title={"Teme konferencije i raspored sesija"}
        body={body}
      ></SinglePageHeader>
      <SinglePageMain body={mainBody} />
    </>
  );
};

export default Topics;

// const topicsArray = [
//   `Naučna konferencija sa međunarodnim učešćem pod nazivom 'Izazovi i Perspektive za Razvoj Opštine Berane' kao preduslov za valorizaciju sjeverne regije Crne Gore, s akronimom 'IZperaBA', kao glavnu temu na osnovu postavljenog cilja održavanja planirane konferencije ima za cilj sagledavanje svih izazova s kojima se Opština Berane susreće kako bi došla do perspektiva koje će uticati na razvoj čitave opštine i na taj način smanjiti migraciju stanovništva iz ove opštine. <br/> <br/>`,
//   `Iz postavljenih tema konferencije proizilaze sledeće <br/> <br/>
//            <h3><strong>S E S I J E:</strong></h3>
//            <ul>
//               <li>
//                Razvoj turizma i poljoprivrede kao preduslov poboljšanja standarda građana.
//               </li>
//               <li>
//                Razvoj saobraćajne infrastrukture kao preduslov zaustavljanja
//                migracije stanovništva.
//               </li>
//            </ul>`,
// ];
