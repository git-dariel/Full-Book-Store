import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MainHomePage from "./pages/MainHomePage";
import { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(JSON.parse(sessionStorage.getItem("token")));
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
            <Route path="/main" element={<MainHomePage token={token} />} />
          ) : (
            ""
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
