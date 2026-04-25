import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.heroSurface};
  backdrop-filter: blur(22px) saturate(1.2);
  -webkit-backdrop-filter: blur(22px) saturate(1.2);
  border-bottom: 1px solid ${({ theme }) => theme.navBorder};
  display: flex;
  justify-content: center;
  position: relative;
  padding: clamp(56px, 10vw, 96px) clamp(20px, 4vw, 48px);
  min-height: min(88vh, 840px);
  @media (max-width: 960px) {
    min-height: 0;
    padding: 56px 20px 48px;
  }
  @media (max-width: 640px) {
    padding: 40px 16px 36px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 72% 97%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1180px;
  gap: clamp(28px, 5vw, 64px);

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  max-width: min(560px, 100%);
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(18px, 2.8vw, 28px);
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 8px;
    align-items: center;
    text-align: center;
    max-width: 640px;
  }
`;

export const HeroTextColumn = styled.div`
  position: relative;
  width: 100%;
  padding-left: clamp(20px, 2.8vw, 32px);
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.25rem;
    bottom: 0.25rem;
    width: 4px;
    border-radius: 4px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.primary} 0%,
      rgba(249, 115, 22, 0.55) 52%,
      ${({ theme }) => theme.primary} 100%
    );
    box-shadow: 0 0 20px rgba(133, 76, 230, 0.35);
  }
  @media (max-width: 960px) {
    padding-left: 0;
    &::before {
      display: none;
    }
  }
`;

export const HeadlineGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  @media (max-width: 960px) {
    align-items: center;
  }
`;

export const Greeting = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: clamp(0.8125rem, 1.5vw, 0.9375rem);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text_secondary};
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    background: ${({ theme }) => theme.primary};
    box-shadow:
      0 0 0 3px rgba(133, 76, 230, 0.22),
      0 0 18px rgba(133, 76, 230, 0.55);
  }
`;

export const NameHeading = styled.h1`
  margin: 0;
  font-weight: 800;
  font-size: clamp(2.25rem, 5.5vw, 3.65rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  background: linear-gradient(
    110deg,
    ${({ theme }) => theme.text_primary} 0%,
    ${({ theme }) => theme.text_primary} 42%,
    ${({ theme }) => theme.primary} 72%,
    rgba(249, 115, 22, 0.85) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  filter: drop-shadow(0 2px 24px rgba(133, 76, 230, 0.12));
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    margin-bottom: 12px;
  }
`;

export const ProfileFrame = styled.div`
  position: relative;
  flex-shrink: 0;
  padding: 5px;
  border-radius: 50%;
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.primary} 0%,
    rgba(249, 115, 22, 0.42) 48%,
    ${({ theme }) => theme.primary} 100%
  );
  box-shadow:
    0 0 0 1px ${({ theme }) => theme.navBorder},
    0 22px 56px rgba(133, 76, 230, 0.32),
    0 0 72px rgba(133, 76, 230, 0.12);
`;

export const Img = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 392px;
  max-height: 392px;
  aspect-ratio: 1;
  border-radius: 50%;

  @media (max-width: 768px) {
    max-width: 360px;
    max-height: 360px;
  }

  @media (max-width: 640px) {
    max-width: 260px;
    max-height: 260px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: clamp(1.05rem, 2.2vw, 1.75rem);
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  min-height: 3rem;
  padding: 12px 18px 12px 0;
  border-radius: 16px;
  line-height: 1.35;
  color: ${({ theme }) => theme.text_primary};
  backdrop-filter: ${({ theme }) => theme.glassBlurSoft};
  -webkit-backdrop-filter: ${({ theme }) => theme.glassBlurSoft};
  @media (max-width: 960px) {
    justify-content: center;
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export const RolePrefix = styled.span`
  font-weight: 500;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.text_secondary};
`;

export const Span = styled.span`
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.primary};
  text-shadow: 0 0 28px rgba(133, 76, 230, 0.35);
`;

export const DescriptionBlock = styled.div`
  width: 100%;
  max-width: min(54ch, 100%);
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2vw, 16px);
  padding: clamp(14px, 2vw, 18px) 0;
  @media (max-width: 960px) {
    max-width: min(62ch, 100%);
    align-items: center;
  }
`;

export const DescriptionLead = styled.p`
  margin: 0;
  font-size: clamp(1rem, 1.42vw, 1.125rem);
  line-height: 1.55;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-align: left;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 960px) {
    text-align: center;
  }
`;

export const DescriptionList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  @media (max-width: 960px) {
    gap: 8px;
  }
`;

export const DescriptionListItem = styled.li`
  position: relative;
  margin: 0;
  padding-left: 1.15rem;
  font-size: clamp(0.9rem, 1.18vw, 1.02rem);
  line-height: 1.62;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-align: left;
  color: ${({ theme }) => theme.text_secondary};
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.58em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 0 14px rgba(133, 76, 230, 0.5);
  }
  @media (max-width: 960px) {
    text-align: left;
    width: 100%;
    max-width: none;
    font-size: 0.99rem;
    line-height: 1.58;
  }
  @media (max-width: 640px) {
    padding-left: 1rem;
    font-size: 0.96rem;
    line-height: 1.54;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 200px;
  padding: 16px 32px;
  color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 14px;
  cursor: pointer;
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  font-weight: 600;
  transition:
    transform 0.2s ease,
    box-shadow 0.25s ease,
    filter 0.2s ease;
  background: ${({ theme }) => theme.primary};
  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 12px 40px rgba(133, 76, 230, 0.45),
      0 0 0 1px rgba(255, 255, 255, 0.06);
    filter: brightness(1.06);
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 3px;
  }

  @media (max-width: 960px) {
    width: 100%;
    max-width: 320px;
  }

  @media (max-width: 640px) {
    padding: 14px 28px;
  }
`;
