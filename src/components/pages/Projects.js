import React from "react";
import ProjectItem from "../layout/ProjectItem";
import { PageTitle } from "../styled/Title";
import styled from "styled-components";
import { StyledA } from "../styled/Button";

const Projects = ({ projectList, projects, socialLinks }) => {
  return (
    <ProjectsWrapper>
      <PageTitle className="visually-hidden">{projects.title}</PageTitle>
      <ProjectItem projectList={projectList} />
      <GitHubLink>
        {socialLinks[0].icon}&nbsp;&nbsp;More projects on GitHub
      </GitHubLink>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div`
  padding-top: 10vh;
  padding-bottom: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GitHubLink = styled(StyledA)`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.primaryDark};
  box-shadow: none;

  :hover {
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryAccent};
    box-shadow: none;
  }
`;

export default Projects;
