import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: rgb(12 13 14);
`;

export const FooterWrap = styled.div`
  padding: 35px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
    margin-left: -6px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin-right: 60px;
    margin-left: 40px;
  }
  @media screen and (max-width: 655px) {
    flex-direction: column;
    margin-right: 0px;
    margin-left: 0px;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: rgb(0 227 204);
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-content: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-left: 40px;
  font-weight: bold;

  @media screen and (max-width: 816px) {
    margin-right: 40px;
    align-items: center;
    text-align: center;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  margin-left: 60px;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 816px) {
    margin-right: 80px;
  }
  @media screen and (max-width: 396px) {
    margin-right: 53px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-right: 30px;

  @media screen and (max-width: 396px) {
    margin-left: 25px;
    width: 190px;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
