import React from "react";
import classes from "./p3.module.scss";

export default function Project3Grid() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.projects}>
            <a href="/projects/project-2">
              <img
                src={"../../images/project3/3after.JPEG"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project3/3before.JPG"}
                className={classes.image}
              />
            </a>
          </div>

          <div className={classes.projects}>
            <a href="/projects/project-1">
              <img
                src={"../../images/project3/2after.PNG"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project3/2before.png"}
                className={classes.image}
              />
            </a>
          </div>

          <div className={classes.projects}>
            <a href="/projects/project-3">
              <img
                src={"../../images/project3/4after.PNG"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project3/4before.png"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project3/5after.JPG"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project3/5before.JPEG"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project3/6after.PNG"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project3/6before.png"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project3/7after2.JPEG"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project3/7before.JPG"}
                className={classes.image}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
