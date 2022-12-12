import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  TopLine,
  Heading,
} from "./InfoElements";
import ImageTest from "../../images/logoBatGamer.png";
import "./slider.css";

const SponsorSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <center>
          <TextWrapper>
            <TopLine>BatGamer</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
          </TextWrapper>
          </center>
          <div class="sliding">
            <div class="slider">
              <div class="slide-track">
                <div class="slide">
                  <img alt ="logo" src={ImageTest} />
                </div>
                <div class="slide">
                  <img alt="logo" src={ImageTest} />
                </div>
                <div class="slide">
                  <img alt="logo"  src={ImageTest} />
                </div>
                <div class="slide">
                  <img alt="logo"  src={ImageTest} />
                </div>
                <div class="slide">
                  <img alt="logo"  src={ImageTest} />
                </div>
                <div class="slide">
                  <img alt="logo"  src={ImageTest} />
                </div>
              </div>
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default SponsorSection;
