import React from "react";
import {
  TopbarContainer,
  Icon,
  CloseIcon,
  TopbarWrapper,
  TopbarLink,
  TopbarMenu,
  TopBtnWrap,
  TopBtnRoute,
} from "./TopBarStyled";

const Topbar = ({ isOpen, toggle }) => {
  return (
    <>
      <TopbarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>

        <TopbarWrapper>
          <TopbarMenu>
            <TopbarLink to="about" onClick={toggle}>
              About
            </TopbarLink>
            <TopbarLink to="explore" onClick={toggle}>
              Explore
            </TopbarLink>
            <TopbarLink to="services" onClick={toggle}>
              Services
            </TopbarLink>
            <TopbarLink to="signup" onClick={toggle}>
              Sign Up
            </TopbarLink>
          </TopbarMenu>

          <TopBtnWrap>
            <TopBtnRoute to="/signin">
              <h4>Sign In</h4>
            </TopBtnRoute>
          </TopBtnWrap>
        </TopbarWrapper>
      </TopbarContainer>
    </>
  );
};

export default Topbar;
