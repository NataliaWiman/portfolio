import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Burger from "./Burger";
import { StyledNav } from "./NavigationStyled";

const Navigation = ({ navLinks }) => {
  return (
    <StyledNav>
      <Logo />
      <NavLinks navLinks={navLinks} />
      <Burger />
    </StyledNav>
  );
};

export default Navigation;
