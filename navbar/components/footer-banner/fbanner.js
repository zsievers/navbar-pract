import React from "react";
import Link from "next/link";
import classes from "./fbanner.module.scss";

function Fbanner() {
  return (
    <div className={classes.container}>
      <h3>Have a project in mind?</h3>
      <div className={classes.text}>
        <Link href="/freeEstimate">Click To Connect!</Link>
      </div>
    </div>
  );
}

export default Fbanner;
