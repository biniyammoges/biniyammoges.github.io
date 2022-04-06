import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDesktop,
  faMagic,
  faMobile,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="abstract1"></div>
        <div className="content">
          <div className="list flex">
            <img src="./assets/circle-bg.svg" alt="service" />
            <div className="web flex">
              <div className="web-icon">
                <FontAwesomeIcon icon={faDesktop} />
              </div>
              <div className="detail">
                <p className="title">Web Development</p>
                <p className="desc">
                  <strong>20+</strong> Projects
                </p>
              </div>
            </div>
            <div className="fl flex">
              <div className="ui flex">
                <div className="ui-icon">
                  <FontAwesomeIcon icon={faMagic} />
                </div>
                <div className="detail">
                  <p className="title">UI/Ux Design</p>
                  <p className="desc">
                    <strong>10+</strong> Projects
                  </p>
                </div>
              </div>
              <div className="app flex">
                <div className="app-icon">
                  <FontAwesomeIcon icon={faMobile} />
                </div>
                <div className="detail">
                  <p className="title">Mobile Dev.t</p>
                  <p className="desc">
                    <strong>5</strong> Projects
                  </p>
                </div>
              </div>
            </div>
            <div className="db flex">
              <div className="db-icon">
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <div className="detail">
                <p className="title">Database Design</p>
                <p className="desc">
                  <strong>3</strong> Projects
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text">
          <h1>
            List of the <span>high-quality</span> services I can offer you.
          </h1>
          <div className="divider"></div>
          <p>
            I have proven experience in developing apps and production ready
            websites in a test-driven environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
