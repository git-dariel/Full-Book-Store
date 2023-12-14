import React from "react";
import style from "../../styles/LandingPage";
import NavBar from "./NavBar";
import img from "../../assets/img.jpg";

const Section = () => {
  return (
    <style.Wrapper>
      <style.Section>
        <NavBar />
        <p className="content">— Collections</p>

        <div className="title">
          <p>
            Poetry collections <br></br> to help you under<span>stand</span> the
            world
          </p>
          <img src={img} alt="blank" />
        </div>
      </style.Section>
    </style.Wrapper>
  );
};

export default Section;
