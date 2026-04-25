import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArticleIcon from "@mui/icons-material/Article";
import CodeIcon from "@mui/icons-material/Code";
import { Bio } from "../../data/constants";

const FooterContainer = styled.footer`
  width: 100%;
  padding: clamp(44px, 7vw, 72px) clamp(16px, 4vw, 32px) clamp(28px, 5vw, 44px);
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: min(1040px, 100%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 0;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  margin: 0;
  font-size: clamp(1.25rem, 2.6vw, 1.65rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: linear-gradient(
    110deg,
    ${({ theme }) => theme.text_primary} 0%,
    ${({ theme }) => theme.text_primary} 38%,
    ${({ theme }) => theme.primary} 76%,
    rgba(249, 115, 22, 0.88) 108%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.navBorder};
  background: ${({ theme }) => theme.card_light};
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primary}66;
    color: ${({ theme }) => theme.primary};
  }
  svg {
    font-size: 1.2rem;
  }
`;

const Copyright = styled.p`
  margin: 2px 0 0;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>{Bio.name}</Logo>
        <SocialMediaIcons>
          <SocialMediaIcon
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.medium}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
          >
            <ArticleIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.codepen}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodePen"
          >
            <CodeIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; {year} {Bio.name}. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
