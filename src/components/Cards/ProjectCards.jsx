import React from "react";
import styled from "styled-components";
import { glassCard, glassChip } from "../../theme/mixins";
import { useSpotlightCardHandlers } from "../../hooks/useSpotlightCardHandlers";

const Card = styled.article`
  width: 100%;
  max-width: 340px;
  min-height: 440px;
  ${glassCard}
  cursor: pointer;
  border-radius: 18px;
  overflow: hidden;
  padding: 22px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.3s ease;
  position: relative;
  border-color: ${({ theme }) => theme.primary}40;
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
      rgba(249, 115, 22, 0.75) 48%,
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
  height: 148px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.card_light};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.navBorder};
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  ${glassChip}
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  padding: 4px 10px;
  border-radius: 8px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-height: 0;
`;

const Title = styled.h3`
  margin: 0;
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: ${({ theme }) => theme.text_primary};
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
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.text_secondary};
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: auto;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.card_light};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.glassCardBorder};
`;

const ProjectCards = ({ project, setOpenModal }) => {
  const spotlight = useSpotlightCardHandlers();

  const openDetails = () => {
    setOpenModal({ state: true, project });
  };

  return (
    <Card
      {...spotlight}
      tabIndex={0}
      role="button"
      aria-label={`Open project: ${project.title}`}
      onClick={openDetails}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDetails();
        }
      }}
    >
      <Image
        src={project.image}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <Tags>
        {project.tags?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <DateText>{project.date}</DateText>
        <Description>{project.description}</Description>
      </Details>
      {project.member?.length > 0 && (
        <Members>
          {project.member.map((member) => (
            <Avatar key={member.img} src={member.img} alt="" />
          ))}
        </Members>
      )}
    </Card>
  );
};

export default ProjectCards;
