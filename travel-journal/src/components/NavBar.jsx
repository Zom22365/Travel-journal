import React from "react";
import Logo from "../img/global.png";

const NavBar = () => {
  return (
    <nav className="nav">
      <img className="logo" src={Logo} alt="" />
      <span className="brand">my travel journal.</span>
    </nav>
  );
};

export default NavBar;
