import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Favorites", path: "/favorites" },
];

const mq = window.matchMedia("(max-width: 570px)");

const NavLinks = ({ toggleNavigation }) => {
  return (
    <ul className={`nav__links  ${mq.matches && "invisible"}`}>
      {navItems.map((item) => (
        <li className="nav__link" key={item.name}>
          <NavLink
            onClick={toggleNavigation}
            to={item.path}
            exact={item.exact || false}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
