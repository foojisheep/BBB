import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import landing from './resource/homepage.jpg';
import LoadingPage from './loadingPage';
import './App.css';
import LandingPage from "./landingPage";
import ProjectDetailPage from "./projectDetails";
import InfoPage from './infoPage'

import { BrowserRouter, Routes, Route, withRouter } from "react-router-dom";


export default function App() {
  const [width, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  // componentDidMount...runs only once
  useEffect( () => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const responsive = {
    showTopNavMenu: width > 1023
  }

  console.log('width is ', width);
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<LandingPage />}>
          {/* <Route index element={<LandingPage />} /> */}
           <Route path="/works" exact element={<LandingPage />} />
           {/* <Route path="information" element={<Contact />} /> */}
           <Route path="/information" element={<InfoPage />} />
         </Route>
      </Routes>
    </BrowserRouter>



    // <div>
      //  <header className="App-header">
      //   <img src={landing} className="App-logo" alt="logo" />
      // </header> 
    //   {/* <div className="App-full"> */}
    //     {/* <LandingPage /> */}
    //     {/* <InfoPage /> */}
    //     {/* <ProjectDetailPage /> */}
    //   {/* </div> */}
    //   {/* <img src={logoStart} alt="loading-page" /> */}
    // {/* </div> */}
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
