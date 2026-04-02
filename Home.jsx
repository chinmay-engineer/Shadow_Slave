import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

// Images
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import bg from "../../assets/6.jpg";

const Home = () => {
  const [spinIndex, setSpinIndex] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef([]);

  // Handle image spin animation
  const handleSpin = (index) => {
    setSpinIndex(index);
    setTimeout(() => setSpinIndex(null), 2000);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = index;
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container" style={{ backgroundImage: `url(${bg})` }}>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Dark Overlay with Gradient Animation */}
      <div className="home-overlay"></div>

      {/* Animated Background Particles */}
      <div className="particles-bg">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              width: `${2 + Math.random() * 5}px`,
              height: `${2 + Math.random() * 5}px`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
          ></div>
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="floating-orbs">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="orb"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + i * 2}s`,
              width: `${50 + i * 30}px`,
              height: `${50 + i * 30}px`,
            }}
          ></div>
        ))}
      </div>

      {/* HERO SECTION */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`section hero ${isVisible[0] ? "fade-up" : ""}`}
      >
        <div className="hero-content">
          <div className="glow-text">
            <h1>
              <span className="title-word">Welcome to</span>
              <span className="title-main">Shadow Slave</span>
            </h1>
          </div>
          <div className="hero-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-icon">⚔️</div>
            <div className="decoration-line"></div>
          </div>
          <p className="hero-description">
            Enter a cursed universe where humanity battles against terrifying
            Nightmare Realms. Only the Awakened survive — but at a cost.
          </p>

          <div className="hero-images">
            <div className="image-card">
              <img
                src={img1}
                alt="Hero Scene 1"
                onClick={() => handleSpin(1)}
                className={`hero-img ${spinIndex === 1 ? "spin-3d" : ""}`}
              />
              <div className="image-glow"></div>
              <div className="image-caption">The Abyss</div>
            </div>
            <div className="image-card">
              <img
                src={img2}
                alt="Hero Scene 2"
                onClick={() => handleSpin(2)}
                className={`hero-img ${spinIndex === 2 ? "spin-3d" : ""}`}
              />
              <div className="image-glow"></div>
              <div className="image-caption">The Awakening</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`section story-section ${isVisible[1] ? "slide-right" : ""}`}
      >
        <div className="content">
          <div className="section-badge">The Legend</div>
          <h2>
            <span className="highlight">⚔️ The Story</span>
          </h2>
          <p>
            In the world of Shadow Slave, humanity is trapped in a cruel system
            governed by the mysterious Spell. Those chosen are thrown into
            Nightmare Realms filled with deadly creatures and ancient horrors.
          </p>
          <p className="highlight-text">
            Every victory grants power, but also brings new dangers. Trust is
            fragile, survival is uncertain, and fate is never kind.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">7+</span>
              <span className="stat-label">Nightmare Realms</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Nightmare Creatures</span>
            </div>
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Legendary Awakened</span>
            </div>
          </div>
        </div>

        <div className="image-wrapper">
          <img
            src={img3}
            alt="Story Scene"
            className={`feature-img ${spinIndex === 3 ? "spin-3d" : ""}`}
            onClick={() => handleSpin(3)}
          />
          <div className="image-border-effect"></div>
        </div>
      </section>

      {/* CHARACTERS SECTION */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`section characters-section reverse ${isVisible[2] ? "slide-left" : ""}`}
      >
        <div className="image-wrapper">
          <img
            src={img4}
            alt="Characters"
            className={`feature-img ${spinIndex === 4 ? "spin-3d" : ""}`}
            onClick={() => handleSpin(4)}
          />
          <div className="image-border-effect"></div>
        </div>

        <div className="content">
          <div className="section-badge">The Heroes</div>
          <h2>
            <span className="highlight">🔥 Legendary Characters</span>
          </h2>
          <p>Meet powerful Awakened warriors who shape the fate of this world:</p>
          <div className="character-grid">
            {[
              { name: "Sunless", title: "Master of Shadows", color: "#c084fc" },
              { name: "Nephis", title: "Divine Flame Bearer", color: "#ff6b6b" },
              { name: "Cassie", title: "Blind Oracle", color: "#4ecdc4" },
              { name: "Kai", title: "Voice of Truth", color: "#ffe66d" },
              { name: "Effie", title: "Titan's Daughter", color: "#ff9f4a" },
              { name: "Jet", title: "Soul Reaper", color: "#a8e6cf" },
              { name: "Mordret", title: "Prince of Nothing", color: "#d4af37" },
            ].map((char, idx) => (
              <div key={idx} className="character-tag" style={{ borderColor: char.color }}>
                <span className="char-name">{char.name}</span>
                <span className="char-title">{char.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LORE SECTION */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className={`section lore-section ${isVisible[3] ? "slide-right" : ""}`}
      >
        <div className="content">
          <div className="section-badge">The World</div>
          <h2>
            <span className="highlight">🌑 World Lore</span>
          </h2>
          <p>
            The world is filled with ancient ruins, powerful artifacts called
            Memories, and regions consumed by darkness.
          </p>
          <div className="lore-grid">
            <div className="lore-item">
              <div className="lore-icon">🏝️</div>
              <div className="lore-text">
                <h4>Forgotten Shore</h4>
                <p>A land of endless danger</p>
              </div>
            </div>
            <div className="lore-item">
              <div className="lore-icon">🌑</div>
              <div className="lore-text">
                <h4>Dark City</h4>
                <p>Where shadows rule</p>
              </div>
            </div>
            <div className="lore-item">
              <div className="lore-icon">❄️</div>
              <div className="lore-text">
                <h4>Antarctica Expedition</h4>
                <p>Humanity's desperate gamble</p>
              </div>
            </div>
            <div className="lore-item">
              <div className="lore-icon">🌀</div>
              <div className="lore-text">
                <h4>Nightmare Realms</h4>
                <p>Beyond imagination</p>
              </div>
            </div>
          </div>
        </div>

        <div className="image-wrapper">
          <img
            src={img5}
            alt="World Lore"
            className={`feature-img large ${spinIndex === 5 ? "spin-3d" : ""}`}
            onClick={() => handleSpin(5)}
          />
          <div className="image-border-effect"></div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="quote-section">
        <div className="quote-container">
          <div className="quote-mark">“</div>
          <div className="quote-text-wrapper">
            <p className="quote-text">
              The world was cruel. Survival required cunning… and shadows.
            </p>
            <div className="quote-author">— Shadow Slave</div>
          </div>
          <div className="quote-mark close">”</div>
        </div>
        <div className="quote-decoration">
          <div className="quote-line"></div>
          <div className="quote-dots">✦ ✦ ✦</div>
          <div className="quote-line"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span>Shadow Slave</span>
            <span className="footer-sub">Awakened Edition</span>
          </div>
          <div className="footer-links">
            <a href="/characters">Characters</a>
            <a href="/lore">Lore</a>
            <a href="/about">About</a>
          </div>
          <div className="footer-copyright">
            © 2024 Shadow Slave Fan Project | Created by Chinmay
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
