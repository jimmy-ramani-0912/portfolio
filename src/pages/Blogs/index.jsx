import React, { useState } from "react";
import {
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from "../../components/Blogs/BlogsStyle";
import BlogCards from "../../components/Cards/BlogCards";
import { blogs } from "../../data/constants";
import BlogDetails from "../../components/BlogDetails";
import styled from "styled-components";

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

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  height: calc(100dvh - 80px);
`;

const Blogs = () => {
  const [openBlogModal, setOpenBlogModal] = useState({
    state: false,
    blog: null,
  });

  return (
    <Body>
      <Container>
        <Wrapper>
          <Title>Blogs</Title>
          <Desc>
            Join me as I share insights from my journey developing web and
            Android apps.
          </Desc>
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
        </Wrapper>
      </Container>
      {openBlogModal.state && (
        <BlogDetails
          openBlogModal={openBlogModal}
          setOpenBlogModal={setOpenBlogModal}
        />
      )}
    </Body>
  );
};

export default Blogs;
