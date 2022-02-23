import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterStyled";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">How it works</FooterLink>
                <FooterLink to="/">Testimonials</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <FooterLink to="/">Terms of Services</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Partnerships</FooterLinkTitle>
                <FooterLink to="/">Forbes</FooterLink>
                <FooterLink to="/">Business Insider</FooterLink>
                <FooterLink to="/">Bloomberg</FooterLink>
                <FooterLink to="/">MSN Money</FooterLink>
                <FooterLink to="/">SeekingAlpha</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Sponsorships</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink
                  to={{
                    pathname: "https://www.instagram.com/_shreshth_24/",
                  }}
                  target="_blank"
                  aria-label="Instagram"
                >
                  Instagram
                </FooterLink>
                <FooterLink
                  to={{
                    pathname:
                      "https://www.linkedin.com/in/shreshth-chaturvedi-320745181",
                  }}
                  target="_blank"
                  aria-label="Instagram"
                >
                  LinkedIn
                </FooterLink>
                <FooterLink
                  to={{
                    pathname: "https://www.facebook.com/shreshth.chaturvedi.56",
                  }}
                  target="_blank"
                  aria-label="Instagram"
                >
                  Facebook
                </FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
                <FooterLink to="/">YouTube</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>

          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                BlueHawk
              </SocialLogo>

              <WebsiteRights>
                BlueHawk © {new Date().getFullYear()} All Rights Reserved
              </WebsiteRights>

              <SocialIcons>
                <SocialIconLink
                  href="https://www.facebook.com/shreshth.chaturvedi.56"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/_shreshth_24/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/in/shreshth-chaturvedi-320745181"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
