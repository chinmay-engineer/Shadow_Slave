import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CharacterStory.css";

// Character Images
import sunny from "../../assets/Sunny1.jpg";
import madprince from "../../assets/878.jpg";
import nephis from "../../assets/Nephis1.jpg";
import cassie from "../../assets/Cassie1.jpg";
import kai from "../../assets/Kai1.jpg";
import jet from "../../assets/Jet1.jpg";
import effie from "../../assets/111e.jpg";
import mordret from "../../assets/Shadow Slave Mordret1.jpg";

// Background Images
import sb from "../../assets/sb.jpg";
import mb from "../../assets/mb.jpg";
import nb from "../../assets/nb.jpg";
import cb from "../../assets/cb.jpg";
import kb from "../../assets/kb.jpg";
import jb from "../../assets/jb.jpg";
import eb from "../../assets/eb.jpg";
import mmb from "../../assets/mmb.jpg";

// Character Database
const characterData = {
  sunny: {
    name: "🌑 Sunny",
    realName: "Sunless",
    role: "Main Protagonist • Shadow Slave",
    power: 95,
    image: sunny,
    background: sb,
    story: `Sunless was born in the slums of the outskirts, growing up poor and alone. Because of this harsh life, he became extremely cautious, clever, and distrustful of others.

When he entered the First Nightmare, he survived through intelligence rather than brute strength. After awakening, he obtained a rare Divine Shadow Aspect that made him the first Shadow Slave in history.

Despite dreaming of a peaceful life, Sunny constantly finds himself pulled into deadly battles across the Dream Realm. From the Forgotten Shore to the frozen wastes of Antarctica, he has faced countless Nightmare Creatures and Awakened enemies.

Over time, he evolves from a cautious survivor into one of the most dangerous Awakened fighters in the world. His mastery over shadows and his ruthless survival instincts make him both feared and respected across all realms.

Key Achievements:
• Survived the Forgotten Shore as a Sleeper
• Defeated the Shadow Lord in the Dark City
• Became a Master during the Antarctica Campaign
• Unlocked the powers of the Shadow Realm`,
    abilities: ["Shadow Step", "Shadow Manifestation", "Shadow Sense", "Shadow Avatar", "Shadow Domain"]
  },
  
  madprince: {
    name: "👑 Mad Prince",
    realName: "Sunless (Future Version)",
    role: "Future Corrupted Version • Nightmare Entity",
    power: 100,
    image: madprince,
    background: mb,
    story: `The Mad Prince is believed to be a future version of Sunny from a ruined timeline—a corrupted reflection of what he could become.

In that dark future, endless wars and tragedies pushed him beyond the limits of sanity. Losing everything he once cared about, he became a terrifying ruler of shadows, feared across entire Nightmare worlds.

His existence represents the dark destiny Sunny may face if despair consumes him completely. The Mad Prince wields shadow powers far beyond any mortal Awakened, capable of manifesting entire armies of shadow creatures.

His presence in the Third Nightmare serves as both a warning and a test—forcing Sunny to confront his deepest fears about his own potential fate.

Key Traits:
• Absolute mastery over shadows
• Unmatched combat experience
• Cold and calculating intelligence
• Terrifying aura of dread`,
    abilities: ["Absolute Shadow Dominion", "Shadow Avatar Creation", "Dark Sovereign Aura", "Reality Manipulation"]
  },
  
  nephis: {
    name: "🔥 Nephis",
    realName: "Nephis • Changing Star",
    role: "Leader • Divine Flame Bearer",
    power: 98,
    image: nephis,
    background: nb,
    story: `Nephis is the daughter of a powerful legacy clan that was destroyed by political enemies within the government. After losing her family, she trained relentlessly and became one of the most talented Awakened of her generation.

Known as the Changing Star, she inspires others with her unwavering determination and her ability to burn through any obstacle. Her flames are not just physical—they represent her burning will to reshape the world.

Her ultimate goal is to destroy the corrupt system behind the Nightmare Spell and create a future where Awakened are no longer slaves to the Spell's machinations. She leads the cohort with an iron will, pushing them toward greatness.

Key Achievements:
• Survived the Forgotten Shore with Sunny
• Reached Master rank during the Dream Realm exploration
• Led the cohort through Antarctica
• Unlocked the full power of her Divine Flame Aspect`,
    abilities: ["Sacred Flame", "Flame Regeneration", "Starfire Burst", "Phoenix Resurrection", "Purifying Flames"]
  },
  
  cassie: {
    name: "👁 Cassie",
    realName: "Cassia • The Oracle",
    role: "Oracle • Strategist • Seer",
    power: 82,
    image: cassie,
    background: cb,
    story: `Cassie lost her eyesight as a child, but her awakening granted her an Aspect that allows her to see fragments of the future through prophetic visions.

Her abilities reveal possible timelines and coming disasters, making her an invaluable strategist. Because of this gift, she carries the painful burden of knowing tragedies before they happen—including events she cannot prevent.

Despite the weight of her visions, she continues guiding her friends toward the best possible future, often sacrificing her own peace for the sake of others. Her bond with Sunny and Nephis runs deep, forged through countless battles.

Key Achievements:
• Predicted the events of the Forgotten Shore
• Saved the cohort from multiple ambushes
• Became a Master strategist for government operations
• Mastered the art of prophetic combat`,
    abilities: ["Future Vision", "Fate Reading", "Danger Prediction", "Probability Manipulation", "Timeline Awareness"]
  },
  
  kai: {
    name: "🎶 Kai",
    realName: "Kai • Nightingale",
    role: "Scout • Support Fighter • Voice of Truth",
    power: 78,
    image: kai,
    background: kb,
    story: `Before awakening, Kai was a famous singer admired for his incredible voice and charm. After becoming an Awakened, his abilities became connected to sound and perception.

His heightened senses allow him to detect threats from miles away and support allies during battle with his hypnotic voice. Despite his fame and talent, he remains kind, loyal, and dependable—a true friend to all in the cohort.

His ability to detect lies makes him a valuable asset in both combat and political situations, as no deception can escape his perception.

Key Achievements:
• Survived the Dark City
• Became a Master during the Antarctica Campaign
• Saved the cohort with his perception abilities
• Mastered the art of sound-based combat`,
    abilities: ["Hypnotic Voice", "Enhanced Perception", "Truth Detection", "Sound Waves", "Sonic Shield"]
  },
  
  jet: {
    name: "☠ Jet",
    realName: "Jet • Soul Reaper",
    role: "Government Elite Awakened • Death Aspect User",
    power: 92,
    image: jet,
    background: jb,
    story: `Jet, also known as the Soul Reaper, is one of the most feared Awakened working for the government. Her abilities revolve around death and souls, allowing her to destroy Nightmare Creatures with terrifying efficiency.

Calm, cold, and incredibly experienced, she often acts as a mentor to younger Awakened like Sunny. Despite her fearsome reputation, she operates by a strict moral code—she only kills those who deserve it.

Her unique Aspect allows her to drain the souls of her enemies, making her stronger with each kill. This makes her one of the most efficient hunters of Nightmare Creatures in existence.

Key Achievements:
• Survived countless government operations
• Became a Master through raw combat experience
• Trained multiple generations of Awakened
• Hunted down some of the most dangerous Nightmare Creatures`,
    abilities: ["Soul Strike", "Death Sense", "Execution Aura", "Soul Reaping", "Death Touch"]
  },
  
  effie: {
    name: "💪 Effie",
    realName: "Effie • Titan's Daughter",
    role: "Frontline Warrior • Tank",
    power: 90,
    image: effie,
    background: eb,
    story: `Effie grew up struggling with poverty and hunger, which shaped her bold, energetic personality and her fierce determination to never go hungry again.

Her Aspect grants her immense strength and durability, making her one of the most powerful frontline fighters in the cohort. Although loud and energetic, she is fiercely loyal and always protects her friends during battle.

She acts as the big sister of the group, always ready with a joke or a comforting word—but also the first to throw a punch when her friends are threatened.

Key Achievements:
• Survived the Forgotten Shore
• Became a Master during Antarctica
• Defeated multiple Fallen Titans in single combat
• Earned the title "Titan Slayer"`,
    abilities: ["Titan Strength", "Iron Body", "Warrior Instinct", "Berserker Mode", "Unbreakable Will"]
  },
  
  mordret: {
    name: "🪞 Mordret",
    realName: "Prince of Nothing",
    role: "Major Antagonist • Divine Reflection User",
    power: 97,
    image: mordret,
    background: mmb,
    story: `Mordret is the son of a powerful noble family but was imprisoned because his abilities were considered too dangerous for society.

His powers allow him to manipulate reflections and even possess other people's bodies, making him virtually impossible to track or contain. After escaping captivity, he became one of the most mysterious and dangerous figures in the world.

His motives remain unclear—some believe he seeks revenge against those who imprisoned him, while others think he has far grander plans. What is certain is that his power rivals even the Divine Aspect users like Sunny and Nephis.

Key Achievements:
• Escaped from maximum security imprisonment
• Survived the Second Nightmare alone
• Mastered the Divine Reflection Aspect
• Became a wildcard in the political landscape`,
    abilities: ["Mirror Possession", "Reflection Manipulation", "Mirror Clone", "Soul Mirror", "Reality Reflection"]
  }
};

