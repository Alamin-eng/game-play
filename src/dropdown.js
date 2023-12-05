
/* this Dropdown component is NOT USED in App.js, ResponsiveDropdown component is used instead */
import React from "react";
import "./App.css";

export default function Dropdown({ selectPlatform, setSelectPlatform, selectGenre, setSelectGenre }) {
  return (
    <div className="dropdown">
      <div className="genre">
        <label>Genre</label>
        <select onChange={(e) => setSelectGenre(e)} value={selectGenre}>
          <option value="Genre">All genre</option>
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
  );
}


