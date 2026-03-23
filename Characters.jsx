import React, { useRef, useEffect } from "react";
import "./Characters.css";

import CharacterCard from "../../components/CharacterCard/CharacterCard";

import sunny from "../../assets/Sunless.jpg";
import madPrince from "../../assets/Sunless (1).jpg";
import nephis from "../../assets/Nephis - ShadowSlave - amandak3166 on tiktok.jpg";
import cassie from "../../assets/Cassie - ShadowSlave - amandak3166 on tiktok.jpg";
import kai from "../../assets/Kai.jpg";
import jet from "../../assets/Jet.jpg";
import effie from "../../assets/Effie.jpg";
import mordret from "../../assets/mordret prince of nothing wallpaper shadow slave.jpg";

import bg from "../../assets/The Forgotten Shore.jpg";

const Characters = () => {

  const sliderRef = useRef(null);

  const characters = [

    {
      name: "Sunny",
      image: sunny,
      arcs: "Forgotten Shore • Dark City • Antarctica",
      abilities: [
        "Shadow Step",
        "Shadow Manifestation",
        "Shadow Control"
      ]
    },

    {
      name: "Mad Prince",
      image: madPrince,
      arcs: "Nightmare Arc • Third Nightmare",
      abilities: [
        "Absolute Shadow Dominion",
        "Shadow Avatar Creation",
        "Dark Sovereign Aura"
      ]
    },

    {
      name: "Nephis",
      image: nephis,
      arcs: "Forgotten Shore • Dream Realm",
      abilities: [
        "Sacred Flame",
        "Flame Regeneration",
        "Starfire Burst"
      ]
    },

    {
      name: "Cassie",
      image: cassie,
      arcs: "Forgotten Shore • Prophecy Arc",
      abilities: [
        "Future Vision",
        "Fate Reading",
        "Danger Prediction"
      ]
    },

    {
      name: "Kai",
      image: kai,
      arcs: "Dark City • Antarctica",
      abilities: [
        "Hypnotic Voice",
        "Enhanced Perception",
        "Truth Detection"
      ]
    },

    {
      name: "Jet",
      image: jet,
      arcs: "Government Arc • Antarctica",
      abilities: [
        "Soul Strike",
        "Death Sense",
        "Execution Aura"
      ]
    },

    {
      name: "Effie",
      image: effie,
      arcs: "Forgotten Shore • Antarctica",
      abilities: [
        "Titan Strength",
        "Iron Body",
        "Warrior Instinct"
      ]
    },

    {
      name: "Mordret",
      image: mordret,
      arcs: "Prince of Nothing • Third Nightmare",
      abilities: [
        "Mirror Possession",
        "Reflection Manipulation",
        "Mirror Clone"
      ]
    }

  ];

  useEffect(() => {

    const handleKey = (e) => {

      if (!sliderRef.current) return;

      if (e.key === "ArrowRight") {
        sliderRef.current.scrollLeft += 320;
      }

      if (e.key === "ArrowLeft") {
        sliderRef.current.scrollLeft -= 320;
      }

    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, []);

  return (

    <div
      className="characters-page"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <h1 className="characters-title">
        Shadow Slave Characters
      </h1>

      <div className="characters-slider" ref={sliderRef}>

        {characters.map((char, index) => (

          <CharacterCard
            key={index}
            image={char.image}
            name={char.name}
            arcs={char.arcs}
            abilities={char.abilities}
          />

        ))}

      </div>

    </div>

  );

};

export default Characters;