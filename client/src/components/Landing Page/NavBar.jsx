import React from "react";
import style from "../../styles/NavBar";

const NavBar = () => {
  return (
    <style.Wrapper>
      <style.Nav>
        <p>Vintage Books</p>
        <div>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Books</a>
          <a href="#">Events</a>
          <a href="#">Contact & Hours</a>
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
