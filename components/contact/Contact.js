import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import ContactForm from "./ContactForm";

const Contact = () => {
  const [phone] = useState("+251955306094");
  const [email] = useState("biniyammoges54@gmail.com");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="abstract1"></div>
        <ContactForm />
        <div className="text">
          <h1>
            <span>Thanks</span> for your interest in my work, feel free to
            contact me
          </h1>
          <div className="divider"></div>
          <p>Please share your thoughts with us. I will reply shortly</p>
          <ul>
            <Tippy
              content={copied ? "Copied!" : "Copy to clipboard"}
              hideOnClick={false}
              onHide={() => setCopied(false)}
            >
              <button onClick={() => copyToClipboard(phone)}>
                <FontAwesomeIcon icon={faPhone} /> {phone}
              </button>
            </Tippy>

            <Tippy
              content={copied ? "Copied!" : "Copy to clipboard"}
              hideOnClick={false}
              onHide={() => setCopied(false)}
            >
              <button onClick={() => copyToClipboard(email)}>
                <FontAwesomeIcon icon={faEnvelope} /> {email}
              </button>
            </Tippy>
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
