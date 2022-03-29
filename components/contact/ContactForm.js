import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="contact-form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols="30"
          rows="2"
          placeholder="Write message"
        ></textarea>
        <button disabled={!name || !email || !message} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
