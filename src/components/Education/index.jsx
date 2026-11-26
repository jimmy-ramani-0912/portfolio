import React from "react";
import styled, { useTheme } from "styled-components";
import { sectionEyebrowDot, sectionTitleGradient } from "../../theme/sectionStyles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background: ${({ theme }) => theme.bgLight};
  border-top: 1px solid ${({ theme }) => theme.navBorder};
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
`;

const Inner = styled.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 12px;
  width: 100%;
  max-width: 720px;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${sectionTitleGradient}
`;

const Desc = styled.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  width: 100%;
  max-width: 56ch;
  text-align: left;
`;

const TimelineWrap = styled.div`
  width: 100%;
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Education = () => {
  const theme = useTheme();

  return (
    <Container id="education" aria-labelledby="education-heading">
      <Inner>
        <SectionHeader>
          <Eyebrow>Academics</Eyebrow>
          <Title id="education-heading">Education</Title>
          <Desc>
            Academic milestones and coursework that shaped my foundation in
            software engineering.
          </Desc>
        </SectionHeader>
        <TimelineWrap>
          <Timeline
            position="left"
            sx={{
              width: "100%",
              maxWidth: "100%",
              margin: 0,
              p: 0,
              "& .MuiTimelineItem-root::before": { flex: 0, padding: 0 },
            }}
          >
            {education.map((item, index) => (
              <TimelineItem
                key={item.id}
                sx={{
                  flexDirection: "row",
                }}
              >
                <TimelineSeparator>
                  <TimelineDot
                    variant="filled"
                    sx={{
                      bgcolor: theme.primaryFill,
                      boxShadow: `0 0 0 5px ${theme.bg}`,
                      border: 0,
                    }}
                  />
                  {index !== education.length - 1 && (
                    <TimelineConnector
                      sx={{
                        background: theme.navBorder,
                        width: 2,
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
                    width: "100%",
                  }}
                >
                  <EducationCard education={item} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineWrap>
      </Inner>
    </Container>
  );
};

export default Education;
