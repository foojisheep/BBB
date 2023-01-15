import logoStart from './resource/logo-start-new.svg';
import logoMiddle from './resource/logo-middle-new.svg';
import logoEnd from './resource/logo-end-new.svg';
import logoBig from  './resource/logo.svg';
import './landingPage.css';
import './loadingPage.css';
import './project.css';
import Projects from "./project";
import Navbar from "./navBar";
import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import LoadingPage from './loadingPage';

// let transition = { duration:1.4, ease: [0.6, 0.01, -0.05, 0.9] };
// let initial = { y: "20%", width: "100%"};
// if(window.innerWidth < 992){  //tablet
//     initial = { y: "140%", width: "100%"};
//     transition = { duration:1.4, ease: [0.1, 0.01, -0.05, 0.9] };
//   } else if(window.innerWidth < 992 && window.innerWidth > 768){
//     initial = { y: "140%", width: "100%"}; // small device
//     transition = { duration:1.4, ease: [-0.8, 0.01, -0.05, 0.9] };
//   }
//   else {
//     initial = { y: "20%", width: "100%"}; // large device
//     transition = { duration:1.4, ease: [0.6, 0.01, -0.05, 0.9]};
//  }
 
export default function LandingPage() {
  // const [showLoading, setShowLoading] = useState(true);
  // const [showLanding, setShowLanding] = useState(false);
  // // const [firstVisit, setFirstVisit] = useState(true);
  // let firstVisit = true;
  // // let showLoading = true;
  // // let showLanding = false;
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLoading(!showLoading);
  //     setShowLanding(!showLanding);
  //     firstVisit = false;
  //   }, 1400)  }, []);

  // const logos = [logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart];
  const logos = [logoBig,logoBig,logoBig];
    const logo = logos.map((logo,index) => (
      <img key={index} className="landingPage-image" src={logo} alt={logo.toString()} />
    ));
    return(
      <>
      {/* <AnimatePresence>
        { !firstVisit && showLoading && (
          <motion.div transition={{ opacity: 0}} exit={{ opacity: 0 }}>
            <div className='defaultLandingPage-full'>
              <motion.div initial={{ opacity: 1, height:'100%'}} transition={{ transition }} exit={{ opacity: 0}} className="loadingPage-full vertical-container">
              {logo}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
       {/* <AnimatePresence initial={true}>
        {showLanding && ( 
          <> 
          <Navbar />
          <motion.div initial={initial} animate={{ y:0, width: "100%", transition: {delay:0.2, ...transition} }} key="landing" className="landingPage-full">
            <motion.img iinitial={initial} animate={{ y:0, width: "100%", transition: {delay:0.2, ...transition} }} id="hoverImage" key='logo' className="landingPage-image" src={logoBig} alt={logoBig.toString()} />
          </motion.div>
          <Projects />
           </>
          )}
         </AnimatePresence> */}
         {/* {!firstVisit && showLanding && ( 
          <> */}
          <Navbar />
          <div key="landing" className="landingPage-full">
            <img id="hoverImage" key='logo' className="landingPage-image" src={logoBig} alt={logoBig.toString()} />
          </div>
          <Projects />
         {/*  </>
          )} */}
      </>
      );
}