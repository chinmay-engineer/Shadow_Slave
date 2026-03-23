import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Splash.css";

import splashImage from "../../assets/splash.jpg";

const Splash = () => {

  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {

    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    const timer2 = setTimeout(() => {
      navigate("/home");
    }, 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };

  }, [navigate]);

  return (

    <div
      className="splash-container"
      style={{
        backgroundImage: `url(${splashImage})`,
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease"
      }}
    >

      <div className="splash-overlay">

        <h1 className="splash-title">
          WELCOME TO SHADOW SLAVE PAGE
        </h1>

        <p className="splash-subtitle">
          Created by Chinmay
        </p>

      </div>

    </div>

  );
};

export default Splash;