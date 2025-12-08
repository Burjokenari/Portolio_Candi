import "./Hero.css";
import profile from "../assets/profile.png"; 
import React from "react";
import { ReactTyped } from "react-typed";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="welcome">WELCOME!</p>
        <h1>
          I'm a <br />
          <ReactTyped 
            strings={[
              "IT Enthusiast.",
              "UI/UX Designer.",
              "Front-End Dev."
            ]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1500}
            loop 
            showCursor={true}
          />
        </h1>
        <p className="desc">
          I am a graduated final-year Information Technology student at Telkom University, 
          currently completing my thesis on warehouse and attendance system design using the Goal-Directed Design method. 
          I enjoy learning new technologies and embracing practical challenges. My main interests include Web Development, 
          IT Network and Infra.
        </p>
        
        <div className="social-icons">
          <a href="https://www.instagram.com/candikafka?igsh=eTd3cGJiZ3J5bXp2" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/candikafka" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Burjokenari/TA-Warehouse-System-PT.RAN.git" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://dribbble.com/bloominggas" target="_blank" rel="noreferrer"><i className="fab fa-dribbble"></i></a>
        </div>
      </div>
        
      <div className="hero-image">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          scale={1.05}
          transitionSpeed={2000}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
        >
          <img src={profile} alt="Profile" className="profile-pic" />
        </Tilt>
      </div>
    </section>
  );
}

export default Hero;