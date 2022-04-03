import { useState } from "react";
import Lottie from "react-lottie";
import axios from "axios";

import loadingAnimation from "@/data/lottie/loadingAnimation";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setSubmitted(false);

    if (!email) return setError("* Please add your email to subscribe");

    setLoading(true);
    const { data } = await axios.post("/api/subscribe", { email });

    if (!data.success) {
      setError(data.error);
      setLoading(false);
      return;
    }

    setLoading(false);
    setSubmitted(true);
    setEmail("");
    setError(null);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button style={{ position: "relative", fontSize: 16 }}>
          {loading ? (
            <Lottie
              style={{
                margin: 0,
                padding: 0,
                position: "absolute",
                top: -12,
                left: 4,
              }}
              height={60}
              width={60}
              options={{
                animationData: loadingAnimation,
                loop: true,
                autoplay: true,
              }}
            />
          ) : (
            "Subscribe"
          )}{" "}
        </button>
      </form>

      <span
        style={{
          display: "block",
          margin: 10,
          color: "white",
        }}
      >
        {error
          ? error
          : submitted
          ? "👍️ Thank you, You will get updated"
          : null}
      </span>
    </>
  );
};

export default EmailForm;
