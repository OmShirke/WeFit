import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

// Navbar component
export const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 4 8 17"
            className="icons"
          >
            <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z" />
          </svg>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-link">
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/plans" className="nav-link">
            Plans
          </Link>
        </li>
      </ul>
      <div>
        {isLoggedIn ? (
          <button className="nav-button">Logout</button>
        ) : (
          <button onClick={() => navigate("/signup")} className="nav-link">
            Login/Register
          </button>
        )}
      </div>
    </nav>
  );
};
