import React from "react";
import { StyledA } from "../styled/Button";
import * as Project from "./ProjectsStyled";

const ProjectItem = (props) => {
  const { projectList } = props;
  const projects = projectList.map((item) => {
    return (
      <Project.Item key={item.id}>
        <Project.ItemWrapper>
          {item.img}
          <Project.ItemContent>
            <Project.ItemType>{item.type}</Project.ItemType>
            <Project.ItemTitle>{item.title}</Project.ItemTitle>
            <Project.ItemInfo>
              <b>Description: </b>
              {item.description}
            </Project.ItemInfo>
            <Project.ItemInfo>
              <b>My role: </b>
              {item.role}
            </Project.ItemInfo>
            <Project.ItemInfo>
              <b>Technologies used: </b>
              {item.technologies}
            </Project.ItemInfo>
            <div className="project-item_btn-wrapper">
              <Project.StyledAEdited href="/" about="blank">
                Preview
              </Project.StyledAEdited>
              <StyledA href="/" about="blank" primary>
                Source Code
              </StyledA>
            </div>
          </Project.ItemContent>
        </Project.ItemWrapper>
      </Project.Item>
    );
  });
  return <Project.List>{projects}</Project.List>;
};

export default ProjectItem;
