import Lottie from "react-lottie";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

import * as secureAnimation from "@/data/lottie/secureAnimation";
import * as fastAnimation from "@/data/lottie/fastAnimation";

const Work = () => {
  return (
    <div className="works">
      <div className="container">
        <div className="text">
          <h1>
            Clients consistently receive
            <span> high-quality</span> work from me.
          </h1>
          <div className="divider"></div>
          <p>
            I always offer software that is SEO optimized, performs well, has
            clean and maintainable code, and includes post-delivery support.
          </p>
        </div>
        <div className="content">
          <div className="list flex">
            <div className="abtract2"></div>

            <Image
              src="/assets/circle-bg.svg"
              alt="service"
              height={50}
              width={50}
            />
            <div className="security flex">
              <div
                style={{ backgroundColor: "white !important" }}
                className="security-icon"
              >
                <Lottie
                  options={{
                    animationData: secureAnimation,
                    autoplay: true,
                    loop: false,
                  }}
                  width={45}
                  height={60}
                />
              </div>
              <div className="detail">
                <p className="title">Strong Security</p>
                <p className="desc">Prevent common attacks.</p>
              </div>
            </div>
            <div className="speed flex">
              <div className="speed-icon">
                <Lottie
                  options={{
                    animationData: fastAnimation,
                    autoplay: true,
                    loop: true,
                  }}
                  width={90}
                  height={90}
                  speed={0.3}
                />
              </div>
              <div className="detail">
                <p className="title">Fast Delivery</p>
                <p className="desc">Always deliver on time.</p>
              </div>
            </div>
            <div className="online flex">
              <div className="online-icon">
                <i className="fas fa-database"></i>
                <FontAwesomeIcon icon={faCheckDouble} />
              </div>
              <div className="detail">
                <p className="title">24/7 active</p>
                <p className="desc">Always active.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
