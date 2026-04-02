import React, { useState, useEffect } from "react";
import "./CharacterDetails.css";

// Character Images
import sunny from "../../assets/Sunless.jpg";
import madPrince from "../../assets/Sunless (1).jpg";
import nephis from "../../assets/Nephis - ShadowSlave - amandak3166 on tiktok.jpg";
import cassie from "../../assets/Cassie - ShadowSlave - amandak3166 on tiktok.jpg";
import kai from "../../assets/Kai.jpg";
import jet from "../../assets/Jet.jpg";
import effie from "../../assets/Effie.jpg";
import mordret from "../../assets/mordret prince of nothing wallpaper shadow slave.jpg";

// Background Images
import sunnyBg from "../../assets/shadow slave.jpg";
import madPrinceBg from "../../assets/azure serpent and the monster butterfly.jpg";
import nephisBg from "../../assets/Nephis.jpg";
import cassieBg from "../../assets/cass.jpg";
import kaiBg from "../../assets/kaii.jpg";
import jetBg from "../../assets/jett.jpg";
import effieBg from "../../assets/eff.jpg";
import mordretBg from "../../assets/Chained Isles from Shadow Slave.jpg";

const characters = [
  {
    id: 0,
    name: "🖤 Sunny",
    image: sunny,
    bg: sunnyBg,
    realName: "Sunless",
    aspect: "Divine Shadow Aspect (Shadow Slave)",
    power: "Shadow manipulation, shadow clones, stealth abilities 🌑",
    gender: "Male",
    age: "26–28",
    kill: "Thousands of Nightmare Creatures",
    arc: "Forgotten Shore • Dark City • Antarctica • Third Nightmare",
    quote: "I don't want to be a hero. I just want to survive."
  },
  {
    id: 1,
    name: "👑 Mad Prince",
    image: madPrince,
    bg: madPrinceBg,
    realName: "Sunless (future corrupted version)",
    aspect: "Divine Shadow Aspect",
    power: "Terrifying shadow control, deadly combat mastery ⚔️",
    gender: "Male",
    age: "Unknown",
    kill: "Far beyond normal Awakened",
    arc: "Third Nightmare • Future Timeline",
    quote: "In the end, we all become what we hate."
  },
  {
    id: 2,
    name: "🔥 Nephis",
    image: nephis,
    bg: nephisBg,
    realName: "Changing Star",
    aspect: "Divine Fire Aspect",
    power: "Sacred flames, healing fire, destructive attacks 🔥",
    gender: "Female",
    age: "28",
    kill: "Elite Awakened level",
    arc: "Forgotten Shore • Dream Realm",
    quote: "The flame that burns twice as bright burns half as long."
  },
  {
    id: 3,
    name: "👁 Cassie",
    image: cassie,
    bg: cassieBg,
    realName: "Cassia",
    aspect: "Oracle / Seer Aspect",
    power: "Future sight, prophecy vision 🔮",
    gender: "Female",
    age: "26–28",
    kill: "Low (non-combat)",
    arc: "Forgotten Shore • Prophecy Arc",
    quote: "I see the future, but I can't change it."
  },
  {
    id: 4,
    name: "🎶 Kai",
    image: kai,
    bg: kaiBg,
    realName: "Nightingale",
    aspect: "Voice / Charm Aspect",
    power: "Hypnotic voice and perception 🎶",
    gender: "Male",
    age: "28–29",
    kill: "Moderate",
    arc: "Dark City • Antarctica",
    quote: "Even in darkness, there is always hope."
  },
  {
    id: 5,
    name: "❄ Jet",
    image: jet,
    bg: jetBg,
    realName: "Soul Reaper",
    aspect: "Death / Soul Aspect",
    power: "Soul attacks, killing aura ☠️",
    gender: "Female",
    age: "30–32",
    kill: "Extremely High",
    arc: "Government Arc • Antarctica",
    quote: "Death is just another beginning."
  },
  {
    id: 6,
    name: "💪 Effie",
    image: effie,
    bg: effieBg,
    realName: "Effie",
    aspect: "Titan Strength Aspect",
    power: "Immense strength and durability 💥",
    gender: "Female",
    age: "28–30",
    kill: "High",
    arc: "Forgotten Shore • Antarctica",
    quote: "Strength isn't just about muscles. It's about will."
  },
  {
    id: 7,
    name: "🐍 Mordret",
    image: mordret,
    bg: mordretBg,
    realName: "Prince of Nothing",
    aspect: "Divine Reflection Aspect",
    power: "Mirror control, body possession 🪞",
    gender: "Male",
    age: "30+",
    kill: "Extremely High",
    arc: "Second Nightmare • Third Nightmare",
    quote: "I am everyone and no one."
  }
];

