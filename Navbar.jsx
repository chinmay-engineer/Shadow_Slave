import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

import icon from "../../assets/icon.jpg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const navLinks = [
    { path: "/", name: "Home", icon: "🏠" },
    { path: "/characters", name: "Characters", icon: "👥" },
    { path: "/characterdetails", name: "Details", icon: "📜" },
    { path: "/about", name: "About", icon: "⚔️" },
    { path: "/logout", name: "Logout", icon: "🚪" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Animated gradient background */}
      <div className="navbar-bg-glow"></div>
      
      {/* 3D Logo Section */}
      <div className="navbar-logo-3d">
        <div className="logo-3d-container">
          <img src={icon} alt="Shadow Slave Logo" className="logo-3d" />
          <div className="logo-glow-ring"></div>
          <div className="logo-shine"></div>
        </div>
        <div className="logo-text">SHADOW SLAVE</div>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links-3d">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-link-3d ${activeLink === link.path ? "active" : ""} ${
              hoveredLink === link.path ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredLink(link.path)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span className="nav-icon">{link.icon}</span>
            <span className="nav-text">{link.name}</span>
            <div className="nav-glow"></div>
            <div className="nav-ripple"></div>
          </Link>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="navbar-decoration">
        <div className="navbar-line"></div>
        <div className="navbar-dot"></div>
        <div className="navbar-line"></div>
      </div>

      {/* 3D Border Effect */}
      <div className="navbar-border-3d"></div>
    </nav>
  );
}

export default Navbar;
