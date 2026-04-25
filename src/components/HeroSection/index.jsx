import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
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
import HeroImg from "../../images/photo.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
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
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                      delay: 45,
                      deleteSpeed: 28,
                    }}
                  />
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
              <Img src={HeroImg} alt="Jimmy Ramani" />
            </ProfileFrame>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
