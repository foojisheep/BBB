import './loadingPage.css';
import logoBig from './resource/logo.svg';
import React, { useState, useEffect } from "react";
import Navbar from "./navBar";
import { useNavigate } from 'react-router-dom';

// let transition = { duration: 3, ease: [0.6, 0.01, -0.05, 0.9], scale: 1.1 };
// let initial = { y: "20%", width: "100%" };
// if (window.innerWidth < 992) {  //tablet
//   initial = { y: "140%", width: "100%" };
//   transition = { duration: 3, ease: [0.1, 0.01, -0.05, 0.9] };
// } else if (window.innerWidth < 992 && window.innerWidth > 768) {
//   initial = { y: "140%", width: "100%" }; // small device
//   transition = { duration: 3, ease: [-0.8, 0.01, -0.05, 0.9] };
// }
// else {
//   initial = { y: "20%", width: "100%" }; // large device
//   transition = { duration: 3, ease: [0.6, 0.01, -0.05, 0.9] };
// }


function Projects() {
  let navigate = useNavigate();
  const routeChange = (projectId) => {
    let path = `/project/${projectId}`;
    navigate(path);
  }
  console.log(projects[1].category);
  const content = projects.map((projects) =>
    <tr key={projects.id} onMouseEnter={() => changeURL(projects, true)} onClick={() => routeChange(projects.id)}>
      <td>  </td>
      <td>{projects.year}</td>
      <td>{projects.name}</td>
      <td>{projects.details}</td>
      <td style={{ textAlign: 'right' }}>{projects.category}</td>
    </tr>
  );
  return (
    <>
      <div className="projectDisplay1" style={{ height: '100%'}}>
        <table id="customers">
          {content}
        </table>
      </div>
    </>
  );
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
    <img key={index} className='loadingImage' src={logo} alt={logo.toString()} />
  ));

  return (
    <>
      {showLoading && (
        <div className='defaultLandingPage-full'>
          <div className='navDisplay' style={{ backgroundColor: '#FFB8F2'}}/>
          <div className="loadingPage-full">
            <div className='loadingPage-image'>
              {logo}
              {logo}
            </div>
          </div>
          <div className='projectDisplay1' />
        </div>
      )}
      {showLanding && (
        <div className='landingPage-transition' style={{ display: 'flex', flexDirection: 'column', height: "100vh", width: "100vw" }}>
          <div className="navDisplay slideDown">
            <Navbar style={{ display: 'flex', height: '5%'}}/>
           </div>
          <div className='landingPage-full0'>
            <div key="landing" className="landingPage-full1">
              <img id="hoverImage" key='logo' className="landingPage-image1" src={logoBig} alt={logoBig.toString()} onMouseEnter={() => changeURL(logoBig, false)} />
            </div>
          </div>
          <div className='slideUp' style={{backgroundColor: '#FFFFFF', height:'26%'}}>
            <Projects />
          </div>
        </div>
      )}
    </>
  );
}

const projects = [
  { id: 1, year: '  2023', name: 'Wangsa9 Penthouse', details: 'Emotional connection across 5,313km.', category: 'Residential', link: './Images/Wangsa/Hover.png' },
  { id: 2, year: '      ', name: 'KLC', details: 'Lunar Eclipse.', category: 'Commercial', link: './Images/KLC/Hover.png' },
  { id: 3, year: '  2022', name: 'Hejau', details: 'A foundation of environmental psychology.', category: 'Commercial', link: './Images/Hejau/Hover.png' },
  { id: 4, year: '      ', name: 'Melody Kindyland', details: 'A place just like a home and a communal place for children.', category: 'Commercial', link: './Images/Melody/Hover.png' },
  { id: 5, year: '      ', name: 'Poppykat', details: 'Recalled a certain aesthetic from Wes Anderson\'s Movie.', category: 'Commercial', link: './Images/Poppy/Hover.png' },
];

function changeURL(projects, hover) {
  if (!hover) {
    console.log('hover out');
    document.getElementById('hoverImage').src = logoBig;
  }

  if (hover && projects.link.length !== 0) {
    console.log(projects.link);
    document.getElementById('hoverImage').src = projects.link;
  }
}