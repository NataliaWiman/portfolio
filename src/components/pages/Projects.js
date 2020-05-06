import React from "react";
import ProjectItem from "../layout/ProjectItem";
import { PageTitle } from "../styled/Title";
import styled from "styled-components";

const Projects = ({ projectList, projects }) => {
  return (
    <ProjectsWrapper>
      <PageTitle className="visually-hidden">{projects.title}</PageTitle>
      <ProjectItem projectList={projectList} />
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div`
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Projects;
