import React from "react";
import Social from "./Social";
import { FooterStyled } from "./FooterStyled";

const Footer = ({ socialLinks }) => {
  return (
    <FooterStyled>
      <Social socialLinks={socialLinks} />
    </FooterStyled>
  );
};

export default Footer;
