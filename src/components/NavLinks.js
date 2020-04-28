import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Favorites", path: "/favorites" },
];

const mq = window.matchMedia("(max-width: 570px)");

const NavLinks = ({ toggleNavigation }) => {
  const menu = navItems.map((item) => (
    <li className="nav__link" key={item.name}>
      <NavLink
        onClick={toggleNavigation}
        to={item.path}
        exact={item.exact || false}
      >
        {item.name}
      </NavLink>
    </li>
  ));
  return mq.matches ? (
    <ul className="nav__links invisible">{menu}</ul>
  ) : (
    <ul className="nav__links">{menu}</ul>
  );
};

export default NavLinks;
