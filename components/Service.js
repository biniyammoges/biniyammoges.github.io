import React from "react";

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
                <i className="fas fa-desktop"></i>
              </div>
              <div className="detail">
                <p className="title">Web Development</p>
                <p className="desc">
                  <strong>100+</strong> Projects
                </p>
              </div>
            </div>
            <div className="fl flex">
              <div className="ui flex">
                <div className="ui-icon">
                  <i className="fas fa-magic"></i>
                </div>
                <div className="detail">
                  <p className="title">UI/Ux Design</p>
                  <p className="desc">
                    <strong>30+</strong> Projects
                  </p>
                </div>
              </div>
              <div className="app flex">
                <div className="app-icon">
                  <i className="fas fa-mobile"></i>
                </div>
                <div className="detail">
                  <p className="title">Mobile Dev.t</p>
                  <p className="desc">
                    <strong>20+</strong> Projects
                  </p>
                </div>
              </div>
            </div>
            <div className="db flex">
              <div className="db-icon">
                <i className="fas fa-database"></i>
              </div>
              <div className="detail">
                <p className="title">Database Design</p>
                <p className="desc">
                  <strong>60+</strong> Projects
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
