import React, { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { blogs } from "../../data/constants";
import BlogCards from "../Cards/BlogCards";
import BlogDetails from "../../components/BlogDetails";
import styled from "styled-components";

export const Body = styled.div`
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  height: calc(100dvh - 80px);
  padding: 30px;
  display: grid;
  grid-template-columns: 2.4fr 0.6fr;
  gap: 40px;
  @media (max-width: 960px) {
    max-height: 100dvh;
    grid-template-columns: 1fr;
  }
`;

export const HtmlData = styled.div`
  @media (min-width: 960px) {
    overflow: auto;
  }
  height: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100dvw;
  gap: 28px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    flex-direction: row;
  }
`;

export const CardContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 28px;
  flex-wrap: wrap; */
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 16px 16px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

export const ViewAll = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.button};
  margin-top: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

function BlogDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const blog = useMemo(() => {
    if (location.state?.blog) {
      return location.state.blog;
    }
    return blogs.find((item) => String(item.id) === String(id));
  }, [id, location.state?.blog]);

  const [openBlogModal, setOpenBlogModal] = useState({
    state: false,
    blog: null,
  });

  if (!blog) {
    return (
      <Body>
        <Title>Blog not found</Title>
        <ViewAll
          onClick={() => {
            navigate("/portfolio/blogs");
          }}
        >
          Back to Blogs
        </ViewAll>
      </Body>
    );
  }

  return (
    <Body>
      <article>
        <HtmlData dangerouslySetInnerHTML={{ __html: blog.HTML }} />
      </article>
      <CardContainer>
        <Title>Latest Blogs</Title>
        <Cards>
          {blogs
            .filter((b) => b.id !== blog.id)
            .slice(0, 5)
            .map((blog) => (
              <BlogCards
                key={blog.id}
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
