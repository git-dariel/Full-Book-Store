import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const MainHomePage = ({ token, isLoggedIn}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      toast.success("Logged in successfully!");
    }
  }, [isLoggedIn]);

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
      <Toaster position="top-right" reverseOrder={false}/>
    </div>
  );
};

export default MainHomePage;
