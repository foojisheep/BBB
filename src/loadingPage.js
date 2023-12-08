import './loadingPage.css';
import logoBig from './resource/logo.svg';
import React, { useState, useEffect } from "react";
import Navbar from "./navBar";
import './project.css';
import { useNavigate } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import useCollapse from 'react-collapsed';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContext } from 'react';
import { ViewContext } from './ViewContext';
import AnimationPlayer from './video'
import glassBBB from  './resource/bbb_loading2.mp4';
import glassBBBMobile from  './resource/bbb_loading_mobile.mp4';
import chucksHover from  './resource/Images/Chucks/Hover.jpg';
import penthouseHover from  './resource/Images/Wangsa/Hover.png';
import KLCHover from  './resource/Images/KLC/Hover.png';
import hejauHover from  './resource/Images/Hejau/Hover.png';
import melodyHover from  './resource/Images/Melody/Hover.png';
import poppyHover from  './resource/Images/Poppy/Hover.png';
import kiaraHover from './resource/Images/Kiara9/Hover.png';
import wangsa9 from './resource/Images/Wangsa9/Hover.png';

const screenWidth = window.innerWidth;

function Projects() {
  const {mobileView, laptopView, navView} = useContext(ViewContext);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  let navigate = useNavigate();
  const routeChange = (projectId) => {
    let path = `/project/${projectId}`;
    navigate(path);
  }

  const content = projects.map((projects) =>
    <tr key={projects.id} onMouseEnter={() => changeURL(projects, true)} onClick={() => routeChange(projects.id)}>
      <td>  </td>
      <td>{projects.mobileYear}</td>
      <td>{projects.name}</td>
      { navView ? null :
        <td>
          {projects.details}
          { projects.tag != null ?
          <>
          {/* <div style={{ paddingLeft: '1%' }}> */}
          <button type="button" class="btn btn-primary">{projects.tag}</button>
          {/* </div> */}
          </>
          : <> </>
          }
        </td> 
      }
      <td style={{ textAlign: 'right' }}>{projects.category}</td>
    </tr>
  );

  const isMobileContent = projects.map((projects) =>
  <>
  { projects.id == 1 ? 
        <div className="projectListDisplay projectBackgroundColour" key={projects.id} style={{ backgroundColor: '#FFFFFF'}}>
          <div id={`expand-${projects.id}`} className="projectColumn" {...getToggleProps()} onClick={()=> isMobileExpandDetails(projects, true)}>
            <div className='mobileContentYear' style={{ width: '20%', textAlign: 'start'}}>
              {projects.mobileYear}
            </div>
            <div className='mobileContentYear' style={{ alignItems: 'flex-start', textAlign: 'start'}}>
              <span>
                {projects.name + ' '}
                {projects.tag != null ?
              <>
              <span>
                <button
                  class="btn btn-success" 
                  style={{
                    borderRadius: '15px',
                    backgroundColor: '#DEDEDE',
                    innerWidth:'12px',
                    height: '32px',
                    borderStyle: 'none',
                    fontSize: '18px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    fontFamily: 'FoundersGroteskText',
                    color: '#000000'
                    }}
                  >
                  {projects.tag}
                </button>
              </span>
              </>
              : <> </>
              }
              </span>
            </div>
          </div>
          <div id={`expanded-${projects.id}`} className="mobileExpandContent" key={`expand-${projects.id}`} {...getCollapseProps()} onClick={()=> routeChange(projects.id)}>
            <div className='projectColumn' style={{ width: '20%', textAlign: 'start'}}>
            </div>
            <div className='projectColumn paddingLeft projectListHeight' style={{ alignItems:'center', textAlign: 'start'}}>
              <p className='mobileExpandContentDescription' style={{ textAlign: 'start', paddingTop: '2%', paddingBottom: '2%' , width: '100%'}}>{projects.details}</p>
              <div className='projectColumn' style={{ textAlign: 'end', display: 'block'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
          </div>
            </div>
          </div>
        </div>
      :
        <div className="projectListDisplay projectBackgroundColour" key={projects.id}>
          <div id={`expand-${projects.id}`} className="projectColumn" {...getToggleProps()} onClick={()=> isMobileExpandDetails(projects, true)}>
            <div className='mobileContentYear' style={{ width: '20%', textAlign: 'start'}}>
              {projects.mobileYear}
            </div>
            <div className='mobileContentYear' style={{ alignItems: 'flex-start', textAlign: 'start'}}>
              <span>
                {projects.name + ' '}
                {projects.tag != null ?
              <>
              <span>
                <button
                  class="btn btn-success" 
                  style={{
                    borderRadius: '15px',
                    backgroundColor: '#DEDEDE',
                    innerWidth:'12px',
                    height: '32px',
                    borderStyle: 'none',
                    fontSize: '18px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    fontFamily: 'FoundersGroteskText',
                    color: '#000000'
                    }}
                  >
                  {projects.tag}
                </button>
              </span>
              </>
              : <> </>
              }
              </span>
            </div>
          </div>
          <div id={`expanded-${projects.id}`} className="mobileExpandContent" key={`expand-${projects.id}`} {...getCollapseProps()} onClick={()=> routeChange(projects.id)}>
            <div className='projectColumn' style={{ width: '20%', textAlign: 'start'}}>
            </div>
            <div className='projectColumn paddingLeft projectListHeight' style={{ alignItems:'center', textAlign: 'start'}}>
              <p className='mobileExpandContentDescription' style={{ textAlign: 'start', paddingTop: '2%', paddingBottom: '2%' , width: '100%'}}>{projects.details}</p>
              <div className='projectColumn' style={{ textAlign: 'end', display: 'block'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
          </div>
            </div>
          </div>
        </div>
      }
    </>
  );

  const content1 = projects.map((project) =>
    <tr key={project.id} onMouseEnter={() => changeURL(project, true)} onClick={() => routeChange(project.id)}>
       <td>  </td>
       <td>{project.mobileYear}</td>
       { navView 
        ? <td>
            {project.name + ' '}
            {project.tag != null ?
              <>
              <span>
                <button
                  class="btn btn-success" 
                  style={{
                    borderRadius: '15px',
                    backgroundColor: '#DEDEDE',
                    innerWidth:'12px',
                    height: '32px',
                    borderStyle: 'none',
                    fontSize: '20px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    fontFamily: 'FoundersGroteskText',
                    color: '#000000'
                    }}
                  >
                  {project.tag}
                </button>
              </span>
              </>
              : <> </>
            }
        </td> 
        :<td>{project.name}</td> 
      }
       { navView ? null :
         <td>
           {project.details + '  '}
           { project.tag != null ?
              <>
              <span>
                <button
                  class="btn btn-success" 
                  style={{
                    borderRadius: '15px',
                    backgroundColor: '#DEDEDE',
                    innerWidth:'12px',
                    height: '32px',
                    borderStyle: 'none',
                    fontSize: '20px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    fontFamily: 'FoundersGroteskText',
                    color: '#000000'
                    }}
                  >
                  {project.tag}
                </button>
              </span>
              </>
              : <> </>
            }
         </td> 
       }
       <td style={{ textAlign: 'right' }}>{project.category}</td>
    </tr>
  );

  return (
    <>
    {mobileView ? 
      // <div className='slideUp' style={{backgroundColor: '#FFFFFF', overflow: 'hidden', height: '35%'}}>
      <div className='slideUp' style={{backgroundColor: '#FFFFFF', width: '100%', overflowY: 'scroll'}}>
        <div className="projectDisplay1" >
          <table id="customers">
            {isMobileContent}
          </table>
        </div>
      </div>
      :
      // <div className='slideUp' style={{backgroundColor: '#FFFFFF', height:'26%'}}></div>
      <div className='slideUp hideScrollBar' style={{backgroundColor: '#FFFFFF', height:'26%', overflowY:'scroll'}}>
        {/* <div className="projectDisplay1" style={{ height: '100%'}}>
          
            {content1} */}
          {/* </div> */}
           <table id="customers">
            {content1}
          </table> 
        {/* </div> */}
      </div>
    }
    </>
  );
}

export default function LoadingPage() {
  const {mobileView, laptopView} = useContext(ViewContext);
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
  // const [showLoading, setShowLoading] = useState(false);
  // const [showLanding, setShowLanding] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // setShowLoading(!showLoading);
  //     // setShowLanding(!showLanding);
  //   }, 3000)
  // }, []);

  const logos = [logoBig];
  const logo = logos.map((logo, index) => (
    <LazyLoadImage key={index} className='loadingImage' src={logo} alt={logo.toString()} />
  ));

  return (
    <>
        <div className='landingPage-transition' style={{ display: 'flex', flexDirection: 'column', height: "100svh", width: "100vw" , backgroundColor: '#FFB8F2'}}>
            <div className="navDisplay slideDown fixedTopPosition" style={{ height: '4%'}}>
              <Navbar style={{ display: 'flex'}}/>
            </div>
           {mobileView ?
          //  <div className='mobileLogoSlide landingPage-full0' style={{ minHeight: '63.5%'}}>
          <div className='landingPage-full0'>
            <a id='changeLink'>
            <div key="landing" className="landingPage-full1">
              {/* THIS PART DISPLAY IMAGE WHEN USER SELECT STORE FROM THE LIST */}
              <LazyLoadImage id="changeImage1" key='logo' className="landingPage-image1" src={logoBig} onMouseEnter={() => changeURL(logoBig, false)} />
            </div>
            </a>
           </div>
           :
           <div className='landingPage-full0' style={{ height: '70.5%'}}>
             <div key="landing" className="landingPage-full1">
              {/* THIS  PART HOVER IMAGE WHEN USER SELECT STORE FROM THE LIST */}
               <LazyLoadImage id="hoverImage" key='logo' className="landingPage-image1" src={logoBig} onMouseEnter={() => changeURL(logoBig, false)} />
             </div>
           </div>
           }
          <Projects />
        </div>
    </>
  );
}

const projects = [
  { id: 1, year: '  2023', mobileYear: '  2023', name: 'Penthouse', details: 'Monochrome penthouse apartment.', category: 'Residential', link: kiaraHover , tag: 'on-going'},
  { id: 2, year: '      ', mobileYear: '  2023', name: 'Penthouse', details: 'Serene Modern Sanctuary.', category: 'Residential', link: wangsa9 , tag: 'on-going'},
  { id: 3, year: '      ', mobileYear: '  2023', name: 'Chucks', details: 'Unexpected, fun, curious.', category: 'Commercial', link: chucksHover , tag: null},
  { id: 4, year: '      ', mobileYear: '  2023', name: 'Penthouse', details: 'Ode to home.', category: 'Residential', link: penthouseHover , tag: null},
  { id: 5, year: '      ', mobileYear: '  2023', name: 'KLC', details: 'Lunar Eclipse.', category: 'Commercial', link: KLCHover , tag: null},
  { id: 6, year: '  2022', mobileYear: '  2022', name: 'Hejau', details: 'A foundation of environmental psychology.', category: 'Commercial', link: hejauHover , tag: null},
  { id: 7, year: '      ', mobileYear: '  2022', name: 'Melody Kindyland', details: 'A place just like a home and a communal place for children.', category: 'Commercial', link: melodyHover , tag: null },
  { id: 8, year: '      ', mobileYear: '  2022', name: 'Poppykat', details: 'Recalled a certain aesthetic from Wes Anderson\'s Movie.', category: 'Commercial', link: poppyHover , tag: null},
];

function changeURL(projects, hover) {
  if (!hover) {
    console.log('hover out');
    document.getElementById('hoverImage').src = logoBig;
    // document.getElementById('videoBBB').style.display = 'flex';
    // document.getElementById('hoverImage').style.display = 'none';
  }

  if (hover && projects.link.length !== 0) {
    // document.getElementById('videoBBB').style.display = 'none';
    console.log(projects.link);
    document.getElementById('hoverImage').style.display = 'flex';
    document.getElementById('hoverImage').src = projects.link;
  }
}

function isMobileExpandDetails (projects, expand) {
  console.log('isMobileExpandDetails');
  console.log(projects);
  const projectCount = 5;
  const number = projects.id -1;
  console.log(number);
  for(let i = 0; i < projectCount; i++){
    if(number == i && expand) {
      document.getElementById('changeImage1').src = projects.link;
      // document.getElementById('video').style.display = 'none';
      document.getElementsByClassName('mobileExpandContent')[number].style.display = 'inline-table';
      document.getElementsByClassName('projectBackgroundColour')[number].style.backgroundColor = '#FFFFFF';
      document.getElementsByClassName('mobileExpandContent')[number].style.width = '96%';
      document.getElementById('changeLink').href = `/project/${projects.id}`;
      console.log('isMobileExpandDetails');
    } else {
      console.log('expand');
      // document.getElementById('mobileVideoBBB').style.display = 'none';
      document.getElementById('changeImage1').style.display = 'flex';
      document.getElementsByClassName('mobileExpandContent')[i].style.display = 'none';
      document.getElementsByClassName('projectBackgroundColour')[i].style.backgroundColor = '#FFFFFF';
    }
  }
}