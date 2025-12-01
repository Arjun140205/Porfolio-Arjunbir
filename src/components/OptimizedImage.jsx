import React, { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  priority = false,
  sizes = '100vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Generate WebP paths
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, '.webp');
  const webpSrcMedium = src.replace(/\.(jpg|jpeg|png)$/, '-medium.webp');
  const webpSrcSmall = src.replace(/\.(jpg|jpeg|png)$/, '-small.webp');

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Blur placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse"
          style={{ filter: 'blur(20px)' }}
        />
      )}
      
      <picture>
        {/* WebP with responsive sizes */}
        <source
          type="image/webp"
          srcSet={`
            ${webpSrcSmall} 640w,
            ${webpSrcMedium} 1280w,
            ${webpSrc} 1920w
          `}
          sizes={sizes}
        />
        
        {/* Fallback to original */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            contentVisibility: 'auto',
            willChange: isLoaded ? 'auto' : 'opacity'
          }}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
