import React from "react";

const EmailForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="Email address" />
      <button>Go</button>
    </form>
  );
};

export default EmailForm;
