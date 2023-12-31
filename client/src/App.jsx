import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MainHomePage from "./pages/MainHomePage";
import Cart from "./pages/Cart";
import { useState, useEffect } from "react";
import SuccessPage from "./pages/SuccessPage";

function App() {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Set token in sessionStorage when it changes
  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", JSON.stringify(token));
      setIsLoggedIn(true);
    }
  }, [token]);

  // Get token from sessionStorage on initial render
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(JSON.parse(storedToken));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn setToken={setToken} />} />
          {token ? (
            <Route
              path="/main"
              element={<MainHomePage isLoggedIn={isLoggedIn} />}
            />
          ) : (
            ""
          )}
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
