import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import axios from "axios";
import Header from "./Header";
import Main from "./Main";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import ResponsiveDropdown from "./responsive-dropdown";
import Footer from "./footer";
//Signup page
import SignupPage from "./SignupPage";
//pagination


function App() {
  const video = require("./v2.webm");
  const video1 = require("./v3.mp4");
  const video2 = require("./v4.mp4");
  const staticData = require("./staticData.json");

  // // fetch data by api call
  // const [data, setData] = useState([])
  //   useEffect(() => {
  //     try{
  //       axios.get("http://localhost:5001/").then((response) => {
  //         setData(response.data);
  //         // console.log(data);
  //       });
  //     } catch(error){
  //       console.log(error)
  //     }
  //   },[data]);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const [selectPlatform, setSelectPlatform] = useState("Platform");
  const [selectGenre, setSelectGenre] = useState("Genre");

  //Pagination
  // const [currentPage, setCurrentPage] = useState(1);
  // const [recordsPerPage] = useState(16);

  // const indexOfLastRecord = currentPage * recordsPerPage;
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // const currentRecords = staticData.slice(
  //   indexOfFirstRecord,
  //   indexOfLastRecord
  // );
  // const nPages = Math.ceil(staticData.length / recordsPerPage);

  //

  function handleSelectPlatform(e) {
    setSelectPlatform(e.target.value);
  }

  function handleSelectGenre(e) {
    setSelectGenre(e.target.value);
  }

  return (
    <Router>
      <div>
        <div className="header-container">
          <Header />
          <ResponsiveDropdown
            selectPlatform={selectPlatform}
            setSelectPlatform={handleSelectPlatform}
            selectGenre={selectGenre}
            setSelectGenre={handleSelectGenre}
          />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Carousel className="caro">
                  <Carousel.Item interval={7000}>
                    <video autoPlay loop muted className="caroitem">
                      <source src={video} type="video/webm" />
                    </video>
                  </Carousel.Item>
                  <Carousel.Item interval={6000}>
                    <video autoPlay loop muted className="caroitem">
                      <source src={video1} type="video/mp4" />
                    </video>
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <video autoPlay loop muted className="caroitem">
                      <source src={video2} type="video/mp4" />
                    </video>
                  </Carousel.Item>
                </Carousel>

                <Main
                  props={staticData}
                  selectPlatform={selectPlatform}
                  selectGenre={selectGenre}
                />

                <Footer />
              </div>
            }/>
            
          <Route path="/SignupPage" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
