"use client";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import GalleryPage from "../components/Gallery/gallery";
import Concrete from "../components/ConcreteSealing/Concrete";

const concreteSealing = () => {
  const PressureImages = [
    {
      before: "/images/1.jpeg",
      after: "/images/2.jpeg",
    },
    {
      before: "/images/3.jpeg",
      after: "/images/4.jpeg",
    },
  ];
  return (
    <div className="bg-white">
      <div className="relative flex items-center justify-center min-h-[60vh] bg-[#00C6F9] to-white bg-center bg-no-repeat bg-cover z-0">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('/images/pages-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>

        {/* Animated Content - Centered */}
        <div className="relative z-10 text-center">
          {/* Title Animation */}
          <motion.h1
            className="text-white text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Driveway Washing and Sealing Services in Cincinnati, Ohio
          </motion.h1>

          {/* Breadcrumb Animation */}
          <motion.div
            className="flex justify-center text-white text-md font_barlow font-semibold text-opacity-85"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-2 items-center ">
              Residential
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true }}
              >
                <FaLongArrowAltRight className="text-lg text-sky-300" />
              </motion.span>
              Concrete Sealing
            </div>
          </motion.div>
        </div>
      </div>

      <Concrete />
      <GalleryPage images={PressureImages} />
      <div className="mt-16 bg-blue-50 rounded-xl p-8 ">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Explore More Sealing Solutions
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "For additional sealing services, visit our sister company, Seal Solutions, which specializes in a wide range of sealing applications to meet all your needs.",
          ].map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-blue-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Serving Cincinnati and Beyond
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "We proudly serve homeowners and businesses in Cincinnati, Ohio, and the surrounding areas. Our team is committed to delivering exceptional results that protect your investment and enhance your property’s value.",
          ].map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-blue-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Protect Your Investment Today
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Don’t wait until your concrete surfaces show signs of damage. Contact us today at (513) 570-0355 to schedule your concrete wash and seal service. Let us help you preserve and beautify your property, ensuring it remains in top condition for years to come.",
          ].map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
      <motion.div 
  className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 lg:px-8 max-w-6xl mx-auto "
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {[
    {
      src: "/images/WhatsApp-Image-2023-08-24-at-21.43.43-768x576.jpg",
      alt: "Wet Look Sealer",
      caption: "Premium Wet Look Sealer"
    },
    {
      src: "/images/1528-768x512.png",
      alt: "Concrete Sealer Application",
      caption: "Commercial Grade Sealer at Skyline Chili"
    }
  ].map((item, index) => (
    <motion.div 
      key={index}
      className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
    >
      {/* Image Container with Adjusted Height */}
      <div className="aspect-[4/3] lg:aspect-[5/3] overflow-hidden bg-white mt-2">
        <img
          src={item.src}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Bottom Caption */}
      <div className="absolute inset-x-0 bottom-0 bg-black/40 p-4 text-center backdrop-blur-sm">
        <p className="text-sm font-semibold text-white lg:text-base">
          {item.caption}
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>
    </div>
  );
};

export default concreteSealing;
