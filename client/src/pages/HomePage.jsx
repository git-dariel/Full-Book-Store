import React from "react";
import Section from "../components/Landing Page/Section";
import style from "../styles/LandingPage/HomePageStyle";
import About from "../components/About/About";
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
