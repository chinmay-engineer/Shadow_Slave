import React, { useState, useEffect } from "react";
import "./Login.css";

import logo from "../../assets/shadowicon.webp";
import background from "../../assets/backg.jpg";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "kuchuP" && password === "shadow1234") {
      setIsLoading(true);
      localStorage.setItem("auth", "true");
      
      // Simulate loading effect
      setTimeout(() => {
        setIsAuthenticated(true);
      }, 1000);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      alert("Invalid Login Credentials");
    }
  };

  // Add floating animation effect to background
  useEffect(() => {
    const container = document.querySelector('.login-container');
    if (container) {
      container.classList.add('animated-bg');
    }
  }, []);

  return (
    <div className="login-container">
      {/* Animated overlay gradient */}
      <div className="animated-overlay"></div>
      
      {/* Floating particles effect */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>

      <div className={`login-box ${shake ? 'shake' : ''}`}>
        <div className="logo-wrapper">
          <img
            src={logo}
            alt="Shadow Slave Logo"
            className="login-logo"
          />
          <div className="logo-glow"></div>
        </div>

        <h2>
          Shadow Slave
          <span className="glitch-text">Login</span>
        </h2>
        
        <p className="subtitle">Enter the shadow realm</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="animated-input"
              autoComplete="off"
            />
            <span className="input-border"></span>
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="animated-input"
              autoComplete="off"
            />
            <span className="input-border"></span>
          </div>

          <button type="submit" disabled={isLoading} className="login-btn">
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              <>
                <span>Enter the Shadow Realm</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </>
            )}
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default Login;
