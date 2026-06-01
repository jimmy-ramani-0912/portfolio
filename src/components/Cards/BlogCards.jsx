import React from "react";
import styled from "styled-components";
import { glassCard } from "../../theme/mixins";
import { useSpotlightCardHandlers } from "../../hooks/useSpotlightCardHandlers";
import { useNavigate } from "react-router-dom";

const Card = styled.article`
  width: 100%;
  max-width: 340px;
  min-height: 340px;
  ${glassCard}
  cursor: pointer;
  border-radius: 18px;
  overflow: hidden;
  padding: 22px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  transition: transform 0.3s ease;
  border-color: ${({ theme }) => theme.primary}40;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 18px 18px 0 0;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primary} 0%,
      ${({ theme }) => theme.accent} 48%,
      ${({ theme }) => theme.primary} 100%
    );
    z-index: 2;
    pointer-events: none;
  }
  &:hover {
    transform: translateY(-5px);
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 3px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.card_light};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.navBorder};
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: clamp(1.05rem, 2vw, 1.15rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DateText = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const BlogCards = ({ blog, setOpenModal }) => {
  const navigate = useNavigate();
  const spotlight = useSpotlightCardHandlers();

  const openPost = () => {
    if (!blog?.pdfUrl) {
      navigate(`/portfolio/blogs/${blog?.id}`, { state: { blog } });
    } else {
      setOpenModal({ state: true, blog });
    }
  };

  return (
    <Card
      {...spotlight}
      tabIndex={0}
      role="button"
      aria-label={`Open blog: ${blog?.title}`}
      onClick={openPost}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openPost();
        }
      }}
    >
      <Image src={blog?.image} alt="" loading="lazy" decoding="async" />
      <Details>
        <Title>{blog?.title}</Title>
        <DateText>{blog?.date}</DateText>
      </Details>
    </Card>
  );
};

export default BlogCards;
