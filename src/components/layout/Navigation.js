import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import styled from "styled-components";

// {this.state.width>600 ? <NavLinks navLinks={navLinks} /> : <MobileNavLinks>

const Navigation = ({ navLinks }) => {
  return (
    <StyledNav>
      <Logo />
      <NavLinks navLinks={navLinks} />
    </StyledNav>
  );
};

const StyledNav = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Navigation;
