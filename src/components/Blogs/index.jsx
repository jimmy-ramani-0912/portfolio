import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Inner,
  SectionHeader,
  Eyebrow,
  Title,
  Desc,
  CardContainer,
  ViewAll,
} from "./BlogsStyle";
import BlogCards from "../Cards/BlogCards";
import { blogs } from "../../data/constants";

const Blogs = ({ openBlogModal, setOpenBlogModal }) => {
  const navigate = useNavigate();

  return (
    <Container id="blogs" aria-labelledby="blogs-heading">
      <Inner>
        <SectionHeader>
          <Eyebrow>Writing</Eyebrow>
          <Title id="blogs-heading">Blogs</Title>
          <Desc>
            Notes on web and mobile development—patterns, tooling, and lessons
            learned while building real products.
          </Desc>
        </SectionHeader>
        <CardContainer>
          {blogs.slice(0, 5).map((blog) => (
            <BlogCards
              key={blog.id}
              blog={blog}
              openModal={openBlogModal}
              setOpenModal={setOpenBlogModal}
            />
          ))}
        </CardContainer>
        <ViewAll
          type="button"
          onClick={() => navigate("portfolio/blogs")}
        >
          View All Blogs
        </ViewAll>
      </Inner>
    </Container>
  );
};

export default Blogs;
