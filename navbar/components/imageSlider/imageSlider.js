import React, { useState } from "react";
import { SliderData } from "./sliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import classes from "./imageSlider.module.scss";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={classes.slider}>
      <FaArrowAltCircleLeft className={classes.leftArrow} onClick={prevSlide} />
      <FaArrowAltCircleRight
        className={classes.rightArrow}
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? classes.slideActive : classes.slide}
            key={index}
          >
            {index === current && (
              <h1
                src={slide.image}
                className={classes.image}
                alt="travel image"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
