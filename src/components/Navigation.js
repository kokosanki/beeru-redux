import React from "react";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

const toggleNavigation = () => {
  document.querySelector(".hamburger__1").classList.toggle("move-1");
  document.querySelector(".hamburger__2").classList.toggle("move-2");
  document.querySelector(".hamburger__3").classList.toggle("move-3");
  document.querySelector(".nav__links").classList.toggle("invisible");
  document.querySelector("main").classList.toggle("invisible");
};
const mq = window.matchMedia("(max-width: 570px)");

const Navigation = () =>
  (mq.matches && (
    <div className="nav">
      <div className="nav__panel">
        <Logo toggleNavigation={toggleNavigation} />
        <Hamburger toggleNavigation={toggleNavigation} />
      </div>
      <NavLinks toggleNavigation={toggleNavigation} className="nav__links" />
    </div>
  )) || (
    <div className="nav">
      <div className="nav__panel">
        <Logo toggleNavigation={toggleNavigation} />
        <NavLinks className="nav__links" />
      </div>
    </div>
  );

export default Navigation;