const CharacterStory = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      const char = characterData[name?.toLowerCase().replace(/\s+/g, "")];
      setCharacter(char);
      setIsLoading(false);
    }, 300);
  }, [name]);

  if (isLoading) {
    return (
      <div className="story-container loading">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <p>Loading story...</p>
        </div>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="story-container error">
        <div className="error-card">
          <h1>404</h1>
          <p>Character Not Found</p>
          <button onClick={() => navigate("/characters")} className="back-btn">
            ← Back to Characters
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="story-container"
      style={{ backgroundImage: `url(${character.background})` }}
    >
      {/* Animated Fog Layers */}
      <div className="fog-layers">
        <div className="fog fog-1"></div>
        <div className="fog fog-2"></div>
        <div className="fog fog-3"></div>
      </div>

      {/* Particle Effects */}
      <div className="story-particles">
        {[...Array(60)].map((_, i) => (
          <div key={i} className="story-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${3 + Math.random() * 7}s`,
          }}></div>
        ))}
      </div>

      {/* Main Card */}
      <div className="story-card">
        
        {/* Image Section - FIXED FULL COVERAGE */}
        <div className="story-image-wrapper">
          <div className="image-aura"></div>
          <div className="image-container">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="image-border-glow"></div>
        </div>

        {/* Text Section */}
        <div className="story-text">
          <div className="story-header">
            <h1>{character.name}</h1>
            <div className="role-badge">{character.role}</div>
          </div>

          <div className="story-details">
            <div className="detail-row">
              <span className="detail-label">Real Name</span>
              <span className="detail-value">{character.realName}</span>
            </div>
          </div>

          {/* Power Section */}
          <div className="power-section">
            <div className="power-header">
              <span>Power Level</span>
              <span className="power-number">{character.power}%</span>
            </div>
            <div className="power-bar">
              <div 
                className="power-fill" 
                style={{ width: `${character.power}%` }}
              >
                <div className="power-glow-effect"></div>
              </div>
            </div>
          </div>

          {/* Abilities Section */}
          <div className="abilities-section">
            <h4>✦ Abilities</h4>
            <div className="abilities-list">
              {character.abilities.map((ability, idx) => (
                <span key={idx} className="ability-badge">{ability}</span>
              ))}
            </div>
          </div>

          {/* Story Text */}
          <div className="story-content">
            <p>{character.story}</p>
          </div>

          {/* Back Button */}
          <button
            className="back-btn"
            onClick={() => navigate("/characters")}
          >
            <span className="btn-icon">←</span>
            Back to Characters
          </button>
        </div>
      </div>

      {/* Floating Navigation Hint */}
      <div className="nav-hint">
        <span>← Use navigation to explore more characters</span>
      </div>
    </div>
  );
};

export default CharacterStory;
