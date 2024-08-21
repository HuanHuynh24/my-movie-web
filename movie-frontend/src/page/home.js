import React, { useRef, useState, useEffect } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/home.css";
import "../styles/Carousel.css";

import Carousel from "../component/Carousel ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useMovies from "../api/movies";
import useCarousel from "../carousels/carousel";
import Thumbnail from "../component/thumnail";
function HomePage() {
  const { movies } = useMovies();
  const [list, setList] = useState([]);
  useEffect(() => {
    if (movies.length > 0) {
      setList(movies);
    }
  }, [movies]);

  // Chuyển động slide
  const slideRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  useCarousel(slideRef, nextRef, prevRef, 5000);

  return (
    <>
      <div className="container-fluid gx-0 slide-container">
        <div id="slide" ref={slideRef}>
          {list.slice(0, 6).map((movie, index) => {
            return (
              <div
                key={index}
                className={`item carousel`}
                style={{
                  backgroundImage: `url(http://192.168.1.13:5000${movie.imgBanner})`,
                }}
              >
                <div className="content">
                  <h3>{movie.name}</h3>
                  <p>{movie.description.substring(0, 100)}...</p>
                  <button>
                    <a href={movie.videoUrl}>Xem phim</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button className="btn btn-previous" ref={prevRef}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="btn btn-next" ref={nextRef}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        {/* <div className="overlay"></div> */}
      </div>
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
