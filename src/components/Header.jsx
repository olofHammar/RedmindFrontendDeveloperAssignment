import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src="img/starwars-logo.png" className="header-logo" />
      </div>
      <div className="header-title-container">
        <p>MAY THE FORCE BE WITH YOU</p>
      </div>
    </div>
  );
}

export default Header;
