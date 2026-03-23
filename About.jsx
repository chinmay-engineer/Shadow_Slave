import { useState } from "react";
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

  const handleClick = () => {
    setSpin(true);
    setTimeout(() => setSpin(false), 1000);
  };

  const handleDoubleClick = () => {
    setBreakImg(true);
    setTimeout(() => setBreakImg(false), 3000);
  };

  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <div className="about-content">

        <h1 className="about-title">Shadow Slave</h1>

        <p className="about-text">
          Shadow Slave is a dark fantasy web novel written by Guiltythree.
          The story follows Sunny, a young man trapped in a brutal world where
          humans must fight terrifying creatures inside deadly nightmare realms.
        </p>

        <p className="about-text">
          In this world, people gain supernatural powers called Aspects and
          battle monsters to survive. Strength, intelligence and courage are
          the only ways to escape death.
        </p>

        <p className="about-text">
          This website is a fan project that explores the characters,
          world, and lore of Shadow Slave.
        </p>

        {/* IMAGE AREA */}

        <div
          className={`display-image-wrapper ${spin ? "spin" : ""} ${breakImg ? "break" : ""}`}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
        >

          <img src={ss} className="img-full" />

          <img src={ss} className="img-left" />
          <img src={ss} className="img-right" />

        </div>


        {/* SOCIAL ICONS */}

        <div className="social-container">

          <a
            href="https://github.com/chinmay-engineer"
            target="_blank"
            className="social-icon"
          >
            <img src={githubIcon} />
            <span className="tooltip">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/chinmay-gupta-250b28364/"
            target="_blank"
            className="social-icon"
          >
            <img src={linkedinIcon} />
            <span className="tooltip">LinkedIn</span>
          </a>

          <a
            href="mailto:chinmayguptaxb@gmail.com"
            className="social-icon"
          >
            <img src={gmailIcon} />
            <span className="tooltip">Gmail</span>
          </a>

        </div>

      </div>

    </div>
  );
}

export default About;