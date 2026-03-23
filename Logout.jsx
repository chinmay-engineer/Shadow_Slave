import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

import bgImage from "../../assets/7.jpg";

const Logout = () => {

  const navigate = useNavigate();

  useEffect(() => {

    // show logout screen first
    const timer = setTimeout(() => {

      // remove login session
      localStorage.removeItem("auth");

      // go back to login page
      navigate("/");

    }, 2000); // 2 seconds

    return () => clearTimeout(timer);

  }, [navigate]);

  return (
    <div
      className="logout-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
        <h1>Logging Out...</h1>
        <p>You are being redirected to login page</p>
    </div>
  );
};

export default Logout;