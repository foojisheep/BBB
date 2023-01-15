import logoStart from './resource/logo-start.svg';
import logoMiddle from './resource/logo-middle.svg';
import logoEnd from './resource/logo-end.svg';
import './loadingPage.css';
import { Link } from 'react-router-dom';
import logoBig from  './resource/logo.svg';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./project";
import Navbar from "./navBar";

let transition = { duration:3, ease: [0.6, 0.01, -0.05, 0.9], scale: 1.1};
// let transition = { duration:1.4, ease: [0.6, 0.01, -0.05, 0.9] };
let initial = { y: "20%", width: "100%"};
if(window.innerWidth < 992){  //tablet
    initial = { y: "140%", width: "100%"};
    transition = { duration:3, ease: [0.1, 0.01, -0.05, 0.9] };
  } else if(window.innerWidth < 992 && window.innerWidth > 768){
    initial = { y: "140%", width: "100%"}; // small device
    transition = { duration:3, ease: [-0.8, 0.01, -0.05, 0.9] };
  }
  else {
    initial = { y: "20%", width: "100%"}; // large device
    transition = { duration:3, ease: [0.6, 0.01, -0.05, 0.9]};
 }
export default function LoadingPage() {    
  const [showLoading, setShowLoading] = useState(true);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(!showLoading);
      setShowLanding(!showLanding);
    }, 3000)  }, []);

  const logos = [logoBig,logoBig,logoBig, logoBig];
  const logo = logos.map((logo,index) => (
    <img key={index} className="loadingPage-image" src={logo} alt={logo.toString()} />
  ));
  console.log('hello');
  return(
    <>
    <AnimatePresence>
      {showLoading && (
        <motion.div>
          <div className='defaultLandingPage-full'>
          <motion.div initial={{ height:'100%'}} transition={{ transition }} className="loadingPage-full vertical-container">
            {logo}
          </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
      <AnimatePresence>
      {showLanding && ( 
        <> 
        <Navbar />
        <motion.div initial={initial} animate={{ y:0, width: "100%", transition: {delay:0.2, ...transition} }} key="landing" className="landingPage-full">
          <motion.img iinitial={initial} animate={{ y:0, width: "100%", transition: {delay:0.2, ...transition} }} id="hoverImage" key='logo' className="landingPage-image" src={logoBig} alt={logoBig.toString()} />
        </motion.div>
        <Projects />
          </>
        )}
        </AnimatePresence>
    </>
  );
}