"use client";
import { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerHeight, setContainerHeight] = useState(400); // Reasonable default height
  const containerRef = useRef(null);
  const afterImgRef = useRef(null);
  const beforeImgRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const calculateHeight = () => {
    const container = containerRef.current;
    const img = afterImgRef.current?.complete ? afterImgRef.current : beforeImgRef.current;
    
    if (container && img?.naturalWidth > 0) {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      const containerWidth = container.offsetWidth;
      const newHeight = containerWidth / aspectRatio;
      
      // Prevent infinite re-renders with threshold check
      if (Math.abs(containerHeight - newHeight) > 1) {
        setContainerHeight(newHeight);
      }
    }
  };

  // Initialize resize observer and calculate initial height
  useEffect(() => {
    calculateHeight();
    
    resizeObserverRef.current = new ResizeObserver(() => {
      calculateHeight();
    });

    if (containerRef.current) {
      resizeObserverRef.current.observe(containerRef.current);
    }

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, []);

  // Handle image loads for both images
  const handleImageLoad = () => {
    calculateHeight();
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full rounded-lg shadow-lg bg-gray-100 transition-all duration-300"
      style={{ height: `${containerHeight}px` }}
    >
      {/* After Image */}
      <img
        ref={afterImgRef}
        src={afterImage}
        alt="After transformation"
        className="absolute inset-0 w-full h-full object-cover"
        onLoad={handleImageLoad}
        onError={(e) => {
          console.error('After image failed to load');
          e.target.style.display = 'none';
        }}
      />

      {/* Before Image Container */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          ref={beforeImgRef}
          src={beforeImage}
          alt="Before transformation"
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={handleImageLoad}
          onError={(e) => {
            console.error('Before image failed to load');
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-2 left-2 bg-[#00C6F9] text-white text-xs px-2 py-1 rounded z-10">
        Before
      </div>
      <div className="absolute top-2 right-2 bg-[#00C6F9] text-white text-xs px-2 py-1 rounded z-10">
        After
      </div>

      {/* Slider Controls */}
      <div className="absolute inset-0 z-20">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute top-1/2 left-0 w-full h-full opacity-0 cursor-ew-resize"
        />
        <div
          className="absolute top-0 left-0 w-1 bg-white h-full pointer-events-none"
          style={{ 
            left: `${sliderPosition}%`,
            transform: 'translateX(-50%)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
        />
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2
                     bg-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center
                     pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <span className="text-gray-700 text-lg select-none">↔</span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;