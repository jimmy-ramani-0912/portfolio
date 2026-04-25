import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { glassCard, glassChip } from "../../theme/mixins";
import { useSpotlightCardHandlers } from "../../hooks/useSpotlightCardHandlers";

const DESC_COLLAPSE_CHARS = 220;

const schoolInitials = (name) => {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  const word = parts[0] || "?";
  return word.slice(0, 2).toUpperCase();
};

const Card = styled.article`
  width: 100%;
  max-width: min(680px, calc(100vw - 48px));
  border-radius: 18px;
  ${glassCard}
  padding: 22px 22px 20px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  transition: transform 0.35s ease;
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
    transform: translateY(-4px);
  }
  @media (max-width: 600px) {
    padding: 18px 16px 16px;
    gap: 14px;
    max-width: calc(100vw - 40px);
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 1;
`;

const TopMain = styled.div`
  display: flex;
  gap: 14px;
  flex: 1;
  min-width: 0;
  align-items: flex-start;
`;

const LogoWrap = styled.div`
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.navBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 46px;
    height: 46px;
  }
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
  display: block;
`;

const LogoFallback = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary}14;
`;

const Body = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  align-items: flex-start;
`;

const School = styled.h3`
  margin: 0;
  font-size: clamp(1rem, 2.4vw, 1.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: ${({ theme }) => theme.text_primary};
`;

const Degree = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const DateBadge = styled.span`
  flex-shrink: 0;
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.primary}18;
  border: 1px solid ${({ theme }) => theme.primary}35;
  white-space: nowrap;
  max-width: 100%;
  text-align: center;
  @media (max-width: 420px) {
    font-size: 0.625rem;
    padding: 3px 8px;
  }
`;

const GradeChip = styled.span`
  ${glassChip}
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  padding: 6px 12px;
  border-radius: 10px;
  width: fit-content;
`;

const DescriptionBlock = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

const DescText = styled.p`
  margin: 0;
  font-size: clamp(0.875rem, 1.35vw, 0.9375rem);
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  white-space: pre-line;
  ${({ $clamped }) =>
    $clamped
      ? `
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `
      : ""}
`;

const ToggleDesc = styled.button`
  margin-top: 8px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  text-decoration: underline;
  text-underline-offset: 3px;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const EducationCard = ({ education }) => {
  const spotlight = useSpotlightCardHandlers();
  const [expanded, setExpanded] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const desc = education?.desc ?? "";
  const needsToggle = useMemo(() => desc.length > DESC_COLLAPSE_CHARS, [desc]);
  const showClamped = needsToggle && !expanded;
  const initials = useMemo(
    () => schoolInitials(education.school),
    [education.school]
  );

  useEffect(() => {
    setLogoFailed(false);
  }, [education.id, education.img]);

  return (
    <Card {...spotlight}>
      <Top>
        <TopMain>
          <LogoWrap aria-hidden>
            {!logoFailed && education.img ? (
              <LogoImg
                src={education.img}
                alt=""
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <LogoFallback>{initials}</LogoFallback>
            )}
          </LogoWrap>
          <Body>
            <School>{education.school}</School>
            <Degree>{education.degree}</Degree>
          </Body>
        </TopMain>
        <DateBadge>{education.date}</DateBadge>
      </Top>
      {education.grade && <GradeChip>{education.grade}</GradeChip>}
      {desc && (
        <DescriptionBlock>
          <DescText $clamped={showClamped}>{desc}</DescText>
          {needsToggle && (
            <ToggleDesc
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? "Show less" : "Show more"}
            </ToggleDesc>
          )}
        </DescriptionBlock>
      )}
    </Card>
  );
};

export default EducationCard;
