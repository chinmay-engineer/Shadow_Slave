import { useState, useEffect, useRef } from "react";
import "./About.css";

/* images */
import bg from "../../assets/BG.jpg";
import ss from "../../assets/ss.jpg";

/* social icons */
import githubIcon from "../../assets/gi.jpg";
import linkedinIcon from "../../assets/li.jpg";
import gmailIcon from "../../assets/gmi.jpg";

function About() {
  const [spin, setSpin] = useState(false);
  const [breakImg, setBreakImg] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
      
      // 3D tilt effect for cards
      if (cardsRef.current) {
        cardsRef.current.forEach((card, index) => {
          if (card) {
            const rect = card.getBoundingClientRect();
            const cardX = (clientX - rect.left) / rect.width;
            const cardY = (clientY - rect.top) / rect.height;
            const tiltX = (cardY - 0.5) * 20;
            const tiltY = (cardX - 0.5) * -20;
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
          }
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setSpin(true);
    setTimeout(() => setSpin(false), 1000);
  };

  const handleDoubleClick = () => {
    setBreakImg(true);
    setTimeout(() => setBreakImg(false), 3000);
  };

  return (
    <div className="about-container" ref={containerRef}>
      {/* 3D Parallax Background */}
      <div 
        className="bg-3d-layer"
        style={{ 
          backgroundImage: `url(${bg})`,
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px) scale(1.1)`
        }}
      ></div>
      
      {/* Dynamic Gradient Overlay */}
      <div className="gradient-overlay-premium" style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
          rgba(106, 13, 173, 0.3), 
          rgba(0, 0, 0, 0.85) 80%)`
      }}></div>
      
      {/* Animated Grid Lines */}
      <div className="grid-lines"></div>
      
      {/* Floating Particles System */}
      <div className="particle-system">
        {[...Array(80)].map((_, i) => (
          <div key={i} className="glow-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
            width: `${3 + Math.random() * 6}px`,
            height: `${3 + Math.random() * 6}px`,
            opacity: 0.3 + Math.random() * 0.5,
          }}></div>
        ))}
      </div>

      {/* 3D Floating Orbs */}
      <div className="floating-orbs-3d">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="orb-3d" style={{
            left: `${20 + (i * 15)}%`,
            top: `${30 + (i * 10)}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${15 + i * 2}s`,
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
          }}></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="about-content-premium">
        
        {/* 3D Title Section */}
        <div className="title-3d-section" style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}>
          <div className="title-wrapper-3d">
            <div className="title-container">
              <h1 className="title-3d-premium">
                <span className="title-word-3d" data-text="SHADOW">SHADOW</span>
                <span className="title-word-3d" data-text="SLAVE">SLAVE</span>
              </h1>
            </div>
            <div className="title-beam"></div>
            <div className="title-sparks">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="spark" style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}></div>
              ))}
            </div>
          </div>
          <div className="title-underline-3d"></div>
        </div>

        {/* 3D Cards Grid */}
        <div className="cards-3d-grid">
          <div 
            ref={el => cardsRef.current[0] = el}
            className="card-3d"
            style={{ transition: 'transform 0.2s ease-out' }}
          >
            <div className="card-3d-inner">
              <div className="card-3d-front">
                <div className="card-icon-3d">
                  <div className="icon-ring-3d"></div>
                  <span>🌑</span>
                </div>
                <h3>The Nightmare Realm</h3>
                <p>
                  Shadow Slave is a dark fantasy web novel written by <span className="highlight-3d">Guiltythree</span>.
                  The story follows Sunny, a young man trapped in a brutal world where
                  humans must fight terrifying creatures inside deadly nightmare realms.
                </p>
                <div className="card-glow-3d"></div>
              </div>
            </div>
          </div>

          <div 
            ref={el => cardsRef.current[1] = el}
            className="card-3d"
            style={{ transition: 'transform 0.2s ease-out' }}
          >
            <div className="card-3d-inner">
              <div className="card-3d-front">
                <div className="card-icon-3d">
                  <div className="icon-ring-3d"></div>
                  <span>⚔️</span>
                </div>
                <h3>Supernatural Powers</h3>
                <p>
                  People gain supernatural powers called <span className="highlight-3d">Aspects</span> and
                  battle monsters to survive. Strength, intelligence and courage are
                  the only ways to escape death.
                </p>
                <div className="card-glow-3d"></div>
              </div>
            </div>
          </div>

          <div 
            ref={el => cardsRef.current[2] = el}
            className="card-3d"
            style={{ transition: 'transform 0.2s ease-out' }}
          >
            <div className="card-3d-inner">
              <div className="card-3d-front">
                <div className="card-icon-3d">
                  <div className="icon-ring-3d"></div>
                  <span>📖</span>
                </div>
                <h3>Fan Project</h3>
                <p>
                  This website is a fan project that explores the characters,
                  world, and lore of Shadow Slave. Join the shadow realm!
                </p>
                <div className="card-glow-3d"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Image Gallery */}
        <div className="image-3d-section">
          <div className="image-3d-container">
            <div className="image-3d-frame">
              <div className="image-3d-border"></div>
              <div 
                className={`image-3d-wrapper ${spin ? "spin-3d" : ""} ${breakImg ? "break-3d" : ""}`}
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
              >
                <img src={ss} alt="Shadow Slave" className="img-3d-front" />
                <img src={ss} alt="Left" className="img-3d-left" />
                <img src={ss} alt="Right" className="img-3d-right" />
                <div className="image-3d-hint">
                  <span>🎯 Click to Spin</span>
                  <span>💥 Double Click to Shatter</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Social Section */}
        <div className="social-3d-section">
          <div className="social-3d-header">
            <div className="social-line-3d"></div>
            <h3>Connect With Me</h3>
            <div className="social-line-3d"></div>
          </div>
          
          <div className="social-3d-icons">
            <a
              href="https://github.com/chinmay-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="social-3d-link"
            >
              <div className="social-3d-circle">
                <img src={githubIcon} alt="GitHub" />
                <div className="social-3d-glow"></div>
              </div>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/chinmay-gupta-250b28364/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-3d-link"
            >
              <div className="social-3d-circle">
                <img src={linkedinIcon} alt="LinkedIn" />
                <div className="social-3d-glow"></div>
              </div>
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:chinmayguptaxb@gmail.com"
              className="social-3d-link"
            >
              <div className="social-3d-circle">
                <img src={gmailIcon} alt="Gmail" />
                <div className="social-3d-glow"></div>
              </div>
              <span>Gmail</span>
            </a>
          </div>
        </div>

        {/* Animated Footer */}
        <div className="footer-3d">
          <div className="footer-3d-content">
            <div className="footer-3d-line"></div>
            <p>✦ Embrace the Shadows | Enter the Nightmare ✦</p>
            <div className="footer-3d-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
