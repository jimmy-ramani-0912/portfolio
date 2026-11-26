import React, { lazy, Suspense } from "react";
import {
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  RoleBadge,
  Headline,
  HeadlineAccent,
  Lead,
  ButtonRow,
  PrimaryButton,
  SecondaryButton,
  StatsRow,
  Stat,
  StatValue,
  StatLabel,
  HeroRightContainer,
  PortraitCard,
  PortraitImageWrap,
  Img,
  PortraitCaption,
  CaptionName,
  CaptionRole,
} from "./HeroStyle";
import { Bio, experiences, projects } from "../../data/constants";

const HeroImg = `${import.meta.env.BASE_URL}me-hero.webp`;
const Typewriter = lazy(() => import("typewriter-effect"));

const uniqueProjects = new Set(projects.map((p) => p.title)).size;

const stats = [
  { value: "2.6+", label: "Years experience" },
  { value: String(uniqueProjects), label: "Projects built" },
  { value: experiences[0].company.split(" ")[0], label: "Currently at" },
];

const HeroSection = () => (
  <HeroContainer id="about" aria-label="Introduction">
    <HeroInnerContainer>
      <HeroLeftContainer id="Left">
        <RoleBadge>
          <Suspense fallback={Bio.roles[0]}>
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
                delay: 45,
                deleteSpeed: 28,
              }}
            />
          </Suspense>
        </RoleBadge>
        <Headline>
          Hi, I&apos;m {Bio.name}. I build scalable web products{" "}
          <HeadlineAccent>front to back.</HeadlineAccent>
        </Headline>
        <Lead>{Bio.description.lead}</Lead>
        <ButtonRow>
          <PrimaryButton href="#projects">View selected work</PrimaryButton>
          <SecondaryButton
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download resume
          </SecondaryButton>
        </ButtonRow>
        <StatsRow>
          {stats.map((s) => (
            <Stat key={s.label}>
              <StatValue>{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
            </Stat>
          ))}
        </StatsRow>
      </HeroLeftContainer>

      <HeroRightContainer id="Right">
        <PortraitCard>
          <PortraitImageWrap>
            <Img
              src={HeroImg}
              alt={Bio.name}
              width="640"
              height="640"
              fetchpriority="high"
              decoding="async"
            />
          </PortraitImageWrap>
          <PortraitCaption>
            <CaptionName>{Bio.name}</CaptionName>
            <CaptionRole>Full Stack Developer</CaptionRole>
          </PortraitCaption>
        </PortraitCard>
      </HeroRightContainer>
    </HeroInnerContainer>
  </HeroContainer>
);

export default HeroSection;
