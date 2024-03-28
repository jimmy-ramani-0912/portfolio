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
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Home = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [openBlogModal, setOpenBlogModal] = useState({
    state: false,
    blog: null,
  });

  return (
    <Body>
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
