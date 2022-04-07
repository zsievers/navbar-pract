import React from "react";
import classes from "./info.module.scss";

function MainInfo() {
  return (
    <div className={classes.container}>
      <h1>Dynamic Trades</h1>
      <h3>The All In One Contractors</h3>
      <p>
        Proudly serving Knoxville, Tennessee and surrounding areas. Dynamic
        Trade Inc is your one stop shop for all of your landscaping, renovations
        and home repair needs. From complete backyard remodels and walkways to
        adding backsplash and an island to your kitchen, Dynamic Trade Inc
        provides it all.
      </p>
    </div>
  );
}

export default MainInfo;
