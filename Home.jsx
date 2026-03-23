import React, { useState } from "react";
import "./Home.css";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import bg from "../../assets/6.jpg";

const Home = () => {

  const [spinIndex, setSpinIndex] = useState(null);

  const handleSpin = (index) => {
    setSpinIndex(index);
    setTimeout(() => setSpinIndex(null), 2000);
  };

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${bg})` }}
    >

      {/* DARK OVERLAY */}
      <div className="home-overlay"></div>

      {/* HERO SECTION */}
      <section className="section hero">
        <h1>Welcome to the World of Shadow Slave</h1>
        <p>
          Enter a cursed universe where humanity battles against terrifying
          Nightmare Realms. Only the Awakened survive — but at a cost.
        </p>

        <div className="hero-images">
          <img
            src={img1}
            alt="Hero Scene 1"
            onClick={() => handleSpin(1)}
            className={`img ${spinIndex === 1 ? "spin" : ""}`}
          />
          <img
            src={img2}
            alt="Hero Scene 2"
            onClick={() => handleSpin(2)}
            className={`img ${spinIndex === 2 ? "spin" : ""}`}
          />
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="section">
        <div className="content">
          <h2>⚔️ The Story</h2>
          <p>
            In the world of Shadow Slave, humanity is trapped in a cruel system
            governed by the mysterious Spell. Those chosen are thrown into
            Nightmare Realms filled with deadly creatures and ancient horrors.
          </p>
          <p>
            Every victory grants power, but also brings new dangers. Trust is
            fragile, survival is uncertain, and fate is never kind.
          </p>
        </div>

        <img
          src={img3}
          alt="Story Scene"
          className={`side-img ${spinIndex === 3 ? "spin" : ""}`}
          onClick={() => handleSpin(3)}
        />
      </section>

      {/* CHARACTERS SECTION */}
      <section className="section reverse">
        <img
          src={img4}
          alt="Characters"
          className={`side-img ${spinIndex === 4 ? "spin" : ""}`}
          onClick={() => handleSpin(4)}
        />

        <div className="content">
          <h2>🔥 Legendary Characters</h2>
          <p>
            Meet powerful Awakened warriors who shape the fate of this world:
          </p>
          <ul>
            <li>Sunless – Master of shadows and survival</li>
            <li>Nephis – Radiant warrior with divine flames</li>
            <li>Cassie – Blind oracle who sees the unseen</li>
            <li>Kai – Charismatic but dangerous</li>
            <li>Effie – Unstoppable force of strength</li>
            <li>Jet – Cold and deadly reaper</li>
            <li>Mordret – The Prince of Nothing</li>
          </ul>
        </div>
      </section>

      {/* LORE SECTION */}
      <section className="section">
        <div className="content">
          <h2>🌑 World Lore</h2>
          <p>
            The world is filled with ancient ruins, powerful artifacts called
            Memories, and regions consumed by darkness.
          </p>
          <ul>
            <li>Forgotten Shore – A land of endless danger</li>
            <li>Dark City – Where shadows rule</li>
            <li>Antarctica Expedition – Humanity’s desperate gamble</li>
            <li>Nightmare Realms – Beyond imagination</li>
          </ul>
        </div>

        <img
          src={img5}
          alt="World Lore"
          className={`side-img large ${spinIndex === 5 ? "spin" : ""}`}
          onClick={() => handleSpin(5)}
        />
      </section>

      {/* QUOTE */}
      <section className="quote">
        “The world was cruel. Survival required cunning… and shadows.”
      </section>

    </div>
  );
};

export default Home;