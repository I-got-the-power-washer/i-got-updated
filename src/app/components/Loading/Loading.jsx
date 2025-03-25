'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Loader = ({ onLoadComplete }) => {
  const [animationData, setAnimationData] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    fetch('/animations/Droplit.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  const handleAnimationComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onLoadComplete();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full flex items-center justify-center">
            {animationData ? (
              <Lottie
                animationData={animationData}
                loop={false}
                onComplete={handleAnimationComplete}
                rendererSettings={{
                  preserveAspectRatio: 'xMidYMid meet', // 🔥 Ensures animation fits inside without cutting
                  transparent: true
                }}
                style={{
                  width: '100vw',   // Full width
                  height: '100vh',  // Full height
                  objectFit: 'contain', // 🔥 Prevents cutting
                  background: 'transparent'
                }}
              />
            ) : (
              <div className="w-full h-full bg-transparent animate-pulse" />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
