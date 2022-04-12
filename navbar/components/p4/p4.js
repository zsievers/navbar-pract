import React from "react";
import classes from "./p4.module.scss";

export default function Project4Grid() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.projects}>
            <a href="/projects/project-1">
              <img
                src={"../../images/project4/IMG_1590.JPG"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project4/IMG_1591.JPG"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-2">
              <img
                src={"../../images/project4/IMG_1524.JPG"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project4/IMG_1553.JPG"}
                className={classes.image}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
