import React, { useRef, useState, useEffect } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/home.css";
import "../styles/Carousel.css";

import Carousel from "../component/Carousel ";
import BannerHomePage from "../component/banner-home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useMovies from "../api/movies";
import useCarousel from "../carousels/carousel";
import Thumbnail from "../component/thumnail";
function HomePage() {
  const { movies } = useMovies();
  const [list, setList] = useState([]);
  const [run, setRun] = useState(0);
  useEffect(() => {
    if (movies.length > 0) {
      setList(movies);
      setRun(1);
    }
  }, [movies]);

  // Chuyển động slide
  const slideRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  useCarousel(slideRef, nextRef, prevRef, 5000, run);

  return (
    <>
      
      <BannerHomePage />
      <Carousel />
      <div className="carousel-container">
        <div>
          <h5>Only on Streamit</h5>
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
          <div className="slide-carousel " style={{gap:"15px"}}  ref={slideRef}>
            {list.map((movie, index) => {
              return <Thumbnail key={index} movieName={movie.name} urlImg={movie.imgBanner} />;
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
      <div className="carousel-container">
        <div>
          <h5>Upcoming Movies</h5>
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
          <div className="slide-carousel " style={{gap:"15px"}}  ref={slideRef}>
            {list.map((movie, index) => {
              return <Thumbnail key={index} movieName={movie.name} urlImg={movie.imgBanner} />;
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
}

export default HomePage;
