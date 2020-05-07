import React from "react";
import { bool } from "prop-types";
import { Link } from "react-router-dom";
import { NavStyled, NavList, NavItem } from "./NavLinksStyled";

const NavLinks = ({ navLinks, open, setOpen }) => {
  const nav = navLinks.map((item) => {
    return (
      <NavItem open={open} key={item.id}>
        <Link onClick={() => setOpen(!open)} to={item.path}>
          {item.title}
        </Link>
      </NavItem>
    );
  });
  return (
    <NavStyled open={open}>
      <NavList open={open}>{nav}</NavList>
    </NavStyled>
  );
};

NavLinks.propTypes = {
  open: bool.isRequired,
};

export default NavLinks;
