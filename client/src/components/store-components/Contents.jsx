import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useGetAllProductsQuery } from "../../features/productsApi";
import style from "../../styles/MainHomePage/Contents";

const Contents = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = async (product) => {
    dispatch(addToCart(product));
  };

  return (
    <style.HomeContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured</p>
      ) : (
        <>
          <h2>Featured Books</h2>
          <style.Products>
            {data?.map((product) => (
              <style.Product>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />

                <p className="price">₱{product.price}</p>

                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </style.Product>
            ))}
          </style.Products>
        </>
      )}
    </style.HomeContainer>
  );
};

export default Contents;
