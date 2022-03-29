import React from "react";

const Hire = () => {
  return (
    <div className="hire" id="hire">
      <div className="container">
        <div className="text">
          <h1>
            You might wonder how we can <span>place an order</span> or
            <span> hire</span> you.
          </h1>
          <div className="divider"></div>
          <p>
            Currently I don`t have my own freelancing platform through which I
            work with my clients. Please select one of the platforms below to
            employ me.
          </p>
        </div>
        <div className="content">
          <img src="./assets/arrow.svg" alt="" className="arrow" />
          <a
            href="https://www.upwork.com/freelancers/~0188fc3fdbb85a5818"
            className="upwork"
            target="blank"
          >
            <img src="./assets/upwork.png" alt="" />
          </a>
          <a href="#" className="fivver">
            <img src="./assets/fivver.png" alt="" />
          </a>
          <a href="#" className="freelance">
            <img src="./assets/freelancer.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hire;
