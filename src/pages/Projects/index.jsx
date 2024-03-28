import React from "react";
import { useState } from "react";
import {
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "../../components/Projects/ProjectsStyle.js";
import ProjectCard from "../../components/Cards/ProjectCards.jsx";
import ProjectDetails from "../../components/ProjectDetails/index.jsx";
import { projects } from "../../data/constants.js";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  height: calc(100dvh - 80px);
`;

const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Projects = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [toggle, setToggle] = useState("all");

  return (
    <Body>
      <Container>
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
                WEB APP'S
              </ToggleButton>
            ) : (
              <ToggleButton
                value="web app"
                onClick={() => setToggle("web app")}
              >
                WEB APP'S
              </ToggleButton>
            )}
            <Divider />
            {toggle === "flutter app" ? (
              <ToggleButton
                active
                value="flutter app"
                onClick={() => setToggle("flutter app")}
              >
                FLUTTER APP'S
              </ToggleButton>
            ) : (
              <ToggleButton
                value="flutter app"
                onClick={() => setToggle("flutter app")}
              >
                FLUTTER APP'S
              </ToggleButton>
            )}
          </ToggleButtonGroup>
          <CardContainer>
            {toggle === "all" &&
              projects.map((project) => (
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
            {projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))}
          </CardContainer>
        </Wrapper>
      </Container>
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </Body>
  );
};

export default Projects;
