import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";

import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
          <p>
            Please share your thoughts with us. I will reply as soon as possible
          </p>
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
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.facebook.com/bini.moges54/" target="blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.linkedin.com/in/biniyam-moges-278241214/"
              target="blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/iambiniy/" target="blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
