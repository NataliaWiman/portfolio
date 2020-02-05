import React from "react";
import Social from "./Social";
import FloatingQuote from "./FloatingQuote";
import styled from "styled-components";

const Footer = ({ socialLinks }) => {
  return (
    <StyledFooter>
      <Credit>Natalia Wiman © 2020</Credit>
      <Social socialLinks={socialLinks} />
      <FloatingQuote />
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  min-height: 10vh;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #f6f6f6;
`;

const Credit = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 0.8em;
  letter-spacing: 0;
  color: #303030;
`;

export default Footer;
