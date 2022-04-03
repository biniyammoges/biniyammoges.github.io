import React, { useState } from "react";
import Lottie from "react-lottie";
import axios from "axios";

import * as doneAnimation from "@/data/lottie/doneAnimation.json";
import * as failedAnimation from "@/data/lottie/failedAnimation";
import * as loadingAnimation from "@/data/lottie/loadingAnimation";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (error) setError(null);
    if (submitted) setSubmitted(false);

    if (!email || !name || !message)
      return setError("Please fill in all fields");

    setLoading(true);
    const { data } = await axios.post("/api/message", { name, email, message });

    if (!data.success) {
      setLoading(false);
      setError(data.error);
      return;
    }

    setLoading(false);
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
    setError(null);
  };

  return (
    <div className="contact-form">
      <form onSubmit={onSubmit}>
        {error ? (
          <div className="alert">
            <Lottie
              style={{ margin: 0, marginRight: 5 }}
              width={30}
              height={30}
              speed={3.5}
              options={{
                animationData: failedAnimation,
                loop: false,
                autoplay: true,
              }}
            />
            <p>{error} 😥️</p>
          </div>
        ) : submitted ? (
          <div className="alert">
            <Lottie
              style={{ margin: 0 }}
              width={40}
              height={40}
              speed={2}
              options={{
                animationData: doneAnimation,
                loop: false,
                autoplay: true,
              }}
            />
            <p>Thank you, I will reply shortly 🤩️</p>
          </div>
        ) : null}

        <input
          type="text"
          placeholder="Full name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email *"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols="30"
          rows="2"
          placeholder="Write message *"
        ></textarea>
        <button
          type="submit"
          style={{ position: "relative", height: loading ? 47 : undefined }}
        >
          {loading ? (
            <Lottie
              style={{
                position: "absolute",
                left: "40%",
                transform: "translateY(-50%)",
              }}
              height={75}
              width={75}
              speed={3}
              options={{
                animationData: loadingAnimation,
                loop: true,
                autoplay: true,
              }}
            />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
