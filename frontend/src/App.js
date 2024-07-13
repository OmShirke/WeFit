import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/Login/Register";
import { Login } from "./pages/Login/Login";
import { Home } from "./components/Home";
import { Diet } from "./pages/Diet";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Diet" element={<Diet />} />
        {/* Add other routes as necessary */}
      </Routes>
    </div>
  );
}
