import { FaSteamSquare } from "react-icons/fa";
import { BsBadgeVrFill } from "react-icons/bs";
import { SiEpicgames } from "react-icons/si";
import { FaXbox } from "react-icons/fa6";
import { BsPlaystation } from "react-icons/bs";

export default function PopularPlatforms() {
  return (
    <div className="popular-platforms">
      <a
        style={{
          textDecoration: "none",
          fontSize: "1rem",
        }}
        href="https://www.xbox.com/en-gb/games?xr=shellnav"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXbox
          style={{
            color: "rgb(0, 192, 33)",
          }}
        />
      </a>
      <a
        className=""
        style={{
          textDecoration: "none",
          fontSize: "1rem",
          color: "rgb(210, 245, 255)",
        }}
        href="https://store.steampowered.com/pccafe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSteamSquare />
      </a>
      <a
        className=""
        style={{
          textDecoration: "none",
          fontSize: "1.1rem",
        }}
        href="https://www.playstation.com/en-gb/games/pc-games/?smcid=pdc%3Aen-gb%3Aps4-ps4-games%3Aprimary%20nav%3Amsg-games%3Apc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsPlaystation
          style={{
            color:
              "linear-gradient(300deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 41%, rgba(0,212,255,1) 100%)",
          }}
        />
      </a>
      <a
        className=""
        style={{
          textDecoration: "none",
          fontSize: "1rem",
          color: "white",
        }}
        href="https://store.epicgames.com/en-US/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiEpicgames SiEpicgames />
      </a>
      <a
        className=""
        style={{
          textDecoration: "none",
          fontSize: "1.1rem",
          color: "#c93500",
        }}
        href="https://store.steampowered.com/vr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsBadgeVrFill />
      </a>
    </div>
  );
}
