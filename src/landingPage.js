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
 
export default function LandingPage() {
  const logos = [logoBig,logoBig,logoBig];
  const logo = logos.map((logo,index) => (
    <img key={index} className="landingPage-image" src={logo} alt={logo.toString()} />
  ));
  return(
    <>
      <div style={{display: 'flex', flexDirection: 'column', height: '100vh', width: "100vw"}}> 
        <Navbar/>
        <div style={{ display: 'flex', width:'100%', backgroundColor:'#FFB8F2', height:'80%', alignSelf:'stretch'}}>
        <div key="landing" className="landingPage-full1">
          <img id="hoverImage" key='logo' className="landingPage-image1" src={logoBig} alt={logoBig.toString()} />
        </div>
        </div>
        <Projects />
      </div>
    </>
  );
}