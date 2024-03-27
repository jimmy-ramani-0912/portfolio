import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
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
    <Container id="blogs">
      <Wrapper>
        <Title>Blogs</Title>
        <Desc>
          Join me as I share insights from my journey developing web and Android
          apps.
        </Desc>
        <CardContainer>
          {blogs.slice(0, 3).map((blog) => (
            <BlogCards
              blog={blog}
              openModal={openBlogModal}
              setOpenModal={setOpenBlogModal}
            />
          ))}
        </CardContainer>
        <ViewAll
          onClick={() => {
            navigate("/blogs");
          }}
        >
          View All
        </ViewAll>
      </Wrapper>
    </Container>
  );
};

export default Blogs;