const CharacterDetails = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);

  const currentChar = characters[index];
  const totalChars = characters.length;

  // Keyboard Navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setDirection(1);
        setIsAnimating(true);
        setIndex((prev) => (prev + 1) % totalChars);
        setTimeout(() => setIsAnimating(false), 500);
      }
      
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setDirection(-1);
        setIsAnimating(true);
        setIndex((prev) => (prev - 1 + totalChars) % totalChars);
        setTimeout(() => setIsAnimating(false), 500);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [totalChars]);

  // Auto-rotate background
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalChars);
    }, 8000);
    return () => clearInterval(interval);
  }, [totalChars]);

  return (
    <div
      className="details-container"
      style={{ backgroundImage: `url(${currentChar.bg})` }}
    >
      {/* Animated Fog Overlay */}
      <div className="fog-overlay">
        <div className="fog-layer layer-1"></div>
        <div className="fog-layer layer-2"></div>
      </div>

      {/* Navigation Dots */}
      <div className="nav-dots">
        {characters.map((_, i) => (
          <button
            key={i}
            className={`nav-dot ${i === index ? 'active' : ''}`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`details-content ${isAnimating ? `slide-${direction > 0 ? 'right' : 'left'}` : ''}`}>
        
        {/* Image Section */}
        <div className="details-image-wrapper">
          <div className="image-glow"></div>
          <img 
            src={currentChar.image} 
            alt={currentChar.name}
            className="character-portrait"
          />
          <div className="image-border"></div>
        </div>

        {/* Info Section */}
        <div className="details-info">
          <h1 className="character-name-detail">
            {currentChar.name}
          </h1>
          
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Real Name</span>
              <span className="info-value">{currentChar.realName}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Aspect</span>
              <span className="info-value">{currentChar.aspect}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Power</span>
              <span className="info-value power-text">{currentChar.power}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Gender</span>
              <span className="info-value">{currentChar.gender}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Age</span>
              <span className="info-value">{currentChar.age}</span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Kill Score</span>
              <span className="info-value kill-score">{currentChar.kill}</span>
            </div>
          </div>

          <div className="arc-section">
            <span className="arc-label">📖 Story Arc</span>
            <p className="arc-value">{currentChar.arc}</p>
          </div>

          <div className="quote-section">
            <span className="quote-icon">"</span>
            <p className="quote-text">{currentChar.quote}</p>
            <span className="quote-icon close">"</span>
          </div>

          {/* Navigation Controls */}
          <div className="nav-controls">
            <button 
              className="nav-btn prev"
              onClick={() => {
                setDirection(-1);
                setIndex((prev) => (prev - 1 + totalChars) % totalChars);
              }}
            >
              ← Previous
            </button>
            <div className="counter">
              {index + 1} / {totalChars}
            </div>
            <button 
              className="nav-btn next"
              onClick={() => {
                setDirection(1);
                setIndex((prev) => (prev + 1) % totalChars);
              }}
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Instruction */}
      <div className="instruction">
        <span>↑ ↓ or ← → to navigate</span>
      </div>
    </div>
  );
};

export default CharacterDetails;
