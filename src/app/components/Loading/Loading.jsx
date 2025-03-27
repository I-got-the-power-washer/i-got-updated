"use client";
import { useRef, useState, useEffect } from "react";
import animationData from "../../../../public/animations/final-animation.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="w-24 h-24 bg-gray-200 rounded-full animate-pulse" />
  )
});

const Loader = ({ onFinish }) => {
  const lottieRef = useRef();
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-transparent">
      <div className="relative w-full h-full">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          onComplete={onFinish}
          style={{
            width: '150vw',
            height: '150vh',
            transform: `translate(-50%, -50%) scale(${isMobile ? 1.25 : 1.5})`,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transformOrigin: 'center center',
          }}
          className="overflow-visible"
        />
      </div>
    </div>
  );
};

export default Loader;