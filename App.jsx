import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

/* Pages */
import Splash from "./pages/Splash/Splash";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails";
import CharacterStory from "./pages/CharacterStory/CharacterStory";
import About from "./pages/About/About";
import Logout from "./pages/Logout/Logout";

/* Components */
import Navbar from "./components/Navbar/Navbar";

/* Assets */
import music from "./assets/122.mp3";
import musicIcon from "./assets/music-icon.jpg";

import "./App.css";

/* Layout Component */
function Layout({ setIsAuthenticated, audioRef, isPlaying, toggleMusic }) {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}

      {/* Enhanced Music Button */}
      <div className="music-button-container">
        <button 
          className={`music-btn ${isPlaying ? "playing" : ""}`} 
          onClick={toggleMusic}
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          <div className="music-btn-inner">
            <img
              src={musicIcon}
              alt="music"
              className={`music-icon ${isPlaying ? "rotating" : ""}`}
            />
            <div className="music-pulse-ring"></div>
          </div>
          <div className="music-tooltip">
            {isPlaying ? "Pause Music" : "Play Music"}
          </div>
        </button>
        
        {/* Sound Waves Animation */}
        {isPlaying && (
          <div className="sound-waves">
            <span className="wave wave-1"></span>
            <span className="wave wave-2"></span>
            <span className="wave wave-3"></span>
            <span className="wave wave-4"></span>
          </div>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characterdetails" element={<CharacterDetails />} />
        <Route path="/characterstory/:name" element={<CharacterStory />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/logout"
          element={<Logout setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
    </>
  );
}

/* Main App */
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }
  }, []);

  if (!isAuthenticated) {
    return <Login setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <BrowserRouter>
      <audio ref={audioRef} src={music} />
      <Layout
        setIsAuthenticated={setIsAuthenticated}
        audioRef={audioRef}
        isPlaying={isPlaying}
        toggleMusic={toggleMusic}
      />
    </BrowserRouter>
  );
}

export default App;
