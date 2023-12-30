import styled from "styled-components";

const Container = styled.div`
  border-bottom: 1px solid gray;
`;

const Wrapper = styled.div`
  padding: 0px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 665px) {
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 665px) {
    h1 {
      font-size: 20px;
      position: absolute;
      margin-top: 35px;
      margin-left: 2rem;
    }
  }
`;

const Logo = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-right: 15px;

  @media (max-width: 665px) {
    margin-top: -0.7rem;
    margin-bottom: -2rem;
    width: 20px;
    height: 20px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 665px) {
    padding: 0px 5px;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-weight: 900;
  padding: 0px 20px;

  .cart-icon {
    height: 25px;
    width: 25px;
    margin-right: 30px;

    @media (max-width: 665px) {
      height: 20px;
      width: 20px;
    }
  }

  .cart-link {
    cursor: pointer;
    color: black;

    &:hover {
      color: gray;
      transition: 0.3s ease-in;
    }
  }

  .logout-icon {
    height: 25px;
    width: 25px;
    cursor: pointer;
    color: black;

    &:hover {
      color: red;
      transition: 0.3s ease-in;
    }

    @media (max-width: 665px) {
      height: 20px;
      width: 20px;
    }
  }
`;

const style = {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  MenuItem,
};

export default style;
