import React from "react";
import { useNavigate } from "react-router-dom";

const MainHomePage = ({ token }) => {
  const navigate = useNavigate();

  function handleLogout() {
    const confirm = window.confirm("Are you sure you want to log out?");

    if (!confirm) {
      return;
    } else {
      sessionStorage.removeItem("token");
      navigate("/");
    }
  }

  return (
    <div>
      <h1>Welcome to SinagTalata, {token.user.user_metadata.full_name}</h1>

      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default MainHomePage;
