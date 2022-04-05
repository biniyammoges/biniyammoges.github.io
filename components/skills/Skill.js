import React from "react";
import Image from "next/image";
import Tippy from "@tippyjs/react";

import "tippy.js/dist/tippy.css";

const Skill = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <div className="content">
          <div className="flex">
            <Tippy content="Angular">
              <div className="skill">
                <Image
                  src="/assets/angular.png"
                  alt="Angular"
                  width={40}
                  height={40}
                  objectFit="contain"
                />
              </div>
            </Tippy>
            <Tippy content="Reactjs">
              <div className="skill">
                <Image
                  src="/assets/react.png"
                  alt="React"
                  width={37}
                  height={40}
                  objectFit="contain"
                />
              </div>
            </Tippy>
            <Tippy content="Vuejs">
              <div className="skill">
                <Image
                  src="/assets/vuejs.png"
                  alt="Vuejs"
                  width={35}
                  height={35}
                  objectFit="contain"
                />
              </div>
            </Tippy>
            <Tippy content="Nestjs">
              <div className="skill">
                <Image
                  src="/assets/nestjs.svg"
                  alt="Nestjs"
                  width={40}
                  height={40}
                  objectFit="contain"
                />
              </div>
            </Tippy>
          </div>
          <div className="flex">
            <Tippy content="Nuxtjs">
              <div className="skill">
                <Image
                  src="/assets/nuxt-icon.png"
                  alt="git"
                  width={35}
                  height={40}
                  objectFit="contain"
                />
              </div>
            </Tippy>

            <Tippy content="Socket.io">
              <div className="skill">
                <Image
                  src="/assets/socketio.png"
                  alt="react"
                  width={40}
                  height={40}
                  objectFit="contain"
                />
              </div>
            </Tippy>

            <Tippy content="Nodejs">
              <div className="skill">
                <Image
                  src="/assets/nodejs1.png"
                  alt="Nodejs"
                  width={50}
                  height={50}
                  objectFit="contain"
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </Tippy>
          </div>
          <div className="flex">
            <Tippy content="Nextjs">
              <div className="skill">
                <Image
                  src="/assets/nextjs.png"
                  alt="Nextjs"
                  width={40}
                  height={40}
                  objectFit="contain"
                />
              </div>
            </Tippy>
          </div>
          <div className="abstract2"></div>
        </div>
        <div className="text">
          <h1>
            <span>Skills</span> that I am highly experienced with
          </h1>
          <div className="divider"></div>
          <p>
            I am quite comfortable working with React, Nextjs, Angular, Vuejs,
            nuxtjs, PWA, real time web application, and many other technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
