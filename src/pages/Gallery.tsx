import { useEffect, useState } from "react";
import SinglePageHeader from "../components/SinglePageHeader";
import SinglePageNav from "../components/SinglePageNav";

const Gallery = () => {
  const body = `Foto galerija Naučne Konferencije sa Međunarodnim Učešćem 
        Izazovi i Perspektive za Razvoj Opštine Berane kao Preduslov za Valorizaciju Sjeverne Regije Crne Gore - IZperaBA 2023.`;

  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    const gallery = Object.values(
      import.meta.glob("../assets/slike/*.{png,jpg,jpeg,PNG,JPEG,JPG}", {
        eager: true,
        as: "url",
      })
    );

    setGalleryImages(gallery);
  }, []);

  return (
    <section>
      <SinglePageNav />
      <SinglePageHeader title="Foto galerija" body={body} />
      <article>
        {galleryImages.map((image) => (
          <img key={image} src={image} alt={`Image`} />
        ))}
      </article>
    </section>
  );
};

export default Gallery;
