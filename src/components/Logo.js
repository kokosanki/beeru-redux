import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  const handleClick = () => {
    const mq = window.matchMedia("(max-width: 570px)");
    if (mq.matches) {
      document.querySelector(".nav__links").classList.add("invisible");
      document.querySelector("main").classList.remove("invisible");
      document.querySelector(".hamburger__1").classList.remove("move-1");
      document.querySelector(".hamburger__2").classList.remove("move-2");
      document.querySelector(".hamburger__3").classList.remove("move-3");
    }
  };
  return (
    <NavLink to={"/"} exact>
      <h1 onClick={handleClick} className="nav__logo">
        BeeruX
      </h1>
    </NavLink>
  );
};

export default Logo;
