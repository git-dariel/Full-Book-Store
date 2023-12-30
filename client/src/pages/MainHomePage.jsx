import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contents from "../components/store-components/Contents";
import NavBar from "../components/store-components/NavBar";

const MainHomePage = ({ isLoggedIn }) => {
  // const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn && !localStorage.getItem("toastShown")) {
      toast.success("Logged in successfully!");
      localStorage.setItem("toastShown", true);
    }
  }, [isLoggedIn]);

  return (
    <div>
      <NavBar />
      {/* <h1>Welcome to SinagTalata, {token.user.user_metadata.full_name}</h1> */}
      <Contents />
      <Toaster position="top-right" reverseOrder={false} />
      <ToastContainer />
    </div>
  );
};

export default MainHomePage;
