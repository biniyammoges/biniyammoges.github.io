import React from "react";
import Link from "./CustomLink";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="info">
          <h1>Biniyam Moges</h1>
          <p>
            Senior Full Stack Web Developer With Over 3+ years of experience and
            online instructor
          </p>
          <p className="copyright"> Copyright reserved &copy; 2022</p>
        </div>
        <div className="detail">
          <ul>
            <li className="title">
              <h4>Services</h4>
            </li>
            <li>
              <Link href="/#services"> Web Development</Link>
            </li>
            <li>
              <Link href="/#services"> Mobile Development</Link>
            </li>
            <li>
              <Link href="/#services"> Ui/Ux Design</Link>
            </li>
          </ul>
          <ul>
            <li className="title">
              <h4>Links</h4>
            </li>
            <li>
              <Link href="/blogs"> Blogs</Link>
            </li>
            <li>
              <Link href="/#contact"> Contact</Link>
            </li>
            <li>
              <Link href="/#hire"> Hire Me</Link>
            </li>
          </ul>

          <ul>
            <li className="title">
              <h4>Follow</h4>
            </li>
            <li>
              <a href="https://www.facebook.com/bini.moges54/" target="blank">
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/biniyam-moges-278241214/"
                target="blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/biniyammoges" target="blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
