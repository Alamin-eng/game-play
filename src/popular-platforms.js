import { FaSteamSquare } from "react-icons/fa";
import { BsBadgeVrFill } from "react-icons/bs";
import { SiEpicgames } from "react-icons/si";
import { FaXbox } from "react-icons/fa6";
import { BsPlaystation } from "react-icons/bs";

export default function PopularPlatforms() {
  return (
    <div className="popular-platforms">
      <a
        className=""
        style={{
          textDecoration: "none",
          fontSize: "calc(1.1rem +.5rem)",
          color: "#0a9800",
        }}
        href="https://www.xbox.com/en-gb/games?xr=shellnav"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXbox style={{ fontSize: "17px" }} />
      </a>
      <a
        className=""
        style={{
          textDecoration: "none",
          fontSize: "calc(1.1rem +.5rem)",
          color: "white",
        }}
        href="https://store.steampowered.com/pccafe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSteamSquare style={{ fontSize: "17px" }} />
      </a>
      <a
        className=""
        style={{
          textDecoration: "none",
          fontSize: "calc(1.1rem +.5rem)",
          color: "#0029f3",
        }}
        href="https://www.playstation.com/en-gb/games/pc-games/?smcid=pdc%3Aen-gb%3Aps4-ps4-games%3Aprimary%20nav%3Amsg-games%3Apc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsPlaystation style={{ fontSize: "19px" }} />
      </a>
      <a
        className=""
        style={{
          textDecoration: "none",
          fontSize: "calc(1.1rem +.5rem)",
          color: "white",
        }}
        href="https://store.epicgames.com/en-US/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiEpicgames style={{ fontSize: "17px" }} />
      </a>
      <a
        className=""
        style={{
          textDecoration: "none",
          fontSize: "1.1rem",
          color: "#cd5c00",
        }}
        href="https://store.steampowered.com/vr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsBadgeVrFill style={{ fontSize: "18px" }} />
      </a>
    </div>
  );
}
