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

  // const height = width > 992 ?? 100%: 70%;
  console.log('width is ', width);
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<LoadingPage/>} />
         <Route path="works" element={<LandingPage/>} />
        <Route path="project/:id" element={<ProjectDetailPage/>} />
        <Route path="information" element={<InfoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
