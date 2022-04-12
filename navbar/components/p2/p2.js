import React from "react";
import classes from "./p2.module.scss";

export default function Project2Grid() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.projects}>
            <a href="/projects/project-1">
              <img
                src={"../../images/project2/after3.png"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project2/before3.png"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-2">
              <img
                src={"../../images/project2/after4.png"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project2/before4.png"}
                className={classes.image}
              />
            </a>
          </div>

          <div className={classes.projects}>
            <a href="/projects/project-3">
              <img
                src={"../../images/project2/after5.png"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project2/before5.png"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project2/after6.png"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project2/before6.png"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project2/after7.png"}
                className={classes.image}
              />
            </a>
          </div>
          <div className={classes.projects}>
            <a href="/projects/project-4">
              <img
                src={"../../images/project2/before7.png"}
                className={classes.image}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
