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
          I'm an <br />
          <ReactTyped 
            strings={[
              "IT Dev.",
              "IT Enthusiast.",
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
          I am a fresh graduate Information Technology student at Telkom University with professional experience in Quality Assurance, 
          Web Content Administration, and software development. I have performed manual, sanity, and black-box testing for AI platforms such as Telkomsel Veronika and MYKA, 
          executed API testing using Postman, and conducted SQL-based data validation to ensure accuracy and system reliability. 
          I also design and execute structured test cases using Cucumber, document issues, and collaborate closely with product and development teams to support successful sprint delivery 
          in Agile environments. Beyond QA, I manage and validate web content to maintain consistency, usability, and alignment with product standards. With a strong foundation in Python, 
          Laravel, and Figma, along with years of involvement in IT organizations, I bring analytical thinking, adaptability, and a commitment to continuous learning. I am passionate about 
          delivering high-quality digital experiences and eager to contribute to impactful projects in software testing and web operations.
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