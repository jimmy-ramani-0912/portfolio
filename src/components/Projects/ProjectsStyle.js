import styled from "styled-components";
import { sectionEyebrowDot, sectionTitleGradient } from "../../theme/sectionStyles";
import { glassChip } from "../../theme/mixins";

export const Container = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.navBorder};
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
  background: transparent;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
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
  color: ${({ theme }) => theme.primary};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${sectionTitleGradient}
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
  align-self: flex-start;
  gap: 4px;
  margin-top: clamp(20px, 3vw, 28px);
  padding: 5px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.navBorder};
  border-radius: 999px;
  font-size: 0.9375rem;
  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;

export const ToggleButton = styled.button`
  margin: 0;
  padding: 9px 20px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  background: transparent;
  transition: background 0.2s ease, color 0.2s ease;
  ${({ $active, theme }) =>
    $active &&
    `
    color: ${theme.onPrimary};
    background: ${theme.primaryFill};
  `}
  &:hover {
    color: ${({ $active, theme }) =>
      $active ? theme.onPrimary : theme.text_primary};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }
  @media (max-width: 768px) {
    padding: 8px 14px;
  }
`;

export const Divider = styled.span`
  display: none;
`;

export const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px 32px;
`;

export const CardContainer = styled.div`
  width: 100%;
  margin-top: clamp(24px, 4vw, 36px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: clamp(16px, 2.4vw, 24px);
  align-items: stretch;
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    & > *:first-child {
      grid-column: span 2;
    }
    & > *:first-child img {
      height: 230px;
    }
  }
`;

export const ViewAll = styled.button`
  margin: 0;
  padding: 10px 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  transition: color 0.2s ease, transform 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
    transform: translateX(2px);
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;
