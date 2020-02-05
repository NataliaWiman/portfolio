import React from "react";
import styled from "styled-components";
import Skills from "../layout/Skills";
import { PageWrapper } from "../styled/Wrapper";
import { PageTitle } from "../styled/Title";
import { PageText } from "../styled/Text";

const About = ({ about, skillsList }) => {
  return (
    <PageWrapper>
      <PageTitle>{about.title}</PageTitle>
      <PageText>{about.description}</PageText>

      <TitleWrapper>
        <h3>Skills</h3>
      </TitleWrapper>
      <Skills skillsList={skillsList} />
    </PageWrapper>
  );
};

const TitleWrapper = styled.div`
  margin-bottom: 3vmin;
`;

export default About;
