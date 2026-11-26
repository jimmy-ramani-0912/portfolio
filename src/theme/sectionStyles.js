import { css } from "styled-components";

export const sectionEyebrowDot = css`
  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primaryFill};
  }
`;

// Solid heading colour (name kept so existing imports keep working).
export const sectionTitleGradient = css`
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: -0.02em;
`;

export const cardAccentBorder = css`
  background: ${({ theme }) => theme.primaryFill};
`;
