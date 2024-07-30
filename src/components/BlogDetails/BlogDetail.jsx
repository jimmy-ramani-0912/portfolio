import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Body,
  HtmlData,
  CardContainer,
  Title,
  ViewAll,
  Cards,
} from "./BlogDetail";
import { blogs } from "../../data/constants";
import BlogCards from "../Cards/BlogCards";
import BlogDetails from "../../components/BlogDetails";
import { useNavigate } from "react-router-dom";

function BlogDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const blog = location.state.blog;

  const [openBlogModal, setOpenBlogModal] = useState({
    state: false,
    blog: null,
  });

  return (
    <Body>
      <HtmlData dangerouslySetInnerHTML={{ __html: blog.HTML }} />
      <CardContainer>
        <Title>Latest Blogs</Title>
        <Cards>
          {blogs
            .filter((b) => b.id !== blog.id)
            .slice(0, 5)
            .map((blog) => (
              <BlogCards
                blog={blog}
                openModal={openBlogModal}
                setOpenModal={setOpenBlogModal}
              />
            ))}
        </Cards>
        <ViewAll
          onClick={() => {
            navigate("/portfolio/blogs");
          }}
        >
          View All
        </ViewAll>
      </CardContainer>
      {openBlogModal.state && (
        <BlogDetails
          openBlogModal={openBlogModal}
          setOpenBlogModal={setOpenBlogModal}
        />
      )}
    </Body>
  );
}

export default BlogDetail;
