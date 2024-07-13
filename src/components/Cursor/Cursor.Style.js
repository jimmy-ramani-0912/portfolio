import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 6px rgba(133, 76, 230, 0.6), 0 0 20px rgba(133, 76, 230, 0.4);
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
    box-shadow: 0 0 10px rgba(133, 76, 230, 0.8), 0 0 30px rgba(133, 76, 230, 0.6);
  }
  100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 6px rgba(133, 76, 230, 0.6), 0 0 20px rgba(133, 76, 230, 0.4);
  }
`;

export const CircularBorderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

export const CursorContainer = styled.div`
  width: 40px;
  height: 40px;
  border: 1.2px solid #854ce6;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulse} 2s infinite;

  &:after {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #854ce6;
    border-radius: 50%;
  }
`;
