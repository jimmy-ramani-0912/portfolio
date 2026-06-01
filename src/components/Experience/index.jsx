import React from "react";
import styled, { useTheme } from "styled-components";
import { sectionEyebrowDot, sectionTitleGradient } from "../../theme/sectionStyles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constants";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)
    clamp(88px, 12vw, 132px);
`;

const Inner = styled.div`
  width: 100%;
  max-width: min(900px, 92vw);
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

const TimelineWrap = styled.div`
  width: 100%;
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ExperienceSection = () => {
  const theme = useTheme();

  return (
    <Container id="experience" aria-labelledby="experience-heading">
      <Inner>
        <SectionHeader>
          <Eyebrow>Career</Eyebrow>
          <Title id="experience-heading">Experience</Title>
          <Desc>
            Roles building production software, from full-stack web dashboards
            to mobile apps, with shipped work you can open in a new tab.
          </Desc>
        </SectionHeader>
        <TimelineWrap>
          <Timeline
            position="right"
            sx={{
              width: "100%",
              maxWidth: "min(760px, 100%)",
              margin: "0 auto",
              p: 0,
              "& .MuiTimelineItem-root::before": { flex: 0, padding: 0 },
            }}
          >
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id}>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    sx={{
                      borderColor: theme.primary,
                      boxShadow: `0 0 0 4px ${theme.primary}22`,
                    }}
                  />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector
                      sx={{
                        background: `linear-gradient(180deg, ${theme.primary} 0%, ${theme.primary}99 55%, ${theme.primary}44 100%)`,
                        width: 3,
                        borderRadius: 2,
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: "14px",
                    px: { xs: 1.5, sm: 2 },
                    textAlign: "left",
                  }}
                >
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineWrap>
      </Inner>
    </Container>
  );
};

export default ExperienceSection;
