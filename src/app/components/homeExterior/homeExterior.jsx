"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const HomeExterior = () => {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      controls.start("visible");
      textControls.start("visible");
    }
  }, [controls, textControls, isMounted]);

  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  if (!isMounted) return null;

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-[80vh] flex items-center justify-center py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] max-w-6xl w-full gap-8">
        {/* Image Section */}
        <motion.div
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={imageVariants}
          className="flex items-center justify-center p-6"
        >
          <div className="relative group">
            <motion.img
              src="/images/WhatsApp-Image-2023-09-06-at-18.42.05.jpg"
              alt="Professional Pressure Washing"
              className="w-full h-[500px] object-cover rounded-xl shadow-2xl border-8 border-white transform transition-transform duration-500 group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 border-2 border-blue-100/50 rounded-xl shadow-inner" />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={textVariants}
          className="flex flex-col justify-center p-6 space-y-6"
        >
          <motion.h2
            className="text-3xl font-bold tracking-tight text-gray-900"
            variants={textVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Premium Pressure Washing
            </span>
            <br />
            <span className="mt-2 inline-block text-2xl text-gray-600">
              Serving Cincinnati & Surrounding Areas
            </span>
          </motion.h2>

          <div className="space-y-5">
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={textVariants}
            >
              <strong className="font-semibold text-blue-600">
                IGotThePowerWasher
              </strong>{" "}
              delivers professional exterior cleaning services for both residential and commercial
              properties. As a fully licensed and insured company, we guarantee top-quality results
              with every project.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={textVariants}
            >
              With thousands of successfully transformed properties, we&apos;re committed to making
              your space our next success story. Explore our verified customer reviews to see why
              Cincinnati trusts us for their pressure washing needs.
            </motion.p>
          </div>

          <motion.div
            variants={textVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="tel:+1513570-0355"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:shadow-blue-200"
            >
              <FaPhoneAlt className="text-xl" />
              <span>(513) 570-0355</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeExterior;