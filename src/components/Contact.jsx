import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4yoy28p",   // ganti dengan Service ID dari EmailJS
        "template_ypqkmda",  // ganti dengan Template ID
        form.current,
        "F2aKkaZ95FDzuDIqq"    // ganti dengan Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message, try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
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
    </section>
  );
}

export default Contact;