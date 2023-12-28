import React, { useState } from "react";
import { supabase } from "../Supabase/supabaseClient";
import { Link } from "react-router-dom";
import styles from "../styles/Auth/SignUp";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

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
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });

      if (error) throw error;
      toast.success("Check your email for verification link.");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <styles.Wrapper>
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <styles.InputWrapper>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
            />
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
            <button type="submit">Sign Up</button>{" "}
            <Toaster position="top-center" reverseOrder={false} />
          </styles.ButtonWrap>

          <p className="Home">
            Already have an account?{" "}
            <Link className="home" to="/signin">
              Sign In
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

export default SignUp;
