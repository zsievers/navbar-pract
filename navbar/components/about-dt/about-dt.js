import { meet } from "../../bin/config.js";
import Link from "next/link";
import classes from "./about-dt.module.scss";

const AboutUs = () => {
  return (
    <div className={classes.meet_us}>
      <div className={classes.meet_us_section}>
        <div className={classes.meet_us_wrapper}>
          <p className={classes.meet_us_content}>{meet.paragraphOne}</p>
          <p className={classes.meet_us_content}>{meet.paragraphTwo}</p>
          <p className={classes.meet_us_content}>{meet.paragraphThree}</p>
        </div>
        <div className="headshot">
          <img
            src={"../../images/bobcat.jpg"}
            className={classes.headshot_image}
          />
          <Link href="/freeEstimate">
            <button className={classes.meet_us_button}>
              REACH OUT AND SAY HI
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
