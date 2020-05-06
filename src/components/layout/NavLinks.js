import React from "react";
import { Link } from "react-router-dom";
import { NavStyled, NavList, NavItem } from "./NavLinksStyled";

const NavLinks = (props) => {
  const { navLinks } = props;
  const nav = navLinks.map((item) => {
    return (
      <NavItem key={item.id}>
        <Link to={item.path}>{item.title}</Link>
      </NavItem>
    );
  });
  return (
    <NavStyled>
      <NavList>{nav}</NavList>
    </NavStyled>
  );
};

export default NavLinks;
