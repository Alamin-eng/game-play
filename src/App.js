import React, { useEffect} from 'react';
import './App.css';
// import axios from "axios";
import Header from './Header';
import Main from './Main';

//import ReactPlayer from "react-player";

// function App() {
//   const [data, setData] = useState("")

//   useEffect(() => {
//     try{
//       axios
//       .get("http://localhost:5001/")
//       .then((response) => {
//         setData(response.data);
//         console.log(data)
//       })
//     } catch(error){
//       console.log(error)
//     }
    
//   },[]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <a
//           href="https://www.freetogame.com/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={logo} alt="Logo" />
//         </a>
//       </header>   
//       </div>
//   );
// }

// export default App;



import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  const video = require("./v2.webm");
  const video1 = require("./v3.mp4");
  const video2 = require("./v4.mp4");
  const staticData = require("./staticData.json")

    // const [data, setData] = useState([])

    // useEffect(() => {
    //   try{
    //     axios.get("http://localhost:5001/").then((response) => {
    //       setData(response.data);
    //       console.log(data);
    //     });
    //   } catch(error){
    //     console.log(error)
    //   }
    // },[data]);

    
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div>
      <Header />
      <Carousel className="caro">
        <Carousel.Item interval={4000}>
          <video autoPlay loop muted className="caroitem">
            <source src={video} type="video/mp4" />
          </video>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <video autoPlay loop muted className="caroitem">
            <source src={video1} type="video/mp4" />
          </video>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <video autoPlay loop muted className="caroitem">
            <source src={video2} type="video/webm" />
          </video>
        </Carousel.Item>
      </Carousel>

      <Main props={staticData} />
    </div>
  );
}
export default App;


