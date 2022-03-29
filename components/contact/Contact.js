import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <img src="./assets/thanks.jpg" alt="dd" />
      <div className="container">
        <div className="abstract1"></div>
        <ContactForm />
        <div className="text">
          <h1>
            Thanks for your <span>interest</span> in my work, feel free to
            contact me
          </h1>
          <div className="divider"></div>
          <p>Please share your thoughts with us.</p>
          <ul>
            <li>
              <i className="fas fa-phone"></i> +251955306094
            </li>
            <li>
              <i className="fas fa-envelope"></i> biniyammoges54@gmail.com
            </li>
          </ul>
          <ul>
            <a href="https://github.com/biniyammoges" target="blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/bini.moges54/" target="blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/biniyam-moges-278241214/"
              target="blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/iambiniy/" target="blank">
              <i className="fab fa-instagram"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
