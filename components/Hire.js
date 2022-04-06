import Image from "next/image";

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
            I{"'"}m looking forward to meeting you. Please choose one of the
            platforms mentioned to hire me.
          </p>
        </div>
        <div className="content">
          <img src="/assets/arrow.svg" alt="arrow" className="arrow" />
          <a
            href="https://www.upwork.com/freelancers/~0188fc3fdbb85a5818"
            className="upwork"
            target="blank"
          >
            <Image
              src="/assets/upwork.png"
              height={100}
              width={100}
              alt="upwork"
              objectFit="contain"
            />
          </a>
          <a
            href="https://www.fiverr.com/biniyammoges"
            className="fivver"
            target="blank"
          >
            <Image
              src="/assets/fivver.png"
              width={130}
              height={100}
              alt="fiver"
              objectFit="contain"
            />
          </a>
          <a
            href="https://www.freelancer.com/u/biniyammoges"
            target="blank"
            className="freelance"
          >
            <Image
              src="/assets/freelancer.png"
              alt="freelancer"
              width={120}
              height={100}
              objectFit="contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hire;
