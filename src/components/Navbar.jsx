import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  // State untuk mengecek apakah menu sedang terbuka atau tidak
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk mengubah status menu (buka/tutup)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">Candi<span className="highlight">Kafka</span></span>
      </div>

      {/* Tombol Hamburger (Hanya muncul di Mobile) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {/* Jika isOpen true, tampilkan icon X (fa-times), jika false tampilkan garis 3 (fa-bars) */}
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Tambahkan class 'active' jika isOpen bernilai true */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;