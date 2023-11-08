import React from "react";
import "./App.css";
import logo from "./freetogame-logo.png";

export default function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://www.freetogame.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src={logo} alt="Logo" />
        </a>
        <span className="header-span">Free Games</span>
      </header>
    </div>
  );
};
