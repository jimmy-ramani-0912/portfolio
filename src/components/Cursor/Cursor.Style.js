import styled, { keyframes } from "styled-components";

const breathe = keyframes`
  0%,
  100% {
    opacity: 0.85;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.06);
  }
`;

export const CircularBorderWrapper = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
`;

export const CursorRing = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 36px;
  height: 36px;
  pointer-events: none;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RingGlow = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1.5px solid ${({ $primary }) => $primary};
  background: ${({ $primary }) =>
    `linear-gradient(135deg, ${$primary}12, transparent 55%)`};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow:
    0 0 0 1px ${({ $primary }) => `${$primary}22`},
    0 4px 24px ${({ $primary }) => `${$primary}28`};
  animation: ${breathe} 2.4s ease-in-out infinite;
`;

export const CursorDot = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  pointer-events: none;
  will-change: transform;
  background: ${({ $primary }) => $primary};
  box-shadow:
    0 0 12px ${({ $primary }) => `${$primary}66`},
    0 0 2px ${({ $primary }) => `${$primary}99`};
`;
