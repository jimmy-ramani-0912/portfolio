import React from "react";
import styled from "styled-components";
import { glassCard, glassChip } from "../../theme/mixins";
import { sectionEyebrowDot, sectionTitleGradient } from "../../theme/sectionStyles";
import { skills } from "../../data/constants";
import { useSpotlightCardHandlers } from "../../hooks/useSpotlightCardHandlers";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
`;

const Inner = styled.div`
  width: 100%;
  max-width: min(1240px, 90vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  max-width: 720px;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text_secondary};
  ${sectionEyebrowDot}
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${sectionTitleGradient}
`;

const Desc = styled.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 56ch;
`;

const SkillsGridWrap = styled.div`
  position: relative;
  width: 100%;
  margin-top: clamp(36px, 5vw, 52px);
`;

const GridCenterOrb = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  box-shadow:
    0 0 0 5px ${({ theme }) => theme.primaryGlowSoft},
    0 0 36px ${({ theme }) => theme.primaryGlow},
    0 0 72px ${({ theme }) => theme.primaryGlowSubtle};
  pointer-events: none;
  z-index: 3;
  @media (max-width: 720px) {
    display: none;
  }
`;

const SkillsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;
  @media (min-width: 721px) {
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    gap: 20px;
  }
`;

const Skill = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  ${glassCard}
  border-radius: 20px;
  padding: 0;
  border-color: ${({ theme }) => theme.primary}40;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 20px 20px 0 0;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.primary} 0%,
      ${({ theme }) => theme.accent} 48%,
      ${({ theme }) => theme.primary} 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`;

const SkillCardInner = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  min-height: 0;
  padding: 28px 26px 26px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 720px) {
    padding: 24px 18px 22px;
    gap: 16px;
  }
  @media (max-width: 500px) {
    padding: 22px 14px 18px;
  }
`;

const SkillHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SkillTitle = styled.h3`
  margin: 0;
  width: 100%;
  font-size: clamp(1.2rem, 2.1vw, 1.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const SkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-content: center;
  justify-content: center;
`;

const SkillItem = styled.li`
  font-size: clamp(0.9rem, 1.35vw, 1rem);
  font-weight: 500;
  ${glassChip}
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 11px 15px 11px 11px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 9px 12px 9px 9px;
  }
`;

const IconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.navBorder};
  flex-shrink: 0;
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const SkillPanel = ({ skill }) => {
  const spotlight = useSpotlightCardHandlers();
  return (
    <Skill {...spotlight}>
      <SkillCardInner>
        <SkillHead>
          <SkillTitle>{skill.title}</SkillTitle>
        </SkillHead>
        <SkillList>
          {skill.skills.map((item) => (
            <SkillItem key={item.name}>
              <IconWrap>
                <SkillImage
                  src={item.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </IconWrap>
              {item.name}
            </SkillItem>
          ))}
        </SkillList>
      </SkillCardInner>
    </Skill>
  );
};

const Skills = () => {
  return (
    <Container id="skills" aria-labelledby="skills-heading">
      <Inner>
        <SectionHeader>
          <Eyebrow>Tech stack</Eyebrow>
          <Title id="skills-heading">Skills</Title>
          <Desc>
            Here are some of my skills on which I have been working on for the
            past 4 years.
          </Desc>
        </SectionHeader>
        <SkillsGridWrap>
          <GridCenterOrb aria-hidden />
          <SkillsGrid>
            {skills.map((skill) => (
              <SkillPanel key={skill.title} skill={skill} />
            ))}
          </SkillsGrid>
        </SkillsGridWrap>
      </Inner>
    </Container>
  );
};

export default Skills;
