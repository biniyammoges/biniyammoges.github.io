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
              <Link href="/"> Web Development</Link>
            </li>
            <li>
              <Link href="/"> Mobile Development</Link>
            </li>
            <li>
              <Link href="/"> Ui/Ux Design</Link>
            </li>
          </ul>
          <ul>
            <li className="title">
              <h4>Links</h4>
            </li>
            <li>
              <Link href="/"> Blogs</Link>
            </li>
            <li>
              <Link href="/"> Contact</Link>
            </li>
            <li>
              <Link href="/"> Hire Me</Link>
            </li>
          </ul>

          <ul>
            <li className="title">
              <h4>Follow</h4>
            </li>
            <li>
              <Link href="/"> Facebook</Link>
            </li>
            <li>
              <Link href="/"> Linkedin</Link>
            </li>
            <li>
              <Link href="/"> Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
