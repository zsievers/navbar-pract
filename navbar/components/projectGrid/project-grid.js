import React from "react";
import Link from "next/link";
import classes from "./project-grid.module.scss";

export default function ProjectGrid() {
  return (
    <>
      <div className={classes.container}>
        <h1>View Our Projects</h1>

        <div>
          <hr />
        </div>
        <div className={classes.grid}>
          <div className={classes.projects}>
            <a href="/project1">
              <img
                src={"./images/project1/IMG_1630.JPG"}
                className={classes.image}
              />

              <div className={classes.projectTitle}>Front Landscaping</div>
            </a>
          </div>
          <div className={classes.projects}>
            <a href="project2">
              <img
                src={"./images/project2/after4.png"}
                className={classes.image}
              />
              <div className={classes.projectTitle}>
                California Home Remodel
              </div>
            </a>
          </div>

          <div className={classes.projects}>
            <a href="/project3">
              <img
                src={"./images/project3/3after2.JPEG"}
                className={classes.image}
              />
              <div className={classes.projectTitle}>
                Complete Indoor Home Remodel
              </div>
            </a>
          </div>
          <div className={classes.projects}>
            {" "}
            <a href="/project4">
              <img
                src={"./images/project4/IMG_1591.JPG"}
                className={classes.image}
              />
              <div className={classes.projectTitle}>Backyard Landscaping</div>
            </a>
          </div>

          <div className={classes.projects}>
            <a href="/bathrooms">
              <img
                src={"./images/Bathrooms/bathroom1.JPEG"}
                className={classes.image}
              />
              <div className={classes.projectTitle}>Custom Bathrooms</div>
            </a>
          </div>
          {/* <div className={classes.projects}>
            <a href="/doors">
              <img src={"./images/doors/d1.png"} className={classes.image} />
              <div className={classes.projectTitle}>Custom Door Frames</div>
            </a>
          </div> */}
          <div className={classes.projects}>
            <a href="/grading_roofing">
              <img
                src={"./images/grading_roof/roof2.JPEG"}
                className={classes.image}
              />
              <div className={classes.projectTitle}>Grading and Roofing</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
