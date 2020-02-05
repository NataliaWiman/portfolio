import React from "react";
import { Link } from "react-router-dom";

const NavLinks = props => {
  const { navLinks } = props;
  const nav = navLinks.map(item => {
    return (
      <li key={item.id}>
        <Link to={item.path}>{item.title}</Link>
      </li>
    );
  });
  return (
    <nav className="nav">
      <ul className="nav-links">{nav}</ul>
    </nav>
  );
};

export default NavLinks;
