import React from "react";
import { PageWrapper } from "../styled/Wrapper";
import { PageTitle } from "../styled/Title";
import { PageText } from "../styled/Text";
import { StyledA } from "../styled/Button";

const CV = ({ cv }) => {
  return (
    <PageWrapper>
      <PageTitle>{cv.title}</PageTitle>
      <PageText>{cv.description}</PageText>
      <StyledA>{cv.dl}</StyledA>
    </PageWrapper>
  );
};

export default CV;
