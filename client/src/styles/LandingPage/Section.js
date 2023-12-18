import styled from "styled-components";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,500&family=Raleway:wght@500&display=swap");
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  margin-top: 4rem;
  width: 70rem;
  height: 40rem;
  background-color: #d7c6b6;
  border-radius: 3rem;
  border: 4px solid black;
  position: relative;

  .content {
    font-size: 1.9rem;
    font-style: italic;
    position: absolute;
    top: 7rem;
    left: 7rem;
    z-index: 2;
  }

  .title {
    display: inline-flex;
    margin-top: 1rem;
    position: absolute;

    p {
      font-size: 4rem;
      left: 5rem;
      z-index: 1;
      padding-right: 25rem;
      margin-left: 7rem;

      span {
        color: #d7c6b6;
      }
    }

    img {
      width: 450px;
      height: 420px;
      border-radius: 50%;
      margin-right: 7rem;
      position: absolute;
      left: 34.5rem;
      top: 2rem;
    }
  }
`;

const styles = {
  Wrapper,
  Section,
};

export default styles;
