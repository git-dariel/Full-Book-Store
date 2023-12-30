import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "../../styles/MainHomePage/NavBar";
import appleLogo from "/book.png";

const NavBar = () => {
  const navigate = useNavigate();

  function handleLogout() {
    const confirm = window.confirm("Are you sure you want to log out?");

    if (!confirm) {
      return;
    } else {
      sessionStorage.removeItem("token");
      localStorage.removeItem("toastShown");
      navigate("/");
    }
  }

  return (
    <style.Container>
      <style.Wrapper>
        <style.Left>
          <style.Logo src={appleLogo} alt="apple logo" />
          <h1>SinagTalata</h1>
        </style.Left>
        <style.Right>
          <style.MenuItem>
            <Link className="cart-link" to="/cart">
              <MdOutlineShoppingCart className="cart-icon" />
            </Link>

            <HiOutlineLogout className="logout-icon" onClick={handleLogout} />
          </style.MenuItem>
        </style.Right>
      </style.Wrapper>
    </style.Container>
  );
};

export default NavBar;
