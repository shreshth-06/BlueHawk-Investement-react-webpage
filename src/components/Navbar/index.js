import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarStyled";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              BlueHawk
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={400}
                  spy={true}
                  exact="true"
                  offset={-80}
                  // activeClass="active"
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="explore"
                  smooth={true}
                  duration={400}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Explore
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={400}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="signup"
                  activeClass="active"
                  smooth={true}
                  duration={400}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>

            <NavBtn>
              <NavBtnLink to="/signIn">
                <h5>Sign In</h5>
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
