import React from "react";
import styled from "styled-components";
import Skills from "../layout/Skills";
import { PageWrapper } from "../styled/Wrapper";
import { PageTitle } from "../styled/Title";
import { PageText } from "../styled/Text";

const About = ({ about, skillsList }) => {
  return (
    <AboutWrapper>
      <PageTitle>{about.title}</PageTitle>
      <PageText>{about.description}</PageText>

      <TitleWrapper>
        <h3>Skills</h3>
      </TitleWrapper>
      <Skills skillsList={skillsList} />
    </AboutWrapper>
  );
};

const AboutWrapper = styled(PageWrapper)`
  width: 40vw;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 60vw;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 0;
`;

export default About;
