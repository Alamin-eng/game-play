import { useState } from "react";
import { FaWindows } from "react-icons/fa";
import { IoBrowsers } from "react-icons/io5";
export default function Main({ props }) {
  //get profile url by freetogame_profile_url
  const [url, setUrls] = useState("");

  function handleFetchUrl(getUrl) {
    setUrls(getUrl);
    console.log(getUrl);
  }
  
  // // get id to fetch individual game data by id
  // const [id, setId] = useState(null);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   if (id !== null) {
  //     // Fetch data when `id` changes and is not null
  //     handleFetch();
  //   }
  // }, [id]);
  // async function handleFetch() {
  //   try {
  //     const response = await axios.get(`http://localhost:5001/${id}`);
  //     setData(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // async function handleClick(getId) {
  //   setId(getId);
  //   console.log(getId);
  // }

  return (
    <div className="main">
      {props.map((el, index) => {
        return (
          <div className="main-card" key={index}>
            <div data-aos="zoom-in">
              <div className="card-img">
                <img
                  src={`${el.thumbnail}`}
                  alt="game"
                  data-aos="fade-out"
                ></img>
              </div>
              <div className="card-body">
                <div className="title-platform">
                  <div>
                    <p className="platform-header">
                      <span className="text-span">Title</span>
                    </p>
                    <p>{el.title}</p>
                  </div>
                  <div>
                    <p className="platform-header">
                      <span className="text-span">Release date</span>
                    </p>
                    <p>{el.release_date}</p>
                  </div>
                </div>

                <div className="short-description">
                  <p>{el.short_description}</p>
                </div>
                <div className="platform">
                  <div>
                    <p className="platform-header">
                      <span className="text-span">Genre</span>
                    </p>
                    <p className="badge">
                      <span>{el.genre}</span>
                    </p>
                  </div>

                  <div>
                    <p className="platform-header">
                      <span className="text-span">Platform</span>
                    </p>
                    <p style={{ color: "white" }}>
                      {el.platform === "PC (Windows)" ? (
                        <FaWindows />
                      ) : (
                        <IoBrowsers />
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="platform-header">
                      <span className="text-span">Developer</span>
                    </p>
                    <p>{el.developer}</p>
                  </div>
                </div>

                <div>
                  <a
                    className="main-play"
                    style={{ textDecoration: "none", color: "white" }}
                    href={`${url}`}
                    target="_blank"
                    rel="noopener noreferrer" // NOTICE rel VALUES SET FOR SECURITY REASON
                    onClick={() => handleFetchUrl(el.game_url)}
                  >
                    PLAY
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
