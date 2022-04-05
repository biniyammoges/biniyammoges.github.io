import axios from "axios";
import { useState } from "react";
import classes from "./EmailCard.module.css";

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    if (!email) return setError("Please add email to subscribe!");

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
  };

  return (
    <div className={classes.subscribe}>
      <h3>Subscribe To Our Newsletter</h3>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email address"
        />
        <br />
        <button>{loading ? "Sending" : "Subscribe"}</button>
      </form>
      {error ? (
        <span> * {error}</span>
      ) : submitted ? (
        <span>👍️ Thank you, You will get updated</span>
      ) : null}
    </div>
  );
};

export default Index;
