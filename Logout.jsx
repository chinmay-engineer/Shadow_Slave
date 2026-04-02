import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

import bgImage from "../../assets/7.jpg";

const Logout = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Show logout screen then redirect
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        localStorage.removeItem("auth");
        navigate("/");
      }, 500);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [navigate]);

  return (
    <div 
      className={`logout-container ${fadeOut ? 'fade-out' : ''}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Semi-transparent overlay - now thinner to show background image */}
      <div className="overlay-gradient"></div>
      
      {/* Particles background */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Main content card */}
      <div className="logout-card">
        <div className="icon-wrapper">
          <div className="logout-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="icon-ring"></div>
        </div>

        <h1 className="glitch-text" data-text="Logging Out...">
          Logging Out...
        </h1>
        
        <p className="subtitle">Securely ending your session</p>

        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            <div className="progress-glow"></div>
          </div>
          <span className="progress-text">{Math.floor(progress)}%</span>
        </div>

        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="status-message">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4"></circle>
          </svg>
          <span>Clearing session data...</span>
        </div>
      </div>

      <div className="corner-decoration corner-tl"></div>
      <div className="corner-decoration corner-tr"></div>
      <div className="corner-decoration corner-bl"></div>
      <div className="corner-decoration corner-br"></div>
    </div>
  );
};

export default Logout;
