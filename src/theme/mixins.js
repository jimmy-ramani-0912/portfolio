import { css } from "styled-components";

export const glassCard = css`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  --spot-x: 50%;
  --spot-y: 50%;
  background: ${({ theme }) => theme.glassCardBg};
  backdrop-filter: ${({ theme }) => theme.glassBlur};
  -webkit-backdrop-filter: ${({ theme }) => theme.glassBlur};
  border: 1px solid ${({ theme }) => theme.glassCardBorder};
  box-shadow: ${({ theme }) => theme.glassCardShadow};
  transition:
    border-color 0.45s ease,
    box-shadow 0.5s ease,
    transform 0.35s ease,
    filter 0.35s ease;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      radial-gradient(
        circle 110px at var(--spot-x) var(--spot-y),
        ${({ theme }) => theme.glassSpotHot} 0%,
        transparent 68%
      ),
      radial-gradient(
        circle 200px at var(--spot-x) var(--spot-y),
        ${({ theme }) => theme.glassSpotCool} 0%,
        transparent 72%
      );
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
    z-index: 0;
    mix-blend-mode: ${({ theme }) => theme.glassSpotBlend};
    will-change: opacity;
  }
  &:hover {
    border-color: ${({ theme }) => theme.glassCardBorderHover};
    box-shadow: ${({ theme }) => theme.glassCardShadowHover};
  }
  &:hover::before {
    opacity: 1;
  }
`;

export const glassChip = css`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: ${({ theme }) => theme.glassChipBg};
  backdrop-filter: ${({ theme }) => theme.glassBlurSoft};
  -webkit-backdrop-filter: ${({ theme }) => theme.glassBlurSoft};
  border: 1px solid ${({ theme }) => theme.glassCardBorder};
  transition:
    border-color 0.35s ease,
    box-shadow 0.4s ease;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      radial-gradient(
        ellipse 80% 60% at 75% 10%,
        ${({ theme }) => theme.glassChipGlowWarm} 0%,
        transparent 55%
      ),
      radial-gradient(
        circle 50% at 20% 90%,
        ${({ theme }) => theme.glassChipGlowAccent} 0%,
        transparent 60%
      );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    mix-blend-mode: ${({ theme }) => theme.glassSpotBlend};
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover {
    border-color: ${({ theme }) => theme.glassCardBorderHover};
    box-shadow: ${({ theme }) => theme.glassChipShadowHover};
  }
`;
