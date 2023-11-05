import { useEffect, useState } from "react";
import SinglePageHeader from "../components/SinglePageHeader";
import SinglePageNav from "../components/SinglePageNav";
import { FullImg, ImgContainer } from "../assets/style/Gallery.style";
import { RxCross1 } from "react-icons/rx";

const Gallery = () => {
  const body = `Foto galerija Naučne Konferencije sa Međunarodnim Učešćem 
        Izazovi i Perspektive za Razvoj Opštine Berane kao Preduslov za Valorizaciju Sjeverne Regije Crne Gore - IZperaBA 2023.`;

  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    const gallery = Object.values(
      import.meta.glob("../assets/slike/*.{png,jpg,jpeg,PNG,JPEG,JPG}", {
        eager: true,
        as: "url",
      })
    );

    setGalleryImages(gallery);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  return (
    <section>
      <SinglePageNav />
      <SinglePageHeader title="Foto galerija" body={body} />
      <ImgContainer>
        {galleryImages.map((image) => (
          <div onClick={() => setSelectedImage(image)}>
            <img
              key={image}
              src={image}
              alt={`Image`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </ImgContainer>
      {selectedImage && (
        <FullImg>
          <RxCross1 onClick={() => setSelectedImage("")} />
          <img src={selectedImage} alt={`Full-size ${selectedImage}`} />
        </FullImg>
      )}
    </section>
  );
};

export default Gallery;
