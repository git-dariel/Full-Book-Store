import styled from "styled-components";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,500&family=Raleway:wght@500&display=swap");

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .container {
    width: 450px;
    height: 500px;
    background-color: #ffffec;
    border-radius: 20px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2),
      -10px -10px 20px rgba(255, 255, 255, 0.05),
      -10px 10px 20px rgba(0, 0, 0, 0.2),
      10px -10px 20px rgba(255, 255, 255, 0.05),
      0px 10px 20px rgba(0, 0, 0, 0.2), 0px -10px 20px rgba(255, 255, 255, 0.05);

    h1 {
      margin-top: 5rem;
      text-align: center;
      font-family: "Raleway", sans-serif;
      font-weight: 100;
    }
  }

  input {
    margin-bottom: 10px;
    padding: 10px;
    width: 250px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s;
    font-family: "Raleway", sans-serif;

    &:focus {
      border-color: #7d7dff;
    }
  }

  button {
    height: 40px;
    width: 270px;
    font-size: 16px;
    background-color: #323264;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    font-size: 0.9rem;

    &:hover {
      background-color: #46468b;
      transition: 0.2s ease-in;
    }
  }

  .Home {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    font-family: "Raleway", sans-serif;
    margin-top: 1rem;

    .home {
      color: blue;
      font-family: "Raleway", sans-serif;
    }
  }

  .Descript {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    font-family: "Raleway", sans-serif;
    margin-top: 1rem;

    .descript {
      color: blue;
      font-family: "Raleway", sans-serif;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const styles = {
  Wrapper,
  InputWrapper,
  ButtonWrap,
};

export default styles;
