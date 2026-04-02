import React, { useRef, useEffect, useState } from "react";
import "./Characters.css";

import CharacterCard from "../../components/CharacterCard/CharacterCard";

// Character Images
import sunny from "../../assets/Sunless.jpg";
import madPrince from "../../assets/Sunless (1).jpg";
import nephis from "../../assets/Nephis - ShadowSlave - amandak3166 on tiktok.jpg";
import cassie from "../../assets/Cassie - ShadowSlave - amandak3166 on tiktok.jpg";
import kai from "../../assets/Kai.jpg";
import jet from "../../assets/Jet.jpg";
import effie from "../../assets/Effie.jpg";
import mordret from "../../assets/mordret prince of nothing wallpaper shadow slave.jpg";

// Background
import bg from "../../assets/The Forgotten Shore.jpg";

const Characters = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Character Data
  const characters = [
    {
      name: "Sunny",
      image: sunny,
      arcs: "Forgotten Shore • Dark City • Antarctica • Third Nightmare",
      abilities: ["Shadow Step", "Shadow Manifestation", "Shadow Control", "Shadow Sense"],
      power: 95
    },
    {
      name: "Mad Prince",
      image: madPrince,
      arcs: "Nightmare Arc • Third Nightmare • Future Timeline",
      abilities: ["Absolute Shadow Dominion", "Shadow Avatar Creation", "Dark Sovereign Aura"],
      power: 100
    },
    {
      name: "Nephis",
      image: nephis,
      arcs: "Forgotten Shore • Dream Realm • Antarctica",
      abilities: ["Sacred Flame", "Flame Regeneration", "Starfire Burst"],
      power: 98
    },
    {
      name: "Cassie",
      image: cassie,
      arcs: "Forgotten Shore • Prophecy Arc • Antarctica",
      abilities: ["Future Vision", "Fate Reading", "Danger Prediction"],
      power: 82
    },
    {
      name: "Kai",
      image: kai,
      arcs: "Dark City • Antarctica • Third Nightmare",
      abilities: ["Hypnotic Voice", "Enhanced Perception", "Truth Detection", "Sound Waves"],
      power: 78
    },
    {
      name: "Jet",
      image: jet,
      arcs: "Government Arc • Antarctica • Third Nightmare",
      abilities: ["Soul Strike", "Death Sense", "Execution Aura", "Soul Reaping"],
      power: 92
    },
    {
      name: "Effie",
      image: effie,
      arcs: "Forgotten Shore • Antarctica • Third Nightmare",
      abilities: ["Titan Strength", "Iron Body", "Warrior Instinct", "Berserker Mode"],
      power: 90
    },
    {
      name: "Mordret",
      image: mordret,
      arcs: "Prince of Nothing • Second Nightmare • Third Nightmare",
      abilities: ["Mirror Possession", "Reflection Manipulation", "Mirror Clone", "Soul Mirror"],
      power: 97
    }
  ];

  // Keyboard Navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!sliderRef.current) return;
      
      const scrollAmount = 300;
      
      if (e.key === "ArrowRight") {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
      
      if (e.key === "ArrowLeft") {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Mouse Drag Scrolling
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grab";
    }
  };

  return (
    <div
      className="characters-page"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Animated Particles */}
      <div className="particles-bg">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }}></div>
        ))}
      </div>

      {/* Header */}
      <div className="characters-header">
        <h1 className="characters-title">
          <span className="title-glow">Shadow Slave</span>
          <span className="title-sub">Awakened Ones</span>
        </h1>
        <div className="header-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-icon">⚔️</div>
          <div className="decoration-line"></div>
        </div>
        <p className="characters-description">
          Explore the legendary warriors of the Dream Realm
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>← Scroll →</span>
        <div className="indicator-arrow">↔</div>
      </div>

      {/* Character Slider */}
      <div 
        className="characters-slider" 
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {characters.map((char, index) => (
          <CharacterCard
            key={index}
            image={char.image}
            name={char.name}
            arcs={char.arcs}
            abilities={char.abilities}
            power={char.power}
          />
        ))}
      </div>

      {/* Bottom Gradient */}
      <div className="bottom-gradient"></div>
    </div>
  );
};

export default Characters;
