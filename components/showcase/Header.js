import React, { useState, useRef, useEffect } from "react";
import CustomLink from "../CustomLink";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNav);

    return () => window.removeEventListener("scroll", stickNav);
  }, []);

  const stickNav = (e) => {
    if (window.scrollY > 200) setSticky(true);
    else setSticky(false);
  };

  const openNav = (e) => {
    if (showNav) return closeNav();
    setShowNav(true);
    e.stopPropagation();
    document.addEventListener("click", closeNav);
  };

  const closeNav = (e) => {
    setShowNav(false);
    document.removeEventListener("click", closeNav);
  };

  return (
    <header className={sticky ? "sticky" : undefined}>
      <div className="container flex">
        <Logo />
        <ul className={showNav ? "nav flex active" : "nav flex"}>
          <li>
            <CustomLink href="#/">Blogs</CustomLink>
          </li>
          <li>
            <CustomLink href="#services">Services</CustomLink>
          </li>
          <li>
            <CustomLink href="#skills">Skills</CustomLink>
          </li>
          <li>
            <CustomLink href="#experiances">Experiances</CustomLink>
          </li>
          <li>
            <CustomLink href="#contact">Contact Me</CustomLink>
          </li>
          <li>
            <CustomLink href="#hire" className="hire-btn">
              Hire Me
            </CustomLink>
          </li>
        </ul>
        <MenuButton onClick={openNav} />
      </div>
    </header>
  );
};

export default Header;
