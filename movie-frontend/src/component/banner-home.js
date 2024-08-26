import React, { useRef, useState, useEffect } from "react";
import useMovies from "../api/movies";
import "../styles/banner-home.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const BannerHomePage = () => {
  const { movies } = useMovies();
  const [listMovie, setListMovie] = useState([]);
  useEffect(() => {
    if (movies.length > 0) {
      setListMovie(movies);
    }
  }, [movies]);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return(
    <div className="slider-container slide-banner">
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} className="slide-banner-1">
        {
          listMovie.slice(0, 6).map((movie, index) => {
            return (
              <div key={index}>
                <div className="content">
                  <h2>{movie.name}</h2>
                  <p>{movie.description.slice(0, 100)}...</p>
                  <button>Xem ngay</button>
                </div>
                <img src={`https://phimhay2402.vercel.app/${movie.imgBanner}`} alt="thumbnail" />
              </div>
            );
          })
        }
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        className="slide-banner-2"
      >
        {
          listMovie.slice(0, 6).map((movie, index) => {
            return (
              <div key={index}>
                <h3>{movie.name}</h3>
                <img src={`https://phimhay2402.vercel.app/${movie.imgBanner}`} alt="thumbnail" />
              </div>
            );
          })
        }
      </Slider>
    </div>
  )
 
};

export default BannerHomePage;
