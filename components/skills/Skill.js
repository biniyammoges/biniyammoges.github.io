import React from "react";

const Skill = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <div className="content">
          <div className="flex">
            <div className="skill">
              <img src="./assets/angular.png" alt="angular" />
            </div>
            <div className="skill">
              <img src="./assets/react.png" alt="react" />
            </div>
            <div className="skill">
              <img src="./assets/vuejs.png" alt="docker" />
            </div>
            <div className="skill">
              <img src="./assets/nestjs.svg" alt="nest" />
            </div>
          </div>
          <div className="flex">
            <div className="skill">
              <img src="./assets/git.png" alt="angular" />
            </div>
            <div className="skill">
              <img src="./assets/socketio.png" alt="react" />
            </div>
            <div className="skill">
              <img src="./assets/nodejs.jpg" alt="docker" />
            </div>
          </div>
          <div className="flex">
            <div className="skill">
              <img src="./assets/nextjs.png" alt="nest" />
            </div>
          </div>
          <div className="abstract2"></div>
        </div>
        <div className="text">
          <h1>
            <span>Skills</span> that i am highly experianced with
          </h1>
          <div className="divider"></div>
          <p>
            Senior Full Stack Developer with +3 years of experience who is
            comfortable working with React / Nextjs, Angular, Vuejs and Nodejs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
