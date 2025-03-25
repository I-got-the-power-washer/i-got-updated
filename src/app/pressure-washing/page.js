"use client";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import GalleryPage from "../components/Gallery/gallery";
import Pressure from "../components/PressureWashing/pressure";

const PressureWashing = () => {
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
    <div>
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
            Top-Quality Pressure Washing Services in Cincinnati, Ohio
          </motion.h1>

          {/* Breadcrumb Animation */}
          <motion.div
            className="flex justify-center text-white text-md font_barlow font-semibold text-opacity-85"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-2 items-center">
              Residential
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true }}
              >
                <FaLongArrowAltRight className="text-lg text-sky-300" />
              </motion.span>
              Pressure Washing
            </div>
          </motion.div>
        </div>
      </div>
      <Pressure />
     
      <GalleryPage images={PressureImages} />
    </div>
  );
};

export default PressureWashing;
