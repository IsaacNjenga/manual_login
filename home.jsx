import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;
