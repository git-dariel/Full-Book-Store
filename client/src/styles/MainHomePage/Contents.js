import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 0rem 4rem;

  h2 {
    font-size: 40px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 665px) {
      font-size: 2rem;
    }
  }
`;

const Products = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem auto;
  padding: 1rem;
  border-radius: 15px;
  width: 250px;
  max-width: 100%;
  height: 400px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.3),
    2px 2px 5px rgba(94, 104, 121, 0.3);

  h3 {
    font-size: 20px;
    font-weight: 400;
    text-align: center;
  }

  img {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  .price {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin-top: 1rem;
    font-weight: 400;
    letter-spacing: 1.15px;
    background-color: #739072;
    color: black;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: #4f6f52;
      color: white;
      transition: 0.3s ease-in;
    }
  }
`;

const style = {
  HomeContainer,
  Products,
  Product,
};

export default style;
