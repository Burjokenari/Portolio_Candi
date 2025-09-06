import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import "./Contact.css";

function LogoBox({ position, rotation }) {
  const texture = useTexture("/logo.png"); // taruh logo.png di public/

  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[1.0, 1.0, 1.0]} />
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
        "service_4yoy28p", // Service ID
        "template_ypqkmda", // Template ID
        form.current,
        "F2aKkaZ95FDzuDIqq" // Public Key
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
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />

          {/* 3 logo box */}
          <LogoBox position={[-3, 0, 0]} rotation={[0.3, 0.5, 0]} />
          <LogoBox position={[0, 0, 0]} rotation={[0.1, 0.9, 0.2]} />
          <LogoBox position={[3, 0, 0]} rotation={[0.4, 0.2, 0.3]} />
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