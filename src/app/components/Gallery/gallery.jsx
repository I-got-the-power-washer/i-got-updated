import BeforeAfterSlider from "./BeforeAfterSlider";
import Link from "next/link";

const GalleryPage = ({ images }) => {
  return (
    <section className="p-8 bg-white">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <BeforeAfterSlider
            key={index}
            beforeImage={image.before}
            afterImage={image.after}
          />
        ))}
      </div>
    
    </section>
  );
};

export default GalleryPage;
