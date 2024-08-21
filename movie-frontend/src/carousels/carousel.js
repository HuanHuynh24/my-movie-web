import { useEffect, useRef } from 'react';

const useCarousel = (slideRef, nextRef, prevRef, autoplayTime = 5000) => {
  const autoplayRef = useRef();

  useEffect(() => {
    const slide = slideRef.current;
    const next = nextRef.current;
    const prev = prevRef.current;

    const moveToNextSlide = () => {
      let items = slide.querySelectorAll(".carousel");
      slide.appendChild(items[0]);
      resetAutoplay();
    };

    const moveToPrevSlide = () => {
      let items = slide.querySelectorAll(".carousel");
      slide.prepend(items[items.length - 1]);
      resetAutoplay();
    };

    const resetAutoplay = () => {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        moveToNextSlide();
      }, autoplayTime);
    };

    next.addEventListener("click", moveToNextSlide);
    prev.addEventListener("click", moveToPrevSlide);

    autoplayRef.current = setInterval(() => {
      moveToNextSlide();
    }, autoplayTime);

    // Clean up event listeners on component unmount
    return () => {
      next.removeEventListener("click", moveToNextSlide);
      prev.removeEventListener("click", moveToPrevSlide);
      clearInterval(autoplayRef.current);
    };
  }, [autoplayTime]); // Chỉ kiểm tra autoplayTime
};

export default useCarousel;
