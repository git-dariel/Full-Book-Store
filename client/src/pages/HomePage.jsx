import React from "react";
import About from "../components/About/About";
import Section from "../components/Landing Page/Section";
import style from "../styles/LandingPage/HomePageStyle";
import ScrollBarStyle from "../styles/Scrollbar/ScrollBarStyle";

const HomePage = () => {
  return (
    <>
      <style.Wrapper>
        <Section />
      </style.Wrapper>
      <About />
      <ScrollBarStyle />
    </>
  );
};

export default HomePage;
