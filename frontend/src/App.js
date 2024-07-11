import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import { SignUp } from "./components/Register";
import { Home } from "./components/Home";

export default function App() {
  return (
    <div>
      <Navbar isLoggedIn={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Add other routes as necessary */}
      </Routes>
    </div>
  );
}
