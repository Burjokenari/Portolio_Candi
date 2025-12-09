import React, { useState } from "react";
import "./Projects.css";
import { FaCode, FaCertificate, FaTools } from "react-icons/fa";
import porto1 from "../assets/porto1.png"; 
import porto2 from "../assets/porto2.png"; 
import porto3 from "../assets/porto3.png"; 
import certificate1 from "../assets/certificate1.png";
import certificate2 from "../assets/certificate2.png";
import certificate3 from "../assets/certificate3.png";

function Projects() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <p className="projects-desc">
      A showcase of my recent work, industry qualifications, and the modern technologies I leverage to build robust web solutions
      </p>

      {/* Tab Buttons */}
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          <FaCode className="btn-icon" />
          <span>Projects</span>
        </button>

        <button
          className={`tab-btn ${activeTab === "certificates" ? "active" : ""}`}
          onClick={() => setActiveTab("certificates")}
        >
          <FaCertificate className="btn-icon" />
          <span>Certificates</span>
        </button>

        <button
          className={`tab-btn ${activeTab === "techstack" ? "active" : ""}`}
          onClick={() => setActiveTab("techstack")}
        >
          <FaTools className="btn-icon" />
          <span>Tech Stack</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "projects" && (
          <div className="grid-container">
            {/* Project 1 */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="card-link">
              <div className="card">
                <img src={porto1} alt="porto1" className="porto1" />
                <h3>Warehouse Website Integrated System at PT Rahayu Antara Nusindo</h3>
                <p>"The Warehouse Management System (WMS) at PT Rahayu Antara Nusindo is a custom-built website developed using the Laravel framework. 
                This integrated system is designed to streamline warehouse operations by connecting directly with the 
                company's payroll system and a real-time fingerprint attendance system."</p>
              </div>
            </a>

            {/* Project 2 */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="card-link">
              <div className="card">
                <img src={porto2} alt="porto2" className="porto1" />
                <h3>Loop : Refresh The Streaming Others Beers Cannot Reach</h3>
                <p>Loop was created with full observation and user needs among teenagers and adults, the simple and minimalist appearance will be very helpful and easy to use Loop : Everything can be fun</p>
              </div>
            </a>

            {/* Project 3 */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="card-link">
              <div className="card">
                <img src={porto3} alt="porto3" className="porto1" />
                <h3>Redish : Be The Hero To Against Food Waste</h3>
                <p>ReDish is an application with economic, food and social themes. where we have to fight food waste. there are 3 kinds of features, 
                namely Edible Food which can still be consumed, also Expired Food and Crop Failure.</p>
              </div>
            </a>
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="grid-container">
              <a href="https://drive.google.com/file/d/1tf4kv27AjiF7IUo8RJITGuhOKvIPruLH/view?usp=sharing" className="card-link" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <img src={certificate1} alt="certificate1" className="certificate1" />
                <h3>CCNA (Cisco Certified Network Associate) by Coursera</h3>
                <p>Validates core skills in network fundamentals, IP connectivity, security basics, and automation within Cisco infrastructures.</p>
              </div>
              </a>
            
              <a href="https://drive.google.com/file/d/1O9MOBm6mJBjDg1e7gnlPgk0L8hHfz7e6/view?usp=drive_link" className="card-link" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <img src={certificate2} alt="certificate2" className="certificate2" />
                <h3>Comptia Security+ by Coursera</h3>
                <p>Certifies foundational cybersecurity skills, including risk management, incident response, cryptography, and enterprise network security.</p>
              </div>
              </a>

              <a href="https://drive.google.com/file/d/1hAfBsnEZgwJMJ5eXWDfvEstixCh5ZRzB/view?usp=drive_link" className="card-link" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <img src={certificate3} alt="certificate3" className="certificate3" />
                <h3>HKI Sertifikat Hak Kekayaan Intelektual by DJKI</h3>
                <p>Official Letter of Copyright Recording issued by the Directorate General of Intellectual Property (DJKI) for the WMS application.</p>
              </div>
              </a>
          </div>
        )}

        {activeTab === "techstack" && (
          <div className="techstack-container">
            <div className="tech-item"><i className="devicon-laravel-plain colored"></i><p>Laravel</p></div>
            <div className="tech-item"><i className="devicon-react-original colored"></i><p>ReactJS</p></div>
            <div className="tech-item"><i className="devicon-html5-plain colored"></i><p>HTML</p></div>
            <div className="tech-item"><i className="devicon-css3-plain colored"></i><p>CSS</p></div>
            <div className="tech-item"><i className="devicon-javascript-plain colored"></i><p>JavaScript</p></div>
            <div className="tech-item"><i className="devicon-vite-plain colored"></i><p>Vite</p></div>
            <div className="tech-item"><i className="devicon-tailwindcss-plain colored"></i><p>TailwindCSS</p></div>
            <div className="tech-item"><i className="devicon-bootstrap-plain colored"></i><p>Bootstrap</p></div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;