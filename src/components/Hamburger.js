import React from "react";

const Hamburger = ({toggleNavigation}) => {
  return (
    <div onClick={toggleNavigation} className="hamburger">
      <div className="hamburger__1" />
      <div className="hamburger__2" />
      <div className="hamburger__3" />
    </div>
  );
};

export default Hamburger;
