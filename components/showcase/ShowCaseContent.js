import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar, faAward } from "@fortawesome/free-solid-svg-icons";

const ShowCaseContent = () => {
  return (
    <div className="showcase-content">
      <div className="container">
        <div className="text">
          <h1>
            Senior Full Stack Web <span className="colored">Developer</span>{" "}
            With Over <span className="colored"> 4+</span> years of experience
          </h1>
          <p>
            Hello 👋️, I am a frontend and backend technology expert as well as
            a UI/UX designer. I can help you take your project to the next
            level.
          </p>
          <a
            href="mailto:biniyammoges54@gmail.com"
            className="order-btn"
            target="blank"
          >
            Let`s talk now
          </a>
        </div>
        <div className="image">
          <div className="rate star">
            <div className="icon">
              <span>
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
            <h4>
              5 Stars On <br />
              Upwork
            </h4>
          </div>
          <div className="rate award">
            <div className="icon">
              <span>
                <FontAwesomeIcon icon={faAward} />
              </span>
            </div>
            <h4>
              Best Coding <br />
              Awards
            </h4>
          </div>
          <img src="./assets/my_pic.jpg" alt="shoxase" />
        </div>
      </div>
    </div>
  );
};

export default ShowCaseContent;
