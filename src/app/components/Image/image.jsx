'use client';

import Image from 'next/image';
import { useState } from 'react';

const ResponsiveImage = ({ src, alt = 'Description', priority = false, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg" />
      )}

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
        className={`object-contain rounded-lg transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoadingComplete={() => setIsLoaded(true)}
        style={{
          objectPosition: 'center center'
        }}
      />
    </div>
  );
};

export default ResponsiveImage;