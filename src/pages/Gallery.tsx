import { useEffect, useState, useRef } from "react";
import SinglePageHeader from "../components/SinglePageHeader";
import SinglePageNav from "../components/SinglePageNav";
import { FullImg, ImgContainer } from "../assets/style/Gallery.style";
import { RxCross1 } from "react-icons/rx";

const Gallery = () => {
  const body = `Foto galerija Naučne Konferencije sa Međunarodnim Učešćem 
        Izazovi i Perspektive za Razvoj Opštine Berane kao Preduslov za Valorizaciju Sjeverne Regije Crne Gore - IZperaBA 2023.`;
  const imgRef = useRef<HTMLImageElement>(null);

  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const clickOutside = (e: MouseEvent) => {
    if (!imgRef.current?.contains(e.target as Node)) {
      setSelectedImage("");
    }
  };

  useEffect(() => {
    const gallery = Object.values(
      import.meta.glob("../assets/slike/*.{png,jpg,jpeg,PNG,JPEG,JPG}", {
        eager: true,
        as: "url",
      })
    );

    setGalleryImages(gallery);
    document.addEventListener("click", clickOutside, true);
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
          <div onClick={() => setSelectedImage(image)} key={image}>
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
          <img
            src={selectedImage}
            ref={imgRef}
            alt={`Full-size ${selectedImage}`}
          />
        </FullImg>
      )}
    </section>
  );
};

export default Gallery;
