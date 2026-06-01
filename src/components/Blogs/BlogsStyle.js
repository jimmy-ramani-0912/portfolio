import styled from "styled-components";
import { sectionEyebrowDot, sectionTitleGradient } from "../../theme/sectionStyles";

export const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
  background: linear-gradient(
    343.07deg,
    ${({ theme }) => theme.accentMesh1} 5.71%,
    transparent 64.83%
  );
`;

export const Inner = styled.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  max-width: 720px;
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text_secondary};
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

export const Title = styled.h2`
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

export const Desc = styled.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 56ch;
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: min(1200px, 94vw);
  margin-top: clamp(24px, 4vw, 40px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: clamp(20px, 3vw, 28px);
  justify-items: center;
`;

export const ViewAll = styled.button`
  margin-top: clamp(28px, 4vw, 40px);
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  font-weight: 600;
  color: ${({ theme }) => theme.button};
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

export const Wrapper = Inner;
