import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Inner,
  SectionHeader,
  Eyebrow,
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

const FILTERS = [
  { value: "all", label: "All" },
  { value: "web app", label: "Web apps" },
  { value: "mobile app", label: "Mobile apps" },
];

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const navigate = useNavigate();

  const visibleProjects = useMemo(() => {
    const list =
      toggle === "all"
        ? projects
        : projects.filter((p) => p.category === toggle);
    return list.slice(0, 5);
  }, [toggle]);

  return (
    <Container id="projects" aria-labelledby="projects-heading">
      <Inner>
        <SectionHeader>
          <Eyebrow>Portfolio</Eyebrow>
          <Title id="projects-heading">Projects</Title>
          <Desc>
            Shipped web and mobile work—from marketing sites and dashboards to
            Play Store apps—with links to live demos and source where available.
          </Desc>
        </SectionHeader>
        <ToggleButtonGroup role="tablist" aria-label="Filter projects by type">
          {FILTERS.map((f, i) => (
            <React.Fragment key={f.value}>
              {i > 0 && <Divider aria-hidden />}
              <ToggleButton
                type="button"
                role="tab"
                aria-selected={toggle === f.value}
                $active={toggle === f.value}
                onClick={() => setToggle(f.value)}
              >
                {f.label}
              </ToggleButton>
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
        <ViewAll
          type="button"
          onClick={() => navigate("portfolio/projects")}
        >
          View all projects
        </ViewAll>
      </Inner>
    </Container>
  );
};

export default Projects;
