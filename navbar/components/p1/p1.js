import React from "react";
import classes from "./p1.module.scss";

export default function Project1Grid() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.projects}>
            <a href="/projects/project-1">
              <img
                src={"../../images/project1/IMG_1630.JPG"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-2">
              <img
                src={"../../images/project1/IMG_1629.JPG"}
                className={classes.image}
              />
            </a>
          </div>

          <div className={classes.projects}>
            <a href="/projects/project-3">
              <img
                src={"../../images/project1/IMG_1069.JPG"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project1/IMG_1068.JPG"}
                className={classes.image}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
