import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsXSquare } from "react-icons/bs";
import "./App.css";
import { FaSquareGithub } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";

export default function ResponsiveDropdown({
  selectPlatform,
  setSelectPlatform,
  selectGenre, 
  setSelectGenre,
}) {
  
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div id="dropdownId">
      <div
        className={`hamburger-menu ${menuActive ? "active" : ""}`}
        onClick={() => setMenuActive(!menuActive)}
      >
        {menuActive ? (
          <BsXSquare className="menu-cross" />
        ) : (
          <HiOutlineMenuAlt3 className="menu-bar" />
        )}
      </div>
      <div className={`dropdown ${menuActive ? "active" : ""}`}>
        <a
          className="home"
          href="https://game-play-mohammad-alamin.netlify.app/"
          style={{ textDecoration: "none" }}
          onClick={() => setMenuActive(false)}
        >
          <FaHome style={{ color: "white", textDecoration: "none" }} />
          <span>Home</span>
        </a>
        <div className="genre">
          <label>Genre</label>
          <select onChange={(e) => setSelectGenre(e)} value={selectGenre}>
            <option value="Genre">Browse Games</option>
            <option value="MMOARPG">MMOARPG</option>
            <option value="Shooter">Shooter</option>
            <option value="ARPG">ARPG</option>
            <option value="Strategy">Strategy</option>
            <option value="MMORPG">MMORPG</option>
            <option value="Fighting">Fighting</option>
            <option value="Action RPG">Action RPG</option>
            <option value="Battle Royale">Battle Royale</option>
            <option value="MOBA">MOBA</option>
            <option value="Card">Card</option>
            <option value="Sports">Sports</option>
            <option value="Racing">Racing</option>
            <option value="MMO">MMO</option>
            <option value="Card Game">Card game</option>
            <option value="Social">Social</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </div>
        <div className="platform">
          <label>Platform</label>
          <select onChange={(e) => setSelectPlatform(e)} value={selectPlatform}>
            <option value="Platform">All platform</option>
            <option value="PC (Windows)">PC (Windows) </option>
            <option value="Web Browser">Web Browser</option>
          </select>
        </div>

        <div className={menuActive ? "social-media" : "no-social-media"}>
          <FaSquareGithub style={{ fontSize: "1.2rem" }} />
          <FaSquareFacebook style={{ fontSize: "1.2rem" }} />
          <SiMinutemailer style={{ fontSize: "1.2rem" }} />
        </div>
      </div>
    </div>
  );
}
