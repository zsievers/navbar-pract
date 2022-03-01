import React from "react";
import classes from "./masonry.module.scss";

const Masonry = () => {
  return (
    <div className={classes.masonry}>
      <div className={classes.item}>
        <img src={"../../services/bobcat.jpg"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/deck-design.png"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/deck-stain.png"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/fence.png"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/renos.png"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/inside-flooring.jpg"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/landscape-design.png"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/gutter.png"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/fire-pit.jpg"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/mulching.png"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/patio-walkway.jpg"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/retaining-wall.png"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/leaf-removal.png"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/painting-interior.png"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/pressure-washing.jpg"} />
      </div>
      <div className={classes.item}>
        <img src={"../../services/shrub.png"} />
      </div>
    </div>
  );
};

export default Masonry;
