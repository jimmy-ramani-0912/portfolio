import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  ThemeButton,
} from "./NavbarStyledComponent";
import { Navigate, useNavigate } from "react-router-dom";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { DiCssdeck } from "react-icons/di";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import { FaBars, FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/portfolio">
          <a
            onClick={() => scrollToTop()}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink
            href="#about"
            onClick={() => {
              navigate("portfolio#about");
            }}
          >
            About
          </NavLink>
          <NavLink
            href="#skills"
            onClick={() => {
              navigate("portfolio#skills");
            }}
          >
            Skills
          </NavLink>
          <NavLink
            href="#experience"
            onClick={() => {
              navigate("portfolio#experience");
            }}
          >
            Experience
          </NavLink>
          <NavLink
            href="#projects"
            onClick={() => {
              navigate("portfolio#projects");
            }}
          >
            Projects
          </NavLink>
          <NavLink
            href="#education"
            onClick={() => {
              navigate("portfolio#education");
            }}
          >
            Education
          </NavLink>
          <NavLink
            href="#blogs"
            onClick={() => {
              navigate("portfolio#blogs");
            }}
          >
            Blogs
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            <GitHubIcon style={{ marginRight: "10px" }} />
            Github
          </GitHubButton>
          <ThemeButton onClick={toggleDarkMode}>
            {darkMode ? <WbSunnyIcon /> : <FaMoon />}
          </ThemeButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                navigate("portfolio#about");
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                navigate("portfolio#skills");
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                navigate("portfolio#experience");
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                navigate("portfolio#projects");
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                navigate("portfolio#education");
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href="#blogs"
              onClick={() => {
                navigate("portfolio#blogs");
                setIsOpen(!isOpen);
              }}
            >
              Blogs
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              <GitHubIcon style={{ marginRight: "10px" }} />
              Github
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
