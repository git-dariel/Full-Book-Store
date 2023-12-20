import styled from "styled-components";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,500&family=Raleway:wght@500&display=swap");
`;

const About = styled.div`
  .title {
    font-size: 1.8rem;
    font-style: italic;
    margin: 200px 0px 0px 100px;
    padding-left: 100px;
    margin-bottom: -50px;
  }
  .about {
    font-size: 4rem;
    padding-left: 200px;
  }
  .def {
    text-align: justify;
    margin-right: 860px;
    margin-left: 205px;
    margin-top: -40px;
    font-family: "Raleway", sans-serif;
    font-size: 0.9rem;
  }
  img {
    width: 650px;
    height: auto;
    margin-left: 750px;
    margin-top: -390px;
    margin-bottom: 100px;
    border-radius: 15px;
  }
`;

const styles = {
  Wrapper,
  About,
};

export default styles;
