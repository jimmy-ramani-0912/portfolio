import styled from "styled-components";
import { glassChip } from "../../theme/mixins";

export const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
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
      0 0 0 3px rgba(133, 76, 230, 0.2),
      0 0 16px rgba(133, 76, 230, 0.45);
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
    rgba(249, 115, 22, 0.88) 108%
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

export const ToggleButtonGroup = styled.div`
  display: inline-flex;
  align-items: stretch;
  margin-top: clamp(20px, 3vw, 28px);
  margin-bottom: clamp(8px, 2vw, 12px);
  ${glassChip}
  color: ${({ theme }) => theme.text_primary};
  font-size: 0.9375rem;
  border-radius: 14px;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.primary}55;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;

export const ToggleButton = styled.button`
  margin: 0;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  background: transparent;
  transition: background 0.2s ease, color 0.2s ease;
  ${({ $active, theme }) =>
    $active &&
    `
    color: ${theme.text_primary};
    background: ${theme.primary}22;
  `}
  &:hover {
    background: ${({ theme }) => theme.primary}14;
    color: ${({ theme }) => theme.text_primary};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: -2px;
  }
  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`;

export const Divider = styled.span`
  width: 1px;
  align-self: stretch;
  min-height: 100%;
  background: ${({ theme }) => theme.primary}44;
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
