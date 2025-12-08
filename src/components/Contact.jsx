import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import "./Contact.css";

function LogoBox({ position, rotation }) {
  // Pastikan file logo.png ada di folder public
  const texture = useTexture("/logo.png"); 

  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[1.2, 1.2, 1.2]} /> {/* Sedikit diperbesar */}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4yoy28p", 
        "template_ypqkmda", 
        form.current,
        "F2aKkaZ95FDzuDIqq"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("❌ Failed to send message, try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        {/* Camera dimundurkan sedikit ke z: 8 agar muat di layar HP */}
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          {/* Zoom dimatikan agar user tidak sengaja zoom saat scroll halaman */}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />

          {/* Posisi Box */}
          <LogoBox position={[-2.5, 0, 0]} rotation={[0.3, 0.5, 0]} />
          <LogoBox position={[0, 0, 0]} rotation={[0.1, 0.9, 0.2]} />
          <LogoBox position={[2.5, 0, 0]} rotation={[0.4, 0.2, 0.3]} />
        </Canvas>
      </div>

      <div className="contact-right">
        <h2>Contact Me</h2>
        <p className="contact-desc">
          Feel free to reach out to me for collaborations, freelance work, or just to say hello! 🚀
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;