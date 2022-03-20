import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [emailForm, setEmailForm] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7jnxh47",
        "template_matwtnr",
        form.current,
        "_wE-6ASaQ8nnTJva8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setEmailForm(true);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dbae82@gmail.com</h5>
            <a href="mailto:dbae82@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {!emailForm ? (
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        ) : (
          <h2>
            Your email has been successfully sent. Hope you enjoyed my work!
          </h2>
        )}
      </div>
    </section>
  );
};

export default Contact;
