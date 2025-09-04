import React, { useState } from "react";
import "./Projects.css";
import { FaCode, FaCertificate, FaTools } from "react-icons/fa"; // ⬅️ tambahan

function Projects() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <p className="projects-desc">
        Berikut adalah beberapa project, sertifikat, dan teknologi yang saya gunakan dalam pengembangan website.
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

        {/*<div className="divider"></div>*/}

        {/*<button
          className={`tab-btn ${activeTab === "certificates" ? "active" : ""}`}
          onClick={() => setActiveTab("certificates")}
        >
          <FaCertificate className="btn-icon" />
          <span>Certificates</span>
        </button>

        <div className="divider"></div>*/}

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
            <div className="card">
              <img
                src="src/assets/porto1.png"
                alt="WMS"
              />
              <h3>Warehouse Website Integrated System at PT Rahayu Antara Nusindo</h3>
              <p>"The Warehouse Management System (WMS) at PT Rahayu Antara Nusindo is a custom-built website developed using the Laravel framework. 
                This integrated system is designed to streamline warehouse operations by connecting directly with the 
                company's payroll system and a real-time fingerprint attendance system, which utilizes the FingerSpot API."</p>
            </div>
            <div className="card">
              <img
                src="src/assets/porto2.png"
                alt=""
              />
              <h3>Loop : Refresh The Streaming Others Beers Cannot Reach</h3>
              <p>Loop was created with full observation and user needs among teenagers and adults, the simple and minimalist appearance will be very helpful and easy to use Loop : Everything can be fun</p>
            </div>
            <div className="card">
              <img
                src="src/assets/porto3.png"
                alt="Redish"
              />
              <h3>Redish : Be The Hero To Against Food Waste</h3>
              <p>ReDish is an application with economic, food and social themes. where we have to fight food waste. there are 3 kinds of features, 
                namely Edible Food which can still be consumed, also Expired Food and Crop Failure which can be processed into fertilizer and agricultural materials
                Hicks and Jacobs Law are fundamental to the development of this interface design. with an intuitive design that makes 
                it easy for users to understand the applications they use</p>
            </div>
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="grid-container">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="card">
                <img
                  src={`https://via.placeholder.com/400x200?text=Certificate+${i + 1}`}
                  alt={`Certificate ${i + 1}`}
                />
                <h3>Certificate {i + 1}</h3>
                <p>Sertifikat dari course {i + 1}.</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "techstack" && (
          <div className="techstack-container">
            <div className="tech-item">
              <i className="devicon-laravel-plain colored"></i>
              <p>Laravel</p>
            </div>
            <div className="tech-item">
              <i className="devicon-react-original colored"></i>
              <p>ReactJS</p>
            </div>
            <div className="tech-item">
              <i className="devicon-html5-plain colored"></i>
              <p>HTML</p>
            </div>
            <div className="tech-item">
              <i className="devicon-css3-plain colored"></i>
              <p>CSS</p>
            </div>
            <div className="tech-item">
              <i className="devicon-javascript-plain colored"></i>
              <p>JavaScript</p>
            </div>
            <div className="tech-item">
              <i className="devicon-vite-plain colored"></i>
              <p>Vite</p>
            </div>
            <div className="tech-item">
              <i className="devicon-tailwindcss-plain colored"></i>
              <p>TailwindCSS</p>
            </div>
            <div className="tech-item">
              <i className="devicon-bootstrap-plain colored"></i>
              <p>Bootstrap</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
