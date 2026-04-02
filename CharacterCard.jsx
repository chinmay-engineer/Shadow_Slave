import React from "react";
import { useNavigate } from "react-router-dom";
import "./CharacterCard.css";

/**
 * CharacterCard Component
 * Displays individual character information in a card format
 * @param {Object} props - Component props
 * @param {string} props.image - Character image URL
 * @param {string} props.name - Character name
 * @param {string} props.arcs - Story arcs as string with separators
 * @param {Array} props.abilities - Array of ability strings
 * @param {number} props.power - Power level (0-100)
 */
const CharacterCard = ({ 
  image, 
  name, 
  arcs, 
  abilities = [], 
  power = 70 
}) => {

  const navigate = useNavigate();

  // Generate slug for routing
  const goToStory = () => {
    const slug = name.toLowerCase().replace(/\s+/g, "");
    navigate(`/characterstory/${slug}`);
  };

  return (
    <div className="character-card" onClick={goToStory}>
      
      {/* ===== IMAGE SECTION ===== */}
      <div className="character-image-wrapper">
        <img src={image} alt={name} loading="lazy" />
        <div className="image-overlay"></div>
      </div>

      {/* ===== INFO SECTION ===== */}
      <div className="character-info">
        
        <h2 className="character-name">{name}</h2>
        
        <p className="character-arcs">{arcs}</p>

        {/* ===== ABILITIES SECTION ===== */}
        <div className="character-abilities">
          {abilities.map((skill, index) => (
            <span key={index} className="ability-tag">
              {skill}
            </span>
          ))}
        </div>

        {/* ===== POWER BAR SECTION ===== */}
        <div className="power-container">
          <span className="power-label">
            Power Level
            <span className="power-value">{power}%</span>
          </span>
          <div className="power-bar">
            <div
              className="power-fill"
              style={{ width: `${power}%` }}
            >
              <div className="power-glow"></div>
            </div>
          </div>
        </div>

        {/* ===== BUTTON SECTION ===== */}
        <button
          className="view-story-btn"
          onClick={(e) => {
            e.stopPropagation();
            goToStory();
          }}
        >
          <span>View Story</span>
          <span className="btn-icon">→</span>
        </button>
      </div>

      {/* ===== DECORATIVE ELEMENTS ===== */}
      <div className="card-corner corner-tl"></div>
      <div className="card-corner corner-tr"></div>
      <div className="card-corner corner-bl"></div>
      <div className="card-corner corner-br"></div>
    </div>
  );
};

export default CharacterCard;
