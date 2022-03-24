import React from "react";
import classes from "./hero.module.scss";

function hero() {
  return (
    <div className={classes.section}>
      <h1>
        knoxville's first choice for all your home remodel needs
        <div>customer support</div>
      </h1>
      <p>Lorem10</p>
      <div className={classes.cta}>
        <button>Free Estimate</button>
        <button>Live Demo</button>
      </div>
    </div>
  );
}

export default hero;
