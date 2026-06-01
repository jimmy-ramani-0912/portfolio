import React from "react";
import styled, { useTheme } from "styled-components";
import { sectionEyebrowDot, sectionTitleGradient } from "../../theme/sectionStyles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimeLineData } from "../../data/constants";

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
  max-width: min(980px, 94vw);
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
  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    box-shadow:
      0 0 0 3px ${({ theme }) => theme.primaryGlowSoft},
      0 0 16px ${({ theme }) => theme.primaryGlow};
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: linear-gradient(
    110deg,
    ${({ theme }) => theme.text_primary} 0%,
    ${({ theme }) => theme.text_primary} 36%,
    ${({ theme }) => theme.primary} 76%,
    ${({ theme }) => theme.accent} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

const Desc = styled.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  width: 100%;
  max-width: 56ch;
  margin-inline: auto;
  text-align: center;
`;

const TimelineWrap = styled.div`
  width: 100%;
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const EventCard = styled.article`
  width: 100%;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.primary}33;
  background: ${({ theme }) => theme.card_light};
  padding: 12px 14px;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.text_primary};
  transition:
    transform 0.25s ease,
    border-color 0.25s ease;
  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primary}66;
  }
`;

const TimeLineSection = () => {
  const theme = useTheme();

  return (
    <Container id="timeline" aria-labelledby="timeline-heading">
      <Inner>
        <SectionHeader>
          <Eyebrow>Journey</Eyebrow>
          <Title id="timeline-heading">Timeline</Title>
          <Desc>
            Key milestones from my learning journey and real-world engineering
            work.
          </Desc>
        </SectionHeader>
        <TimelineWrap>
          <Timeline
            position="alternate"
            sx={{
              width: "100%",
              maxWidth: "min(860px, 100%)",
              margin: "0 auto",
              p: 0,
              "& .MuiTimelineItem-root::before": { flex: 0, padding: 0 },
            }}
          >
            {TimeLineData.map((item, index) => (
              <TimelineItem key={`${item.year}-${item.text}`}>
                <TimelineOppositeContent
                  sx={{
                    m: "auto 0",
                    color: theme.primary,
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    px: { xs: 1, sm: 2 },
                  }}
                >
                  {item.year}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    sx={{
                      borderColor: theme.primary,
                      boxShadow: `0 0 0 4px ${theme.primary}22`,
                    }}
                  />
                  {index !== TimeLineData.length - 1 && (
                    <TimelineConnector
                      sx={{
                        background: `linear-gradient(180deg, ${theme.primary} 0%, ${theme.primary}99 55%, ${theme.primary}44 100%)`,
                        width: 3,
                        borderRadius: 2,
                      }}
                    />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: { xs: 1.5, sm: 2 } }}>
                  <EventCard>{item.text}</EventCard>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineWrap>
      </Inner>
    </Container>
  );
};

export default TimeLineSection;
