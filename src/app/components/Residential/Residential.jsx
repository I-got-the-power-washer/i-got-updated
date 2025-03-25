// components/CommercialGallery.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import GalleryPage from "../Gallery/gallery";

const ResidentialGallery = () => {
 
  const PressureImages = [
    {
      before: "/images/ssde.png",
      after: "/images/fjdsh.png",
    },
    {
      before: "/images/Before_Wall.jpg",
      after: "/images/After_Wall.jpg",
    },
    {
        before: "/images/2.png",
        after: "/images/2s.png",
      },
      {
        before: "/images/1.png",
        after: "/images/1s.png",
      },
      {
        before: "/images/media_20250224_200900_44446008399370510.jpg",
        after: "/images/media_20250224_200900_1923208072107551546.jpg",
      },
      {
        before: "/images/20.jpg",
        after: "/images/18.jpg",
      },
      {
        before: "/images/20.png",
        after: "/images/21.png",
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
            Press the Bar-Button and Slide to See Before and After Result Visuals
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We have created before and after result visuals for you to get an idea about our professional pressure washing services. Just press the bar button and slide to see before and after result visuals.
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

export default ResidentialGallery;
