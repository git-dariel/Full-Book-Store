import React from "react";
import style from "../../styles/LandingPage/NavBar";
import bookLogo from "/book.png";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  return (
    <style.Wrapper>
      <style.Nav>
        <img src={bookLogo} alt="book logo" />
        <p>SinagTalata</p>
        <div className="links">
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
          <ScrollLink to="books" smooth={true} duration={500}>
            Books
          </ScrollLink>
          <ScrollLink to="events" smooth={true} duration={500}>
            Events
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact & Hours
          </ScrollLink>
          <a href="#" className="search">
            Search
          </a>
          <a href="#">Cart(0)</a>
        </div>
      </style.Nav>
    </style.Wrapper>
  );
};

export default NavBar;
