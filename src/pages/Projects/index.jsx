import React, { useMemo, useState } from "react";
import {
  Inner,
  SectionHeader,
  Eyebrow,
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
  min-height: calc(100dvh - 80px);
`;

const PageBackdrop = styled.div`
  background: linear-gradient(
    343.07deg,
    ${({ theme }) => theme.accentMesh1} 5.71%,
    transparent 64.83%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: clamp(40px, 6vw, 72px) clamp(16px, 4vw, 32px) 80px;
`;

const FILTERS = [
  { value: "all", label: "All" },
  { value: "web app", label: "Web apps" },
  { value: "mobile app", label: "Mobile apps" },
];

const ProjectsPage = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [toggle, setToggle] = useState("all");

  const visibleProjects = useMemo(() => {
    if (toggle === "all") return projects;
    return projects.filter((p) => p.category === toggle);
  }, [toggle]);

  return (
    <Body>
      <main id="main-content">
      <PageBackdrop>
        <Inner>
          <SectionHeader>
            <Eyebrow>Portfolio</Eyebrow>
            <Title as="h1" id="projects-page-heading">Projects</Title>
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
                setOpenModal={setOpenModal}
              />
            ))}
          </CardContainer>
        </Inner>
      </PageBackdrop>
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
      </main>
    </Body>
  );
};

export default ProjectsPage;
