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
  NavSpacer,
} from "./NavbarStyledComponent";
import { useNavigate } from "react-router-dom";
import { useSpotlightCardHandlers } from "../../hooks/useSpotlightCardHandlers";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { DiCssdeck } from "react-icons/di";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import { FaBars, FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("about");
  const theme = useTheme();
  const navigate = useNavigate();
  const navSpotlight = useSpotlightCardHandlers();
  const basePath = React.useMemo(() => {
    const baseUrl = import.meta.env.BASE_URL || "/";
    return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  }, []);
  const sectionIds = React.useMemo(
    () => ["about", "skills", "experience", "projects", "education", "blogs"],
    []
  );
  const sectionHref = React.useCallback(
    (sectionId) => `${basePath}#${sectionId}`,
    [basePath]
  );
  const handleSectionNavigate = React.useCallback(
    (sectionId) => {
      setActiveSection(sectionId);
      navigate({ pathname: basePath, hash: `#${sectionId}` });
    },
    [basePath, navigate]
  );

  React.useEffect(() => {
    const syncActiveSection = () => {
      const scrollTop = window.scrollY;
      if (scrollTop < 220) {
        setActiveSection("about");
        return;
      }
      const viewportMarker = window.innerHeight * 0.38;
      let current = sectionIds[0];
      let nearestId = sectionIds[0];
      let nearestDistance = Number.POSITIVE_INFINITY;
      let hasMarkerMatch = false;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }
        const rect = section.getBoundingClientRect();
        const distanceToMarker = Math.abs(rect.top - viewportMarker);
        if (distanceToMarker < nearestDistance) {
          nearestDistance = distanceToMarker;
          nearestId = id;
        }
        if (rect.top <= viewportMarker && rect.bottom > viewportMarker) {
          hasMarkerMatch = true;
          current = id;
          break;
        }
      }

      if (!hasMarkerMatch) {
        setActiveSection("");
        return;
      }
      setActiveSection(current === sectionIds[0] ? nearestId : current);
    };

    syncActiveSection();
    window.addEventListener("scroll", syncActiveSection, { passive: true });
    window.addEventListener("resize", syncActiveSection);
    return () => {
      window.removeEventListener("scroll", syncActiveSection);
      window.removeEventListener("resize", syncActiveSection);
    };
  }, [sectionIds]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Nav>
        <NavbarContainer {...navSpotlight}>
        <NavLogo to={basePath}>
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
            href={sectionHref("about")}
            className={activeSection === "about" ? "active" : ""}
            onClick={() => {
              handleSectionNavigate("about");
            }}
          >
            About
          </NavLink>
          <NavLink
            href={sectionHref("skills")}
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => {
              handleSectionNavigate("skills");
            }}
          >
            Skills
          </NavLink>
          <NavLink
            href={sectionHref("experience")}
            className={activeSection === "experience" ? "active" : ""}
            onClick={() => {
              handleSectionNavigate("experience");
            }}
          >
            Experience
          </NavLink>
          <NavLink
            href={sectionHref("projects")}
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => {
              handleSectionNavigate("projects");
            }}
          >
            Projects
          </NavLink>
          <NavLink
            href={sectionHref("education")}
            className={activeSection === "education" ? "active" : ""}
            onClick={() => {
              handleSectionNavigate("education");
            }}
          >
            Education
          </NavLink>
          <NavLink
            href={sectionHref("blogs")}
            className={activeSection === "blogs" ? "active" : ""}
            onClick={() => {
              handleSectionNavigate("blogs");
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
              href={sectionHref("about")}
              className={activeSection === "about" ? "active" : ""}
              onClick={() => {
                handleSectionNavigate("about");
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href={sectionHref("skills")}
              className={activeSection === "skills" ? "active" : ""}
              onClick={() => {
                handleSectionNavigate("skills");
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href={sectionHref("experience")}
              className={activeSection === "experience" ? "active" : ""}
              onClick={() => {
                handleSectionNavigate("experience");
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href={sectionHref("projects")}
              className={activeSection === "projects" ? "active" : ""}
              onClick={() => {
                handleSectionNavigate("projects");
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href={sectionHref("education")}
              className={activeSection === "education" ? "active" : ""}
              onClick={() => {
                handleSectionNavigate("education");
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href={sectionHref("blogs")}
              className={activeSection === "blogs" ? "active" : ""}
              onClick={() => {
                handleSectionNavigate("blogs");
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
      <NavSpacer aria-hidden="true" />
    </>
  );
};

export default Navbar;
