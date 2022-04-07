import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link href="/">
          <a>
            <img
              src={"../../images/newLogo.png"}
              className={classes.header__content__logo}
            />
          </a>
        </Link>

        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link href="/about-dt" onClick={menuToggleHandler}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={menuToggleHandler}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#services" onClick={menuToggleHandler}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/" onClick={menuToggleHandler}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/freeEstimate" onClick={menuToggleHandler}>
                Free Estimate
                {/* <button onClick={classes.header__content__toggle}>
              Free Estimate
            </button> */}
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
