import React, { useEffect, useRef } from 'react';
import './LazyImage.css';

const LazyImage = (props) => {
  const imgRef = useRef();
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imgRef.current.src = props.src;
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [props.src]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <img
      ref={imgRef}
      {...props}
      className={`${props.className} lazy-image ${
        isLoaded ? 'loaded' : 'loading'
      }`}
      onLoad={handleImageLoad}
    />
  );
};

export default LazyImage;
