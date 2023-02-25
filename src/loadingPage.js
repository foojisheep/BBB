import './loadingPage.css';
import logoBig from './resource/logo.svg';
import React, { useState, useEffect } from "react";
import Navbar from "./navBar";
import './project.css';
import { useNavigate } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import useCollapse from 'react-collapsed';

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
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const screenWidth = window.innerWidth;
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

  const isMobileContent = projects.map((projects) =>
  <>
    <div className="projectListDisplay" key={projects.id}>
      <div id={`expand-${projects.id}`} className="projectColumn" {...getToggleProps()} onClick={()=> isMobileExpandDetails(projects, true)}>
        <div className='mobileContentYear' style={{ width: '20%', textAlign: 'start'}}>
          {projects.mobileYear}
        </div>
        <div className='mobileContentYear' style={{ alignItems: 'flex-start'}}>
          {projects.name}
        </div>
        <div className='mobileContentYear' style={{ textAlign: 'end'}}>
          {projects.category}
        </div>
      </div>
      <div id={`expanded-${projects.id}`} className='mobileExpandContent'  key={`expand-${projects.id}`} {...getCollapseProps()}>
        <div className="projectColumn" style={{marginTop: 0, marginBottom: 0}}>
          <p style={{ float: 'left', width: '20%'}}></p>
          <img className='mobileExpandContentDescription' style={{ height: '20vh' }} src={projects.link} />
        </div>
        <div className="projectColumn" style={{marginTop: 0, marginBottom: 0}}>
          <p style={{ float: 'left', width: '20%'}}></p>
          <p className='mobileExpandContentDescription' style={{ textAlign: 'start', paddingTop: '2%'}}>{projects.details}</p>
        </div>
        <div className="projectColumn" style={{marginTop: 0, marginBottom: 0, justifyContent: 'end'}}>
          <p className='mobileExpandContentDescription' style={{ textAlign: 'end'}} onClick={() => routeChange(projects.id)}>Read more</p>
        </div>
      </div>
    </div>
  </>
  );

  return (
    <>
    {screenWidth <500 ||  isMobile ? 
      <div className='slideUp' style={{backgroundColor: '#FFFFFF', overflow: 'scroll'}}>
        <div className="projectDisplay1" style={{ overflow: 'scroll'}}>
          <table id="customers">
            {isMobileContent}
          </table>
        </div>
      </div>
      :
      <div className='slideUp' style={{backgroundColor: '#FFFFFF', height:'26%'}}>
        <div className="projectDisplay1" style={{ height: '100%'}}>
          <table id="customers">
            {content}
          </table>
        </div>
      </div>
    }
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
          <Projects />
        </div>
      )}
    </>
  );
}

const projects = [
  { id: 1, year: '  2023', mobileYear: '  2023', name: 'Wangsa9 Penthouse', details: 'Emotional connection across 5,313km.', category: 'Residential', link: './Images/Wangsa/Hover.png' },
  { id: 2, year: '      ', mobileYear: '  2023',name: 'KLC', details: 'Lunar Eclipse.', category: 'Commercial', link: './Images/KLC/Hover.png' },
  { id: 3, year: '  2022', mobileYear: '  2022',name: 'Hejau', details: 'A foundation of environmental psychology.', category: 'Commercial', link: './Images/Hejau/Hover.png' },
  { id: 4, year: '      ', mobileYear: '  2023',name: 'Melody Kindyland', details: 'A place just like a home and a communal place for children.', category: 'Commercial', link: './Images/Melody/Hover.png' },
  { id: 5, year: '      ', mobileYear: '  2022',name: 'Poppykat', details: 'Recalled a certain aesthetic from Wes Anderson\'s Movie.', category: 'Commercial', link: './Images/Poppy/Hover.png' },
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

function isMobileExpandDetails (projects, expand) {
  console.log('isMobileExpandDetails');
  console.log(projects);
  if(expand) {
    const number = projects.id -1;
    document.getElementsByClassName('mobileExpandContent')[number].style.display = 'inline-table';
  }
}