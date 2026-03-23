import React, { useState } from "react";
import "./Login.css";

import logo from "../../assets/shadowicon.webp";
import background from "../../assets/backg.jpg";

const Login = ({ setIsAuthenticated }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "shadow123") {
      localStorage.setItem("auth", "true");
      setIsAuthenticated(true);
    } else {
      alert("Invalid Login Credentials");
    }
  };

  return (
    <div 
      className="login-container"
      style={{ backgroundImage: `url(${background})` }}
    >

      <div className="login-box">

        <img
          src={logo}
          alt="Shadow Slave Logo"
          className="login-logo"
        />

        <h2>Shadow Slave Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;