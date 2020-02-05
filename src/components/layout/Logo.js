import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <Link to="/">
      <LogoWrapper>
        <LogoImage src={logo} alt="logo"></LogoImage>
      </LogoWrapper>
    </Link>
  );
};

const LogoWrapper = styled.div`
  width: 50px;
  display: flex;
  cursor: pointer;
`;

const LogoImage = styled.img`
  height: 50px;
`;

export default Logo;
