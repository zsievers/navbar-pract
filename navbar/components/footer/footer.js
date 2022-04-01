import React from "react";
import Link from "next/link";
import classes from "./footer.module.scss";
// import { MdEmail, MdOutlineFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section className={classes.footer}>
        {/* <section className={classes.footer_logo}>
          <img
            src={"../../images/newLogo.png"}
            className={classes.footer_logo_img}
          />
        </section> */}
        <section className={classes.footer_info}>
          <ul className={classes.footer_info_links}>
            <li>
              <Link href="/about-dt">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/#services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/freeEstimate">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/freeEstimate">
                <a>Free Estimate</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
          </ul>
        </section>
        <hr className={classes.footer_seperator} />
        {/* <section className={classes.footer_social_media}>
          <Link href="/">
            <a>
              <MdEmail className={classes.footer_social_media_links} />
            </a>
          </Link>
          <Link href="/">
            <a>
              <MdOutlineFacebook
                className={classes.footer_social_media_links}
              />
            </a>
          </Link>
        </section> */}
        <section className={classes.cr}>
          <p>© 2022 Dynamic Trade Inc. | All Rights Reserved.</p>
          <Link href="/">
            <a>
              <p>SIEVERS DESIGNS</p>
            </a>
          </Link>
        </section>
      </section>
    </>
  );
};

export default Footer;
