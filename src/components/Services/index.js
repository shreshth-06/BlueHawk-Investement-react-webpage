import React from "react";

import Icon1 from "../../images/svg-transparency.svg";
import Icon2 from "../../images/svg-safety.svg";
import Icon3 from "../../images/svg-course.svg";
import Icon4 from "../../images/svg-gold.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesStyled";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>

        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}></ServicesIcon>
            <ServicesH2>Transparency in between</ServicesH2>
            <ServicesP>
              Money and rights of the investors investing are protected by the
              regulatory bodies.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}></ServicesIcon>
            <ServicesH2>Safety against Inflation</ServicesH2>
            <ServicesP>
              Inflation is kept on track as the goal of investement is to secure
              your future.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}></ServicesIcon>
            <ServicesH2>Stock Market Courses</ServicesH2>
            <ServicesP>
              Unlock our membership card to get courses or just sign up to get
              it free for 2 months.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon4}></ServicesIcon>
            <ServicesH2>Digital Gold Purchase</ServicesH2>
            <ServicesP>
              No cost of storing digital gold. Get real-time market price
              wherever you buy or sell digital gold.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
