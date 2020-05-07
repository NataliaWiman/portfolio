import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Burger from "./Burger";
import { StyledNav } from "./NavigationStyled";

function Navigation({ navLinks }) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <StyledNav ref={node}>
      <Logo />
      <NavLinks open={open} setOpen={setOpen} navLinks={navLinks} />
      <Burger open={open} setOpen={setOpen} />
    </StyledNav>
  );
}

export default Navigation;
