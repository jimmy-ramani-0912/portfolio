import React from "react";
import styled from "styled-components";
import Skills from "../../components/Skills/index.jsx";
import Projects from "../../components/Projects/index.jsx";
import Contact from "../../components/Contact/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Experience from "../../components/Experience/index.jsx";
import Education from "../../components/Education/index.jsx";
import TimeLineData from "../../components/TimeLine/index.jsx";
import Blogs from "../../components/Blogs/index.jsx";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.bgLight};
  border-top: 1px solid ${({ theme }) => theme.navBorder};
`;

const BelowFold = ({
  openModal,
  setOpenModal,
  openBlogModal,
  setOpenBlogModal,
}) => (
  <>
    <Wrapper>
      <Skills />
      <Experience />
    </Wrapper>
    <Projects openModal={openModal} setOpenModal={setOpenModal} />
    <Education />
    <Blogs openBlogModal={openBlogModal} setOpenBlogModal={setOpenBlogModal} />
    <Wrapper>
      <TimeLineData />
      <Contact />
    </Wrapper>
    <Footer />
  </>
);

export default BelowFold;
