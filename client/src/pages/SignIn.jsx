import React, { useState } from "react";
import { supabase } from "../Supabase/supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Auth/SignIn";
import toast, { Toaster } from "react-hot-toast";

const SignIn = ({ setToken }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log(data);
      setToken(data);
      navigate("/main");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <styles.Wrapper>
      <div className="container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <styles.InputWrapper>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </styles.InputWrapper>
          <styles.ButtonWrap>
            <button type="submit">Sign In</button>{" "}
            <Toaster position="top-center" reverseOrder={false} />
          </styles.ButtonWrap>

          <p className="Home">
            Don't have an account?{" "}
            <Link className="home" to="/signup">
              Sign Up
            </Link>
          </p>

          <p className="Descript">
            <Link className="descript" to="/">
              Go Home
            </Link>
          </p>
        </form>
      </div>
    </styles.Wrapper>
  );
};

export default SignIn;
