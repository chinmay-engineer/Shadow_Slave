import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";

import splashImage from "../../assets/splash.jpg";

const Splash = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const loadingMessages = [
    "Initializing System",
    "Loading Resources",
    "Preparing Experience",
    "Almost Ready",
    "Launching"
  ];

  useEffect(() => {
    // Progress bar animation (8 seconds total for smoother feel)
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 / 80); // 80 steps for 8 seconds (100/80 = 1.25 per 100ms)
      });
    }, 100);

    // Change loading messages every 1.6-2 seconds
    const messageInterval = setInterval(() => {
      setCurrentTextIndex(prev => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1800);

    // Fade out after 6 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 6000);

    // Navigate after 8 seconds
    const navigateTimer = setTimeout(() => {
      navigate("/home");
    }, 8000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearTimeout(fadeTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  useEffect(() => {
    setLoadingText(loadingMessages[currentTextIndex]);
  }, [currentTextIndex]);

  return (
    <div className={`splash-container ${fadeOut ? "fade-out" : ""}`}>
      {/* 3D Parallax Background - Brighter */}
      <div 
        className="splash-bg-3d"
        style={{ backgroundImage: `url(${splashImage})` }}
      ></div>
      
      {/* Lighter Gradient Overlay - Removed Purple */}
      <div className="gradient-overlay-bright"></div>
      
      {/* Animated Grid Lines - White/Silver */}
      <div className="grid-lines-bright"></div>
      
      {/* Particle System - White/Gold */}
      <div className="particle-system-bright">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="particle-bright" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${3 + Math.random() * 5}s`,
            width: `${2 + Math.random() * 5}px`,
            height: `${2 + Math.random() * 5}px`,
          }}></div>
        ))}
      </div>

      {/* Floating Orbs - White/Gold */}
      <div className="floating-orbs-bright">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="orb-bright" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${10 + i * 2}s`,
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
          }}></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="splash-content-bright">
        {/* 3D Logo Container - Gold/Silver Theme */}
        <div className="logo-bright">
          <div className="logo-cube-bright">
            <div className="logo-cube-face-bright front">⚔️</div>
            <div className="logo-cube-face-bright back">✨</div>
            <div className="logo-cube-face-bright left">📖</div>
            <div className="logo-cube-face-bright right">🌟</div>
            <div className="logo-cube-face-bright top">⭐</div>
            <div className="logo-cube-face-bright bottom">💫</div>
          </div>
          <div className="logo-glow-ring-bright"></div>
        </div>

        {/* Animated Title - Bright White/Gold */}
        <div className="title-bright-container">
          <h1 className="title-bright">
            <span className="title-line-bright" data-text="SHADOW">SHADOW</span>
            <span className="title-line-bright" data-text="SLAVE">SLAVE</span>
          </h1>
          <div className="title-shadow-bright"></div>
          <div className="title-sparks-bright">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="spark-bright" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${0.5 + Math.random() * 1}s`,
              }}></div>
            ))}
          </div>
        </div>

        {/* Animated Loading Message */}
        <div className="loading-message-bright">
          <div className="message-icon-bright">⚡</div>
          <p className="loading-text-bright">{loadingText}</p>
          <div className="message-dots-bright">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>

        {/* Progress Bar - Gold/White */}
        <div className="progress-container-bright">
          <div className="progress-bar-bright" style={{ width: `${progress}%` }}>
            <div className="progress-glow-bright"></div>
          </div>
          <div className="progress-percentage-bright">{Math.floor(progress)}%</div>
        </div>

        {/* Creator Credit */}
        <div className="creator-bright">
          <div className="creator-line-bright"></div>
          <p>Created by <span className="creator-name-bright">Chinmay</span></p>
          <div className="creator-line-bright"></div>
        </div>

        {/* Decorative Elements - Gold/White */}
        <div className="corner-elements-bright">
          <div className="corner-bright corner-tl-bright"></div>
          <div className="corner-bright corner-tr-bright"></div>
          <div className="corner-bright corner-bl-bright"></div>
          <div className="corner-bright corner-br-bright"></div>
        </div>
      </div>

      {/* Scanline Effect - Subtle */}
      <div className="scanline-bright"></div>
    </div>
  );
};

export default Splash;
