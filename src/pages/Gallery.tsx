import SinglePageHeader from "../components/SinglePageHeader";
import SinglePageNav from "../components/SinglePageNav";

const Gallery = () => {
  const body = `Foto galerija Naučne Konferencije sa Međunarodnim Učešćem 
        Izazovi i Perspektive za Razvoj Opštine Berane kao Preduslov za Valorizaciju Sjeverne Regije Crne Gore - IZperaBA 2023.`;

  return (
    <section>
      <SinglePageNav />
      <SinglePageHeader title="Foto galerija" body={body} />
    </section>
  );
};

export default Gallery;
