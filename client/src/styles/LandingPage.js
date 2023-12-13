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
  background-color: white;
  border-radius: 3rem;
  border: 4px solid black;
  font-family: "Cormorant Garamond", serif;
`;

const styles = {
  Wrapper,
  Section,
};

export default styles;
