import React from "react";
import EmailForm from "./EmailForm";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="content">
          <h1>Subscribe for newsletter</h1>
          <p>
            Currently i don’t have my own freelancing platform work with my
            client but I am working on it
          </p>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
