import React from "react";
import classes from "./testimonials.module.scss";

function testimonials() {
  return (
    <div className="card col-md-6 mt-2">
      <div
        id={classes.carouselExampleControls}
        className={(classes.carousel, classes.slide)}
        data-ride={classes.carousel}
        data-interval="100000"
      >
        <div className={`classes.w-100, classes.carousel-inner`} role="listbox">
          <div className={`classes.carousel-item, classes.active`}>
            <div className={classes.bg}></div>
            <div className={classes.carousel_caption}>
              <div className={classes.row}>
                <div className="col-sm-3">
                  <img
                    src="https://gravatar.com/avatar/b35505a8799ee6ec3cba72ac4c5185be?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png"
                    alt=""
                    className="rounded-circle"
                  />
                </div>
                <div className={`classes.col-sm-9`}>
                  <h3>Gives me hope</h3>
                  <small>
                    Well incremented. Comes with recommended workout. I'm using
                    it to help with bladder leakage issues that I've been
                    experiencing since a recent vasectomy.
                  </small>
                  <small className="smallest mute">- willi</small>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="bg"></div>
            <div className="carousel-caption">
              <div className={classes.row}>
                <div className="col-sm-3">
                  <img
                    src="https://gravatar.com/avatar/b35505a8799ee6ec3cba72ac4c5185be?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png"
                    alt=""
                    className="rounded-circle"
                  />
                </div>
                <div className="col-sm-9">
                  <h3>You will love it.</h3>
                  <small>
                    Great product. It came in the mail packaged very well. The
                    package the product comes in is very nice. Product itself,
                    has worked very well.
                  </small>
                  <small className="smallest mute">- Amazon Customer</small>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="bg"></div>
            <div className="carousel-caption">
              <div className="row">
                <div className="col-sm-3">
                  <img
                    src="https://gravatar.com/avatar/b35505a8799ee6ec3cba72ac4c5185be?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png"
                    alt=""
                    className="rounded-circle"
                  />
                </div>
                <div className="col-sm-9">
                  <h3>Velvet pouch!</h3>
                  <small>
                    Just as describe, different weights gives you several ways
                    to exercise. I especially like the velvet pouch so I can
                    place in my drawer.
                  </small>
                  <small className="smallest mute">- Amazon Customer</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel_control_next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default testimonials;
