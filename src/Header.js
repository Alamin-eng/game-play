import React from "react";
import "./App.css";
import logo from "./freetogame-logo.png";
export default function Header() {
 
  return (
    <header className="App-header" id="logo">
      <a href="logo">
        <img className="logo" src={logo} alt="Logo" />
      </a>
      <span className="header-span">Free Games</span>
    </header>
  );
}

/* <a href="logo" rel="noopener noreferrer" id="logo"></a> */