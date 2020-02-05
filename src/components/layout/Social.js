import React from "react";
import styled from "styled-components";

const Social = props => {
  const { socialLinks } = props;
  const social = socialLinks.map(item => {
    return (
      <ListItem key={item.id}>
        <StyledLink href={item.path} title={item.title} target="_blank">
          {item.icon}
        </StyledLink>
      </ListItem>
    );
  });
  return <List>{social}</List>;
};

const List = styled.ul`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.li`
  padding: 0 5px;
`;

const StyledLink = styled.a`
  font-size: 1.8em;
  color: #303030;

  &:hover {
    color: #febb47;
    transition: ease-in-out 0.3s;
  }
`;

export default Social;
