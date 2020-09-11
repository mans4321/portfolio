import React from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import ReactLogo from "../react-logo/react-logo";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage}) => {
  const { goto } = fullpage.navigation;
  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
          <ReactLogo />
          <div>
            <h1>
              <span>Mansour</span>
              <span>Alzahrani</span>
            </h1>
            <h2>Software Developer</h2>
          </div>
        </div>
        <nav>
          <Link className={goto === "" ? "selected" : null} href="/">
            About
          </Link>
          <Link
            className={goto === "portfolio" ? "selected" : null}
            href="/portfolio"
          >
                  Portfolio
     
          </Link>
          <Link
            className={goto === "contact" ? "selected" : null}
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className={goto === "resume" ? "selected" : null}
            href="/resume"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
