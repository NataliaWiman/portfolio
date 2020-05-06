import React from "react";
import Social from "./Social";
import { FooterStyled, FooterCredit } from "./FooterStyled";

const Footer = ({ socialLinks }) => {
  return (
    <FooterStyled>
      <FooterCredit>Natalia Wiman © 2020</FooterCredit>
      <Social socialLinks={socialLinks} />
    </FooterStyled>
  );
};

export default Footer;
