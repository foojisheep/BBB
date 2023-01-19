import logoStart from './resource/logo-start.svg';
import logoMiddle from './resource/logo-middle.svg';
import logoEnd from './resource/logo-end.svg';
import './loadingPage.css';
import { Link } from 'react-router-dom';
import logoBig from './resource/logo.svg';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./project";
import Navbar from "./navBar";

let transition = { duration: 3, ease: [0.6, 0.01, -0.05, 0.9], scale: 1.1 };
// let transition = { duration:1.4, ease: [0.6, 0.01, -0.05, 0.9] };
let initial = { y: "20%", width: "100%" };
if (window.innerWidth < 992) {  //tablet
  initial = { y: "140%", width: "100%" };
  transition = { duration: 3, ease: [0.1, 0.01, -0.05, 0.9] };
} else if (window.innerWidth < 992 && window.innerWidth > 768) {
  initial = { y: "140%", width: "100%" }; // small device
  transition = { duration: 3, ease: [-0.8, 0.01, -0.05, 0.9] };
}
else {
  initial = { y: "20%", width: "100%" }; // large device
  transition = { duration: 3, ease: [0.6, 0.01, -0.05, 0.9] };
}
export default function LoadingPage() {
  const [showLoading, setShowLoading] = useState(true);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(!showLoading);
      setShowLanding(!showLanding);
    }, 3000)
  }, []);

  const logos = [logoBig];
  const logo = logos.map((logo, index) => (
    <img key={index} style={{ width: "50%" }} src={logo} alt={logo.toString()} />
  ));

  return (
    <>
      {/* <div className='defaultLandingPage-full'>
          <div className="loadingPage-full">
            <div className='loadingPage-image'>
              {logo}
              {logo}
            </div>
          </div>
          </div> */}
      {/* <AnimatePresence> */}
      {showLoading && (
        <div className='defaultLandingPage-full'>
          <div className="loadingPage-full">
            <div className='loadingPage-image'>
              {logo}
              {logo}
            </div>
          </div>
        </div>
        // <motion.div>
        //   <div className='defaultLandingPage-full'>
        //   <motion.div initial={{ height:'100%'}} transition={{ transition }} className="loadingPage-full vertical-container">

        //     {logo}

        //   </motion.div>
        //   </div>
        // </motion.div>
      )}
      {/* </AnimatePresence>  */}
      {/* <AnimatePresence> */}
      {showLanding && (
        <div style={{ display: 'flex', flexDirection: 'column', height: "100vh", width: "100vw" }}>
          <Navbar />
          <div className='landingPage-full0'>
            <div key="landing" className="landingPage-full1">
              <img id="hoverImage" key='logo' className="landingPage-image1" src={logoBig} alt={logoBig.toString()} />
            </div>
          </div>
          <Projects />
        </div>
      )}
      {/* </AnimatePresence> */}
    </>
  );
}