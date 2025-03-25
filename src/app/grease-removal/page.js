"use client";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import RoofWashing from "../components/roofwashing/roofwashing";
import Restaurant from "../components/Restaurant/Restaurant";
import GasStation from "../components/GasStation/gasStation";
import GraffitiRemoval from "../components/GraffitiRemoval/grafftiRemoval";
import GumRemoval from "../components/GraffitiRemoval/grafftiRemoval";
import GreaseRemoval from "../components/greaseRemoval/greaseRemoval";

const Grease = () => {
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
            Expert Grease Removal Services in Cincinnati, Ohio
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
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true }}
              ></motion.span>
            </div>
          </motion.div>
        </div>
      </div>

      <GreaseRemoval />
    </div>
  );
};

export default Grease;
