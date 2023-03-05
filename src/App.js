import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import LoadingPage from './loadingPage';
import './App.css';
import LandingPage from "./landingPage";
import ProjectDetailPage from "./projectDetails";
import InfoPage from "./infoPage";
import { BrowserRouter, Routes, Route, withRouter } from "react-router-dom";
import NavBar from "./navBar";
import { AnimatePresence } from 'framer-motion';
import { ViewContext } from "./ViewContext";


export default function App() {
  const screenWidth = window.innerWidth;

  const [mobileView, setMobileView] = useState(false);
  const [laptopView, setLaptopView] = useState(false);
  
  
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

  const onResize = () => { 
    console.log('enter resize');
    if(screenWidth < 500){
      setMobileView(true);
      setLaptopView(false);
      console.log('mobile');
    } else if(screenWidth > 500){
      setLaptopView(true);
      setMobileView(false);
      console.log('test laptop');
    }
  }

  useEffect(() => {
    console.log('resize')
    onResize()
  }, [width]);

  

  return (
    <ViewContext.Provider value = {{mobileView, setMobileView, laptopView,setLaptopView}}>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<LoadingPage/>} />
         <Route path="works" element={<LandingPage/>} />
        <Route path="project/:id" element={<ProjectDetailPage/>} />
        <Route path="information" element={<InfoPage/>} />
      </Routes>
    </BrowserRouter>
    </ViewContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
