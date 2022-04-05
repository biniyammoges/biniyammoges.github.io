import React from "react";
import EmailForm from "./EmailForm";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="content">
          <h1>Subscribe To Our Newsletter</h1>
          <p>
            You will never miss our new opensource project, the most recent
            blogs, or our newsletter.
          </p>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
