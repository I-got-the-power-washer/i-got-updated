"use client";
import { useRef } from "react";

import animationData from "../../../../public/animations/loading-page.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { 
  ssr: false,
  loading: () => <div className="lottie-loading"></div>
});

const Loader = ({ onFinish }) => {
  const lottieRef = useRef();

  const handleComplete = () => {
    onFinish(); // call parent to remove loader
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center min-h-screen h-screen">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        onComplete={handleComplete}
        className="lottie-animation" // Adding className for Tailwind scaling
        style={{
          width: "100%",
          height: "100%",
          transform: "scale(3)", // Default scale
          transformOrigin: "center center",
        }}
      />
    </div>
  );
};

export default Loader;
