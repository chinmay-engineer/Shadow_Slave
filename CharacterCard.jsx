import React from "react";
import { useNavigate } from "react-router-dom";
import "./CharacterCard.css";

const CharacterCard = ({ image, name, arcs, abilities = [], power = 70 }) => {

  const navigate = useNavigate();

  const goToStory = () => {
    const slug = name.toLowerCase().replace(/\s+/g, "");
    navigate(`/characterstory/${slug}`);
  };

  return (

    <div className="character-card" onClick={goToStory}>

      {/* IMAGE */}
      <div className="character-image-wrapper">
        <img src={image} alt={name} />
      </div>

      {/* INFO */}
      <div className="character-info">

        <h2 className="character-name">{name}</h2>

        <p className="character-arcs">{arcs}</p>

        {/* ABILITIES */}
        <div className="character-abilities">

          {abilities.map((skill, index) => (

            <span key={index} className="ability-tag">
              {skill}
            </span>

          ))}

        </div>

        {/* POWER BAR */}
        <div className="power-container">

          <span className="power-label">Power</span>

          <div className="power-bar">

            <div
              className="power-fill"
              style={{ width: `${power}%` }}
            ></div>

          </div>

        </div>

        {/* BUTTON */}
        <button
          className="view-story-btn"
          onClick={(e) => {
            e.stopPropagation();
            goToStory();
          }}
        >
          View Story
        </button>

      </div>

    </div>

  );

};

export default CharacterCard;