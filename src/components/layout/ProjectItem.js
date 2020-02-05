import React from "react";
import styled from "styled-components";
import { StyledA } from "../styled/Button";

const ProjectItem = props => {
  const { projectList } = props;
  const projects = projectList.map(item => {
    return (
      <li className="project-item" key={item.id}>
        <div className="project-item_wrapper">
          {item.img}
          <div className="project-item_content">
            <p className="project-item_type">{item.type}</p>
            <h3 className="project-item_title">{item.title}</h3>
            <p className="project-item_info">
              <b>Description: </b>
              {item.description}
            </p>
            <p className="project-item_info">
              <b>My role: </b>
              {item.role}
            </p>
            <p className="project-item_info">
              <b>Technologies used: </b>
              {item.technologies}
            </p>
            <div className="project-item_btn-wrapper">
              <StyledAEdited href="/" about="blank">
                Preview
              </StyledAEdited>
              <StyledA href="/" about="blank" primary>
                Source Code
              </StyledA>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return <ul className="projects-list">{projects}</ul>;
};

const StyledAEdited = styled(StyledA)`
  margin-right: 10px;
`;

export default ProjectItem;
