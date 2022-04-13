import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./carousel.module.scss";

function Ctest() {
  return (
    <Carousel className={classes.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/cr6.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/mhero6.PNG"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/cr5.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/mhero7.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Ctest;
