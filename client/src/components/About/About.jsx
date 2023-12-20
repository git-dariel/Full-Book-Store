import React from "react";
import style from "../../styles/About/AboutStyle";
import bgImg from "../../assets/img.jpg";

const About = () => {
  return (
    <>
      <style.Wrapper id="about">
        <style.About>
          <p className="title">— Project</p>
          <p className="about">About the project</p>

          <p className="def">
            Vintage Books is a fictional project I made to improve my skills.
            Vintage Books is a local book-shop with the very best vintage
            collection. As a bookshop with many collectible books they wanted to
            feel and look true to their nature. <br></br> <br></br>When working
            on Vintage Books. I went with an antique vibe, a slight touch of
            modern and a vintage-aesthetic color combination.
          </p>

          <img src={bgImg} alt="background image" />
        </style.About>
      </style.Wrapper>
    </>
  );
};

export default About;
