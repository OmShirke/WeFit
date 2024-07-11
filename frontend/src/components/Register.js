import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {};

  return (
    <div className="container" id="container">
      <div className={`form-container sign-in`}>
        <div className="form">
          <h1>Create Account</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="password" placeholder="Confirm Password" />
          <button onClick={handleSignUp}>Register</button>
        </div>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1>Already a user?</h1>
            <p>
              <button onClick={() => navigate("/Login")}>Login</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
