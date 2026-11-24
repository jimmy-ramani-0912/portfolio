import React, { lazy, Suspense } from "react";
import HeroSection from "../../components/HeroSection/index.jsx";
import { useState } from "react";
const ProjectDetails = lazy(() =>
  import("../../components/ProjectDetails/index.jsx")
);
const BlogDetails = lazy(() =>
  import("../../components/BlogDetails/index.jsx")
);
import styled from "styled-components";
const BelowFold = lazy(() => import("./BelowFold.jsx"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
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
      <Suspense fallback={null}>
        <BelowFold
          openModal={openModal}
          setOpenModal={setOpenModal}
          openBlogModal={openBlogModal}
          setOpenBlogModal={setOpenBlogModal}
        />
      </Suspense>
      </main>
      <Suspense fallback={null}>
        {openModal.state && (
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
        {openBlogModal.state && (
          <BlogDetails
            openBlogModal={openBlogModal}
            setOpenBlogModal={setOpenBlogModal}
          />
        )}
      </Suspense>
    </Body>
  );
};

export default Home;
