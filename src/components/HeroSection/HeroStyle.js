import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: clamp(40px, 6vw, 72px) clamp(20px, 4vw, 48px) clamp(56px, 8vw, 96px);
  border-bottom: 1px solid ${({ theme }) => theme.navBorder};
`;

export const HeroInnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(32px, 5vw, 64px);
  @media (max-width: 960px) {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;

export const HeroLeftContainer = styled.div`
  flex: 1 1 0;
  min-width: 0;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  @media (max-width: 960px) {
    max-width: none;
  }
`;

export const RoleBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.navBorder};
  border-radius: 999px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.8125rem;
  font-weight: 500;
  min-height: 20px;
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    background: ${({ theme }) => theme.primaryFill};
  }
  & .Typewriter__wrapper {
    color: ${({ theme }) => theme.text_primary};
    font-weight: 600;
  }
`;

export const Headline = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: clamp(2.4rem, 5.4vw, 4.25rem);
  line-height: 1.04;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.text_primary};
`;

export const HeadlineAccent = styled.span`
  color: ${({ theme }) => theme.primary};
`;

export const Lead = styled.p`
  margin: 0;
  max-width: 56ch;
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 24px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease, filter 0.2s ease;
`;

export const PrimaryButton = styled.a`
  ${buttonBase}
  background: ${({ theme }) => theme.primaryFill};
  color: ${({ theme }) => theme.onPrimary};
  border: 1px solid ${({ theme }) => theme.primaryFill};
  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.08);
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 3px;
  }
`;

export const SecondaryButton = styled.a`
  ${buttonBase}
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.navBorder};
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-1px);
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 3px;
  }
`;

export const StatsRow = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 40px;
  width: 100%;
  margin: 8px 0 0;
  padding: 24px 0 0;
  border-top: 1px solid ${({ theme }) => theme.navBorder};
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2px;
`;

export const StatValue = styled.dd`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.4vw, 1.875rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

export const StatLabel = styled.dt`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text_secondary};
`;

export const HeroRightContainer = styled.div`
  flex: 0 1 400px;
  display: flex;
  justify-content: center;
  @media (max-width: 960px) {
    flex: none;
  }
`;

export const PortraitCard = styled.figure`
  margin: 0;
  width: 400px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.navBorder};
  box-shadow: ${({ theme }) => theme.boxShadow};
  @media (max-width: 640px) {
    width: 320px;
  }
`;

export const PortraitImageWrap = styled.div`
  aspect-ratio: 1;
  background: #ffffff;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

export const PortraitCaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 18px 22px;
`;

export const CaptionName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

export const CaptionRole = styled.span`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.text_secondary};
`;
