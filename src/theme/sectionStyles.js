import { css } from "styled-components";

export const sectionEyebrowDot = css`
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

export const sectionTitleGradient = css`
  background: linear-gradient(
    110deg,
    ${({ theme }) => theme.text_primary} 0%,
    ${({ theme }) => theme.text_primary} 38%,
    ${({ theme }) => theme.primary} 72%,
    ${({ theme }) => theme.accent} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

export const cardAccentBorder = css`
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.accent} 48%,
    ${({ theme }) => theme.primary} 100%
  );
`;
