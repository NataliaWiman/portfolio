import React from "react";
import styled from "styled-components";

const Skills = props => {
  const { skillsList } = props;
  const skills = skillsList.map(item => {
    return (
      <ListItem>
        <Icon>{item.icon}</Icon>
        {item.title}
      </ListItem>
    );
  });
  return <SkillsList>{skills}</SkillsList>;
};

const SkillsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.li`
  margin-right: 3vmin;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    margin-right: none;
  }
`;

const Icon = styled.span`
  font-size: 2em;
  color: #febb47;
`;

export default Skills;
