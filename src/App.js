import React, { useState, useEffect } from "react";
import landing from './resource/homepage.jpg';
import LoadingPage from './loadingPage';
import './App.css';
import LandingPage from "./landingPage";

function App() {
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
    <div>
      {/* <header className="App-header">
        <img src={landing} className="App-logo" alt="logo" />
      </header> */}
      <div className="App-full">
        {/* <LoadingPage /> */}
        <LandingPage />
      </div>
      {/* <img src={logoStart} alt="loading-page" /> */}
    </div>
  );
}

export default App;
