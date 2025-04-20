import React, { useEffect, useRef } from "react";
import "./LazyImage.css"; // Import CSS for skeleton styling

const LazyImage = (props) => {
  const imgRef = useRef();
  const [isLoaded, setIsLoaded] = React.useState(false); // Track if image is loaded

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imgRef.current.src = props.src; // Set src when image is in viewport
          observer.disconnect(); // Stop observing once loaded
        }
      },
      { rootMargin: "100px" } // Load 100px before entering viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [props.src]);

  // Set isLoaded to true when the image finishes loading
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <img
      ref={imgRef}
      {...props} // Spread all props to the img element
      className={`${props.className} lazy-image ${isLoaded ? "loaded" : "loading"}`} // Apply loading or loaded class
      onLoad={handleImageLoad} // Trigger when image loads
    />
  );
};

export default LazyImage;

// function MyComponent() {
//   return (
//     <div>
//       <img src="/images/hero.jpg" alt="Hero" />
//       <LazyImage src="/images/offscreen1.jpg" alt="Offscreen 1" width="800" height="600" />
//       <LazyImage src="/images/offscreen2.jpg" alt="Offscreen 2" width="800" height="600" />
//       <img src="/images/hero.jpg" alt="Hero" />
//       <LazyImage
//         src="/images/offscreen1.jpg"
//         alt="Offscreen 1"
//         width="800"
//         height="600"
//         className="my-image"
//         style={{ border: '1px solid black' }}
//       />
//       <LazyImage
//         src="/images/offscreen2.jpg"
//         alt="Offscreen 2"
//         width="800"
//         height="600"
//         className="my-image"
//         style={{ border: '1px solid black' }}
//       />
//     </div>
//   );
// }
