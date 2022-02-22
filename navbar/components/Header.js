import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>navbar</h2>

        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="/">Page One</a>
            </li>
            <li>
              <a href="/">Page Two</a>
            </li>
            <li>
              <a href="/">Page Three</a>
            </li>
          </ul>
          <button>Free Estimate</button>
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