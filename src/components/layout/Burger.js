import React from "react";
import { bool, func } from "prop-types";
import { BurgerStyled, BurgerWrapper } from "./BurgerStyled";

const Burger = ({ open, setOpen }) => {
  return (
    <BurgerWrapper>
      <BurgerStyled open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </BurgerStyled>
    </BurgerWrapper>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
