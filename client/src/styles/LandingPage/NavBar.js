import styled from "styled-components";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,500&family=Raleway:wght@500&display=swap");
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 6rem;

  .links {
    cursor: pointer;
  }

  img {
    width: 30px;
    height: auto;
  }

  p {
    font-family: "Cormorant Garamond", serif;
    font-size: 2rem;
    margin-left: -80px;
  }

  div {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: inherit;
      font-family: "Raleway", sans-serif;
      font-size: 0.9rem;
      margin: 0.5rem;

      &:hover {
        color: #776b5d;
      }
    }
    .search {
      margin-left: 9rem;
    }
  }
`;

const styles = {
  Wrapper,
  Nav,
};

export default styles;
