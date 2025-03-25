"use client";
import { useState } from "react";

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
      {/* After Image */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Before Label */}
      <div className="absolute top-2 left-2 bg-[#00C6F9] text-white text-sm px-2 py-1 rounded z-10">
        Before
      </div>

      {/* After Label */}
      <div className="absolute top-2 right-2 bg-[#00C6F9] text-white text-sm px-2 py-1 rounded z-10">
        After
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 appearance-none h-1 bg-transparent focus:outline-none"
      />

      {/* Slider Line */}
      <div
        className="absolute top-0 left-0 w-1 bg-white h-full pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      ></div>

      {/* Slider Button */}
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white text-black p-2 rounded-full shadow-md pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <span className="text-xs font-bold">↔</span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
