import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroStyled";
import { Button } from "../ButtonStyled";

import Video from "../../videos/video-10.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>

        <HeroContent>
          <HeroH1>Invest Today For Secured Tomorrow</HeroH1>
          <HeroP>
            Sign up for a new account to start investing in stocks, mutual
            funds, and more..
          </HeroP>

          <HeroBtnWrapper>
            <Button
              to="signup"
              smooth={true}
              duration={400}
              spy={true}
              exact="true"
              offset={-80}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              <h4>Get started</h4> {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
