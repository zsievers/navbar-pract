import React from "react";
import Link from "next/link";
import classes from "./services.module.scss";
import Section from "../section";

const Services = () => {
  return (
    <Section linkID={"services"}>
      <div className={classes.services}>
        <div className={classes.item}>
          <Link href="/projects">
            <a>
              <img src={"../../images/bobcat.jpg"} />
            </a>
          </Link>
          <h1>Bobcat Services</h1>
        </div>
        <div className={classes.item}>
          <img src={"../../images/deck-design.png"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/deck-stain.png"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/fence.png"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/renos.png"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/inside-flooring.jpg"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/landscape-design.png"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/gutter.png"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/fire-pit.jpg"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/mulching.png"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/patio-walkway.jpg"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/retaining-wall.png"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/leaf-removal.png"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/painting-interior.png"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/pressure-washing.jpg"} />
        </div>
        <div className={classes.item}>
          <img src={"../../images/shrub.png"} />
        </div>
      </div>
    </Section>
  );
};

export default Services;
