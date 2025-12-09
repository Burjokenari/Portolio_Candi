import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  const handleEnter = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // sesuai durasi animasi CSS
  };

  return (
    <div className="App">
      {loading ? (
        <div
          className={`loading-screen ${animateOut ? "zoom-blur-out" : ""}`}
          onClick={handleEnter} // klik di mana saja
        >
          <h1 className="loading-text">Welcome!</h1>
          <h5 className="loading-sub">Knock knock… Are you ready? Click anywhere to open the door.</h5>
        </div>
      ) : (
        <div className="landing zoom-in">
          <Navbar />
          <Hero />
          <Projects />
          <Contact />
          <BackToTop />
        </div>
      )}
    </div>
  );
}

export default App;