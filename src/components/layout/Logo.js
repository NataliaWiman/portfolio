import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { LogoStyled, LogoImage } from "./LogoStyled";

const Logo = () => {
  return (
    <Link to="/">
      <LogoStyled>
        <LogoImage src={logo} alt="logo"></LogoImage>
      </LogoStyled>
    </Link>
  );
};

export default Logo;
