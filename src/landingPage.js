import logoStart from './resource/logo-start-new.svg';
import logoMiddle from './resource/logo-middle-new.svg';
import logoEnd from './resource/logo-end-new.svg';
import logoBig from  './resource/logo.svg';
import './landingPage.css';
import './loadingPage.css';
import './navBar.css';
import './project.css';
import ImageAndProjects from "./project";
import Navbar from "./navBar";
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
 
export default function LandingPage() {
  const [size, initSize] = React.useState();
  const onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    initSize({
      width: width,
      height: height,
    });
  };
  React.useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  const logos = [logoBig,logoBig,logoBig];
  const logo = logos.map((logo,index) => (
    <LazyLoadImage key={index} className="landingPage-image" src={logo} alt={logo.toString()} />
  ));

  return(
    <>
      {/* <div className='landingPageTransition' style={{display: 'flex', flexDirection: 'column', height: '100vh', width: "100vw", backgroundColor: '#FFB8F2'}}> */}
      <div style={{display: 'flex', flexDirection: 'column', height: '100svh', width: "100vw", backgroundColor: 'rgb(255, 184, 242'}}> 
        <div className="navDisplay fixedTopPosition">
          <Navbar/>
        </div>
        <ImageAndProjects/>
      </div>
    </>
  );
}