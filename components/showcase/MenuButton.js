import React from "react";

const MenuButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="menu-btn">
      <div className="menu-line"></div>
      <div className="menu-line"></div>
      <div className="menu-line"></div>
    </div>
  );
};

export default MenuButton;
