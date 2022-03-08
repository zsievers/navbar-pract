import React from "react";
import classes from "./hero.module.scss";

function hero() {
  return (
    <div className={classes.section}>
      <h1>
        Take Control
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
