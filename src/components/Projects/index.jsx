import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  ViewAll,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const navigate = useNavigate();

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              Web App's
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              Web App's
            </ToggleButton>
          )}
          <Divider />
          {toggle === "mobile app" ? (
            <ToggleButton
              active
              value="mobile app"
              onClick={() => setToggle("mobile app")}
            >
              Mobile App's
            </ToggleButton>
          ) : (
            <ToggleButton
              value="mobile app"
              onClick={() => setToggle("mobile app")}
            >
              Mobile App's
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects
              .slice(0, 5)
              .map((project) => (
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
          {projects
            .slice(0, 5)
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
        <ViewAll
          onClick={() => {
            navigate("portfolio/projects");
          }}
        >
          View All
        </ViewAll>
      </Wrapper>
    </Container>
  );
};

export default Projects;
