import React from "react";
import { PageWrapper } from "../styled/Wrapper";
import { PageTitle } from "../styled/Title";
import { PageText } from "../styled/Text";
import { StyledA } from "../styled/Button";
import Blob from "../layout/Blob";

const Home = ({ home }) => {
  return (
    <PageWrapper>
      <Blob />
      <PageTitle>{home.greeting}</PageTitle>
      <PageText>{home.description}</PageText>
      <StyledA primary href="/projects">
        View Projects
      </StyledA>
    </PageWrapper>
  );
};

export default Home;
