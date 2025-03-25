// components/CommercialGallery.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import GalleryPage from "../Gallery/gallery";

const CommercialGallery = () => {
  const galleryImages = [
    "/images/1252.jpg",
    "/images/Untitled-2.jpg",
    "/images/ImportedPhoto_1740409854627.jpg",
    "/images/300-1024x683-1.png",
    "/images/1530.png",
    "/images/06 (2).jpg",
    "/images/16.jpg",
    "/images/05 (2).jpg",
    "/images/ImportedPhoto_1739380373586-1536x1152.jpg",
    // Add more images as needed
  ];
  const PressureImages = [
    {
      before: "/images/7.png",
      after: "/images/8 (1).png",
    },
    {
      before: "/images/9 (1).jpg",
      after: "/images/6-1.jpg",
    },
    {
        before: "/images/6-1.png",
        after: "/images/6s.png",
      },
      {
        before: "/images/ImportedPhoto_1740409654948.jpg",
        after: "/images/ImportedPhoto_1740409654948 (1).jpg",
      },

  ];
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Content & Video Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Press the Bar-Button and Slide to See Before and After Result
              Visuals
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We have created before and after result visuals for you to get an
              idea about our professional pressure washing services. Just press
              the bar button and slide to see before and after result visuals.
            </p>
            <div className="border-l-4 border-[#00C6F9] pl-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false} // Remove if you want controls visible
              >
                <source
                  src="/images/captured-media-3-mp4.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

        </div>
        <GalleryPage images={PressureImages} />
        

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Commercial Work Portfolio
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <Image
                  src={img}
                  alt={`Commercial project ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <span className="text-white text-lg font-medium">
                    Project {index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        {/* <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Space?
          </h3>
          <a
            href="#contact"
            className="inline-block bg-[#00C6F9] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0099CC] transition-colors shadow-lg hover:shadow-xl"
          >
            Schedule Free Consultation
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default CommercialGallery;
