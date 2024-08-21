import React, { useState, useRef, useEffect } from "react";
import "../styles/Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMovies from "../api/movies";
import useCarousel from "../carousels/carousel";

const Carousel = () => {
  
  const { movies } = useMovies();

  const [currentSlides, setCurrentSlides] = useState([]);

    useEffect(() => {
        if (movies.length > 0) {
            setCurrentSlides(movies.slice(0, 10)); // Hiển thị 10 phim đầu tiên
        }
    }, [movies]);

    const slideRef = useRef(null);
    const nextRef = useRef(null);
    const prevRef = useRef(null);
  
    // useCarousel(slideRef, nextRef, prevRef, 5000);

  return (
    <>
      <div className="carousel-container">
        <div>
          <h5>Top 10 movies to watch</h5>
        </div>
        <div className="slide">
          <div className="prevSlide">
            <button ref={prevRef}>
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-left "
                className="icon"
                size="2xl"
              />
            </button>
          </div>
          <div className="slide-carousel row" ref={slideRef}>
            {currentSlides.map((slide, index) => {
              return (
                <div className="slide carousel col" key={index}>
                  <img src={`http://192.168.1.13:5000${slide.imgBanner}`} alt="" />
                  <div className="content">
                    <span>{index+1}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="nextSlide">
            <button ref={nextRef}>
              <FontAwesomeIcon
                icon="fa-solid fa-angle-right"
                className="icon"
                size="2xl"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
