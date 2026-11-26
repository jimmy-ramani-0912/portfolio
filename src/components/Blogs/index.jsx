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
  HeaderRow,
} from "./BlogsStyle";
import BlogCards from "../Cards/BlogCards";
import { blogs } from "../../data/constants";

const Blogs = ({ openBlogModal, setOpenBlogModal }) => {
  const navigate = useNavigate();

  return (
    <Container id="blogs" aria-labelledby="blogs-heading">
      <Inner>
        <HeaderRow>
        <SectionHeader>
          <Eyebrow>Writing</Eyebrow>
          <Title id="blogs-heading">Blogs</Title>
          <Desc>
            Notes on web and mobile development—patterns, tooling, and lessons
            learned while building real products.
          </Desc>
        </SectionHeader>
        <ViewAll
          type="button"
          onClick={() => navigate("portfolio/blogs")}
        >
          All blogs &rarr;
        </ViewAll>
        </HeaderRow>
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
      </Inner>
    </Container>
  );
};

export default Blogs;
