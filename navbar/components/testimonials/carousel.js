import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./carousel.module.scss";

function Ctest() {
  return (
    <Carousel className={classes.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/cr2.jpg"
          // style={{ height: "500px" }}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/project3/5after.JPG"
          // style={{ height: "500px" }}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/cr1.jpg"
          // style={{ height: "500px" }}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Ctest;
