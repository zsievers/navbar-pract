import { meet } from "../../bin/config.js";
import Link from "next/link";
import classes from "./about-dt.module.scss";

const AboutUs = () => {
  return (
    <div className={classes.container}>
      <h1>Why We Started</h1>
      <hr />
      <div className={classes.section}>
        <div className={classes.text}>
          <p className={classes.meet_us_content}>{meet.paragraphTwo}</p>
          {/* <p className={classes.meet_us_content}>{meet.paragraphOne}</p> */}
          <p className={classes.meet_us_content}>{meet.paragraphThree}</p>
        </div>

        <div className={classes.heroImg}>
          <img
            src={"../../images/hero2.jpg"}
            className={classes.headshot_image}
          />
          <Link href="/freeEstimate">
            <button className={classes.meet_us_button}>Click To Connect</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
