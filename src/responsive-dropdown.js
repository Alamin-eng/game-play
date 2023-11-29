import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import "./App.css";

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
        &#9776;
      </div>
      <div className={`dropdown ${menuActive ? "active" : ""}`}>
        <a
          className="home"
          href="#"
          style={{ textDecoration: "none" }}
          onClick={() => setMenuActive(false)}
        >
          <FaHome style={{ color: "white", textDecoration: "none" }} />
          <span>Home</span>
        </a>
        <div className="genre">
          <label>Genre</label>
          <select onChange={(e) => setSelectGenre(e)} value={selectGenre}>
            <option value="Genre">Select genre</option>
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
      </div>
    </div>
  );
}
