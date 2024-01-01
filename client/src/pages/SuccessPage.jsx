import React from "react";
import "../styles/Success/Success.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/main");
  };

  return (
    <div className="success-page">
      <h1 className="success-message">
        Congratulations, you have successfully ordered your books.
      </h1>

      <button className="goBack" onClick={handleButtonClick}>
        Continue Shopping
      </button>
      <ToastContainer />
    </div>
  );
};

export default SuccessPage;
