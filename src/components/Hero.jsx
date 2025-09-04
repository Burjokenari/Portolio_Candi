import "./Hero.css";
import profile from "../assets/profile.png"; 
import React from "react";
import { ReactTyped } from "react-typed";
import Tilt from "react-parallax-tilt";  // ⬅️ import tilt

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="welcome">WELCOME!</p>
        <h1>
          <ReactTyped 
            strings={[
              "I'm an IT Enthusiast.",
              "I'm an UI/UX Designer.",
              "I'm a Front-End Developer."
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
          I enjoy learning new technologies and embracing practical challenges. My main interests include Web Development , 
          IT Network and Infra. I am proficient in Python, Laravel, and Figma, and have hands-on experience building real-world web applications. 
          I also have over three years of experience in Information Technology organizations and events, particularly in Communication, Information, 
          and productivity-related projects.
        </p>
        <div className="social-icons">
          <a href="https://www.instagram.com/candikafka?igsh=eTd3cGJiZ3J5bXp2"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/candikafka"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Burjokenari/TA-Warehouse-System-PT.RAN.git"><i className="fab fa-github"></i></a>
          <a href="https://dribbble.com/bloominggas"><i className="fab fa-dribbble"></i></a>
        </div>
      </div>
        
      <div className="hero-image">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.4}
          scale={1.05}
          transitionSpeed={2000}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          className="tilt-box"
        >
          <img src={profile} alt="Profile" className="profile-pic" />
        </Tilt>
      </div>
    </section>
  );
}

export default Hero;