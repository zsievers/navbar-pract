import React from "react";
import classes from "./testimonial.module.scss";

function Testimonial() {
  return (
    <div className={classes.container}>
      <figure className={classes.snip1533}>
        <figcaption>
          <blockquote>
            <p>
              Dynamic Trade Inc, came out to my house in California and did an
              amazing job on my flooring. They demo'd the impossible glued down
              existing floor and replaced it with a beautiful laminate flooring.
              Their work was done professionally and on time. I highly recommend
              Dynamic Trade Inc to anyone who wants a high quality construction
              job done at a reasonable price.
            </p>
          </blockquote>
          <h3>Chris Watkins</h3>
          <h4>Professionalism, Quality, Punctuality, Value, Responsiveness</h4>
        </figcaption>
      </figure>
      <figure className={classes.snip1533}>
        <figcaption>
          <blockquote>
            <p>
              We have contracted Dynamic Trades for multiple projects,
              landscape, paint, kitchen remodel, flooring, and basement remodel
              so far. We will contract for more since the work is consistently
              professional quality at a great price.
            </p>
          </blockquote>
          <h3>Alana Kat</h3>
          <h4>Professionalism, Quality, Value</h4>
        </figcaption>
      </figure>
      <figure className={classes.snip1533}>
        <figcaption>
          <blockquote>
            <p>
              The only skills I have the patience to learn are those that have
              no real application in life.{" "}
            </p>
          </blockquote>
          <h3>Ingredia Nutrisha</h3>
          <h4>Twitter</h4>
        </figcaption>
      </figure>
      <figure className={classes.snip1533}>
        <figcaption>
          <blockquote>
            <p>
              at was unforeseen, they completely explained everything, told me
              about the additional costs and a few different ways that it could
              be handled. We were so pleased that we have our patio remodel
              scheduled in about six weeks. I cannot recommend highly enough!
            </p>
          </blockquote>
          <h3>Wisteria Ravenclaw</h3>
          <h4>Google Inc.</h4>
        </figcaption>
      </figure>
    </div>
  );
}

export default Testimonial;
