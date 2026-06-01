import React from "react";
import HeroSection from "../../components/HeroSection/index.jsx";
import { useState } from "react";
import Skills from "../../components/Skills/index.jsx";
import Projects from "../../components/Projects/index.jsx";
import Contact from "../../components/Contact/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Experience from "../../components/Experience/index.jsx";
import Education from "../../components/Education/index.jsx";
import TimeLineData from "../../components/TimeLine/index.jsx";
import ProjectDetails from "../../components/ProjectDetails/index.jsx";
import BlogDetails from "../../components/BlogDetails/index.jsx";
import styled from "styled-components";
import Blogs from "../../components/Blogs/index.jsx";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.bgLight};
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      70% 45% at 50% 0%,
      ${({ theme }) => theme.accentMesh1},
      transparent 65%
    );
  }
`;

const Home = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [openBlogModal, setOpenBlogModal] = useState({
    state: false,
    blog: null,
  });

  return (
    <Body>
      <main id="main-content">
      <HeroSection />
      <Wrapper>
        <Skills />
        <Experience />
      </Wrapper>
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      <Education />
      <Blogs
        openBlogModal={openBlogModal}
        setOpenBlogModal={setOpenBlogModal}
      />
      <Wrapper>
        <TimeLineData />
        <Contact />
      </Wrapper>
      <Footer />
      </main>
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
      {openBlogModal.state && (
        <BlogDetails
          openBlogModal={openBlogModal}
          setOpenBlogModal={setOpenBlogModal}
        />
      )}
    </Body>
  );
};

export default Home;
