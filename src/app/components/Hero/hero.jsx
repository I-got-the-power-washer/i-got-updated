'use client';

import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="flex flex-col justify-center space-y-8 order-2 md:order-1"
            initial="hidden"
            animate="visible"
            variants={staggerVariants}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold text-black leading-tight"
              variants={textVariants}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c6f9] to-blue-800">
                I Got The Power
              </span>
              <br />
              <motion.span 
                className="pb-2 inline-block"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Washer
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl font-bold text-[#00c6f9] italic"
              variants={textVariants}
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              "You Say it, We Spray it"
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl text-white bg-gradient-to-r from-[#00c6f9] to-blue-600 px-8 py-4 rounded-full inline-block shadow-xl hover:shadow-2xl transition-all duration-300"
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cincinnati's #1 Pressure Washing Service
            </motion.p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="order-1 md:order-2 relative h-96 md:h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode='wait'>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full relative"
              >
                <Image
                  src="/images/Web-1-1536x1152 (1).jpg" // Update this path
                  alt="Professional pressure washing service"
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;