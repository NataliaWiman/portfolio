import React from "react";
import Mailto from "react-protected-mailto";
import { PageWrapper } from "../styled/Wrapper";
import { PageTitle } from "../styled/Title";
import { PageText } from "../styled/Text";
import { StyledButton } from "../styled/Button";

const Contact = ({ contact }) => {
  return (
    <PageWrapper>
      <PageTitle>{contact.title}</PageTitle>
      <PageText>{contact.description}</PageText>

      <StyledButton>
        <Mailto email="natalia.wiman@gmail.com" />
      </StyledButton>
    </PageWrapper>
  );
};

export default Contact;
