import { useState } from "react";

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
          <div className="main-card" key={index} data-aos="zoom-in">
            <a
              href={`${url}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleFetchUrl(el.freetogame_profile_url)}
            >
              <img src={`${el.thumbnail}`} alt="game" data-aos="fade-out"></img>
            </a>
            <h3>{el.title}</h3>
          </div>
        );
      })}
    </div>
  );
}
