import React, { lazy, Suspense } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  HeroTextColumn,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  HeadlineGroup,
  Greeting,
  NameHeading,
  RolePrefix,
  Span,
  DescriptionBlock,
  DescriptionLead,
  DescriptionList,
  DescriptionListItem,
  ResumeButton,
  ProfileFrame,
} from "./HeroStyle";
const HeroImg = `${import.meta.env.BASE_URL}me-hero.webp`;
const HeroBgAnimation = lazy(() => import("../HeroBgAnimation"));
const Typewriter = lazy(() => import("typewriter-effect"));
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <Suspense fallback={null}>
            <HeroBgAnimation />
          </Suspense>
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <HeroTextColumn>
              <HeadlineGroup>
                <Greeting>Hi, I am</Greeting>
                <NameHeading>{Bio.name}</NameHeading>
              </HeadlineGroup>
              <TextLoop>
                <RolePrefix>I&apos;m a</RolePrefix>
                <Span>
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
                </Span>
              </TextLoop>
              <DescriptionBlock>
                <DescriptionLead>{Bio.description.lead}</DescriptionLead>
                <DescriptionList>
                  {Bio.description.bullets.map((line) => (
                    <DescriptionListItem key={line}>
                      {line}
                    </DescriptionListItem>
                  ))}
                </DescriptionList>
              </DescriptionBlock>
            </HeroTextColumn>
            <ResumeButton
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <ProfileFrame>
              <Img
                src={HeroImg}
                alt="Jimmy Ramani"
                width="392"
                height="392"
                fetchPriority="high"
                decoding="async"
              />
            </ProfileFrame>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
