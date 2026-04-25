import React, { useState } from "react";
import {
  Container,
  Inner,
  SectionHeader,
  Eyebrow,
  Title,
  Desc,
  CardContainer,
} from "../../components/Blogs/BlogsStyle";
import BlogCards from "../../components/Cards/BlogCards";
import { blogs } from "../../data/constants";
import BlogDetails from "../../components/BlogDetails";
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
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: clamp(40px, 6vw, 72px) clamp(16px, 4vw, 32px) 80px;
`;

const BlogsPage = () => {
  const [openBlogModal, setOpenBlogModal] = useState({
    state: false,
    blog: null,
  });

  return (
    <Body>
      <PageBackdrop>
        <Inner>
          <SectionHeader>
            <Eyebrow>Writing</Eyebrow>
            <Title id="blogs-page-heading">Blogs</Title>
            <Desc>
              Notes on web and mobile development—patterns, tooling, and lessons
              learned while building real products.
            </Desc>
          </SectionHeader>
          <CardContainer>
            {blogs.map((blog) => (
              <BlogCards
                key={blog.id}
                blog={blog}
                openModal={openBlogModal}
                setOpenModal={setOpenBlogModal}
              />
            ))}
          </CardContainer>
        </Inner>
      </PageBackdrop>
      {openBlogModal.state && (
        <BlogDetails
          openBlogModal={openBlogModal}
          setOpenBlogModal={setOpenBlogModal}
        />
      )}
    </Body>
  );
};

export default BlogsPage;
