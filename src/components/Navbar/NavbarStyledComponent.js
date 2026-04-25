import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 200;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  font-size: 1rem;
  isolation: isolate;
  background: ${({ theme }) => theme.navBarFill};
  backdrop-filter: blur(5px) saturate(100.15);
  -webkit-backdrop-filter: blur(5px) saturate(100.15);
  border-top: 1px solid ${({ theme }) => theme.navBorder};
  @media (max-width: 960px) {
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  z-index: 2;
  position: relative;
  width: 100%;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 16px;
  border: 1px solid ${({ theme }) => theme.navBorder};
  border-radius: 10px;
  background: ${({ theme }) => theme.navInnerFill};
  box-sizing: border-box;
  overflow: visible;
  isolation: isolate;
  --spot-x: 50%;
  --spot-y: 50%;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      radial-gradient(
        circle 140px at var(--spot-x) var(--spot-y),
        ${({ theme }) => theme.glassSpotHot} 0%,
        transparent 68%
      ),
      radial-gradient(
        circle 240px at var(--spot-x) var(--spot-y),
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
  &:hover::before {
    opacity: ${({ theme }) => theme.navSpotOpacity};
  }
  & > * {
    position: relative;
    z-index: 1;
  }
  @media (max-width: 640px) {
    margin: 0 10px;
    padding: 0 14px;
  }
`;

export const NavLogo = styled(LinkR)`
  flex: 0 0 auto;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.logo};

  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

export const NavItems = styled.ul`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(14px, 2vw, 28px);
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    color: ${({ theme }) => theme.primary};
  }
`;

export const GitHubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ThemeButton = styled.button`
  border: none;
  outline: none;
  padding: 0 20px;
  color: ${({ theme }) => theme.text_primary};
  background: none;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  flex: 0 0 auto;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 950px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 640px) {
      right: 14px;
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  padding: 12px 20px 20px 20px;
  background: ${({ theme }) => theme.navBarFill};
  backdrop-filter: blur(10px) saturate(1.15);
  -webkit-backdrop-filter: blur(10px) saturate(1.15);
  border: 1px solid ${({ theme }) => theme.navBorder};
  border-radius: 10px;
  box-shadow:
    ${({ theme }) => theme.navShadow},
    inset 0 0 0 1px ${({ theme }) => theme.navInsetLine};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  && {
    z-index: ${({ isOpen }) => (isOpen ? 1200 : -1000)};
  }
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.navBorder};
    background: ${({ theme }) => theme.navLinkHoverFill};
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.navLinkActiveFill};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.navBorder};
    background: ${({ theme }) => theme.navLinkHoverFill};
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.navLinkActiveFill};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
