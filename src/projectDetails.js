import './landingPage.css';
import './loadingPage.css';
import './project.css';
import './projectDetails.css';
import Navbar from "./navBar";
import { useParams } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import HorizontalScroll from 'react-scroll-horizontal';
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ViewContext } from './ViewContext';
import { useContext } from 'react';

const screenWidth = window.innerWidth;

const images = [
  { id: 1, file: 'Wangsa', name: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'] },
  { id: 2, file: 'KLC', name: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'] },
  { id: 3, file: 'Hejau', name: ['01', '02', '03', '04', '05', '06', '07'] },
  { id: 4, file: 'Melody', name: ['01', '02', '03', '04', '05', '06', '07', '08'] },
  { id: 5, file: 'Poppy', name: ['01', '02', '03', '04', '05', '06', '07'] },
];

const projectsDetails = [
  { id: 1, title: 'Wangsa9 Penthouse', location: 'Wangsa Maju', category: 'Residential', years: 'On-going', surface: '7,700sqft', collab: '', desc1: 'The overall design direction is informed by the idea of injecting a sense of individuality and character to a contemporary holiday home. The vision was to create an experience that is inspired by interpretations of the landscape in the client’s home country.', desc2: 'Mountain striations, sensual desert curves and the rugged wadis are all strategically translated and expressed in architectural forms, materiality and color scheme as a celebration of the rich and diverse landscape Oman has to offer. The project is a commitment to craft a series of spaces that are personal, exciting and beautifully balanced.' },
  { id: 2, title: 'KLC Confinement Center', location: 'Dataran Prima', category: 'Commercial, Care Center', years: 'On-going', surface: '16,480 sqft', collab: '', desc1: 'The concept of lunar eclipse represents a balance, with the alignment of sun, moon and earth. A ray of light breaking from the shadow signifies the vibrancy of a new journey, similar to the vigour of a new birth.', desc2: 'The spatial concept is inspired by this natural sense of delicateness where the gesture of contact and peeling combine to mask the rigidity of the current office typology, all in the spirit of presenting a sensual, emotive and highly balanced environment for new mothers and their family' },
  { id: 3, title: 'Hejau', location: 'Arcoris, Mont\'Kiara', category: 'Food & Beverage', years: '2021', surface: '220sqft', collab: '', desc1: 'Hejau at Arcoris is infused with earthy tones, mineral surfaces and a sense of lightness. It is reflective of the spirit of reinterpreting the natural and organic. The interior appears as a singular carved volume. Visitors are greeted by flowing lines, earthy tones and textured surfaces - minerality, evocative of sunny Palm Springs and Arizona cliffs combined.', desc2: 'Pure material expressions are infused with Hejau’s interpretation to create a fun/engaging yet calming atmosphere' },
  { id: 4, title: 'Melody Kindyland', location: 'SouthLink, Bangsar South', category: 'Commercial, Kindergarden', years: '2022', surface: '7,285sqft', collab: 'Paper Plan Design Studio', desc1: 'The space promotes sustainability and versatility by showcasing different approaches on spatial planning, design elements and creative solutions.', desc2: 'It is a sanctuary for the children that embraces a sense of secure, homely warm feeling, yet with unexpected surprises to be found in the design details to provoke the curiosity of the children.' },
  { id: 5, title: 'Poppykat', location: 'Cheras, Kuala Lumpur', category: 'Food & Beverage', years: 'On-going', surface: '480sqft', collab: '', desc1: 'The design initiation began with an orange solid surface countertop. The orange hue recalls a certain aestaesthetic from Wes Anderson’s The Darjeeling Limited. A concept was crafted around this – an orange glaze complimented by a geometrical pattern. ', desc2: 'Here, associated zones unfold one after another, defined by architectural cues such as wall opening and wall treatment. The intent was to present a sense of fun and intrigue through a consistent aesthetic and spatial fluidity.' },
];

function ShowProject(props) {
  const {mobileView, laptopView} = useContext(ViewContext);
  const id = parseInt(props.value) - 1;
  const div = 'project';

  const isMobileContent = (
    <>
    <div id='projectDetailDisplay' className="projectDetailDisplay" onMouseEnter={() => scrollable(div, true)} style={{overflow: 'scroll', paddingLeft: '1%', paddingRight:'1%'}}>
      <table id="projectDetails">
        <tr>
          <th className='projectDetailsTableTitle'>{projectsDetails[id].title}</th>
          { mobileView ? <></> : <th></th>}
        </tr>
        <tr>
          <td style={{ width: '18%', verticalAlign: 'top' }}>
            <table style={{ display: 'table-row-group'}}>
              <tr>
                <td style={{ verticalAlign:'top'}}>Location</td>
                <td style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].location}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign:'top'}}>Category</td>
                <td style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].category}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign:'top'}}>Years</td>
                <td style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].years}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign:'top'}}>Surface</td>
                <td style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].surface}</td>
              </tr>
              {projectsDetails[id].collab != '' &&
                <tr>
                  <td style={{ verticalAlign:'top'}}>Collab</td>
                  <td style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].collab}</td>
                </tr>
              }
            </table>
          </td>
        </tr>
      </table>
      <MobileDesc value={projectsDetails[id]} />
    </div>
    </>
  );
  
  const isLaptopContent = (
    <>
    <div id='projectDetailDisplay' className="projectDetailDisplay" onMouseEnter={() => scrollable(div, true)}>
      <table id="projectDetails">
        <tr>
          <th className='projectDetailsTableTitle'>{projectsDetails[id].title}</th>
          <th></th>
        </tr>
        <tr>
          <td style={{ width: '20%', verticalAlign: 'top' }}>
            <table style={{ display: 'table-row-group'}}>
              <tr>
                <td style={{ verticalAlign:'top'}}>Location</td>
                <td style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].location}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign:'top'}}>Category</td>
                <td style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].category}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign:'top'}}>Years</td>
                <td style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].years}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign:'top'}}>Surface</td>
                <td style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].surface}</td>
              </tr>
              {projectsDetails[id].collab != '' &&
                <tr>
                  <td style={{ verticalAlign:'top'}}>Collab</td>
                  <td style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].collab}</td>
                </tr>
              }
            </table>
          </td>
          <Desc value={projectsDetails[id]} />
        </tr>
      </table>
    </div>
    </>
  );

  if(mobileView ){
    return(isMobileContent);
  } else {
    return (isLaptopContent)
  }
}

function MobileDesc(object) {
    return (
      <>
        <div style={{ textAlign: 'left', paddingLeft:'3%', paddingRight: '3%', paddingBottom: '18%'}}>
          <p className='mobileProjectDescription' style={{ textAlign: 'left'}}>{object.value.desc1}</p>
          <p className='mobileProjectDescription' style={{ textAlign: 'left', paddingTop: '1%' }}>&emsp;{object.value.desc2}</p>
        </div>
      </>
    );
}

function Desc(object) {
  if (object.value.id == 1 || object.value.id == 5) {
    return (
      <>
        <td>
          <table>
            {/* <tr>
          <th style={{ textAlign: 'left' ,paddingBottom: '5%', paddingTop: '5%'}}>{}</th>
          <th></th>
          </tr> */}
            <tr>
              <th className='projectDescription' style={{ textAlign: 'left', display: 'table-cell', paddingLeft: '1%', verticalAlign: 'top', width: '50%', display:'table-row-group'}}>{object.value.desc1}</th>
              <th className='projectDescription' style={{ textAlign: 'left', display: 'table-cell', paddingLeft: '1%', verticalAlign: 'top', width: '50%', display:'table-row-group'}}>{object.value.desc2}</th>
            </tr>
          </table>
        </td>
      </>
    );
  } else if (object.value.id == 2 || object.value.id == 4) {
    return (
      <>
        <td className='projectDescription' style={{ textAlign: 'left', paddingLeft:'5%' }}>{object.value.desc1}</td>
        <td className='projectDescription' style={{ textAlign: 'left', paddingLeft:'5%', paddingTop: '1%' }}>&emsp;{object.value.desc2}</td>
      </>
    );
  } else {
    return (
      <>
        <td className='projectDescription' style={{ textAlign: 'left', paddingLeft:'5%'}}>{object.value.desc1}</td>
        <td className='projectDescription' style={{ textAlign: 'left', paddingLeft:'5%', paddingTop: '1%' }}>{object.value.desc2}</td>
      </>
    );
  }
}

function ShowImage(props) {
  const id = parseInt(props.value) - 1;
  const photos = images[id].name;
  const file = images[id].file;
  const showImage = photos.map((index) => {
    //   const img = require(`./resource/Images/${file}/${photo}.png`);
    //   console.log(`./Images/${file}/${photo}.png`);
    return (
      // <div className='list-group-item' style={{}}>
      <LazyLoadImage style={{ height: '100%'}} key={`${file}-${index}`} className="project-image" src={require(`./resource/Images/${file}/${index}.png`)} alt={`${file}-${index}`} />
      // </div>
      // <img key={`${file}-${index}`} className="project-image" src={require(`./resource/Images/${file}/Hover.png`)} alt={`${file}-${index}`}/>
    );
  });
  const div = 'image';
  return (
    <>    
      {/* <HorizontalScroll>   */} 
      {/* <div style ={{display:'flex', height:'66.5%', flexDirection:'column', overflow:'hidden'}}> */}
    <div className='projectDetailsImageDiv'>
      <div id='projectImageDiv' className="project-Image-Div" onMouseEnter={() => scrollable(div, true)} style={{ overflow: "scroll" }}>
        <HorizontalScroll className='scroll' reverseScroll={true} style={{ overflow: 'auto' }}>
          {/* <div style={{width: '110vw'}}> */}
        {/* <div className='list-group list-group-horizontal' style={{ display: 'flex', overflow: 'hidden', height: '80%' }}> */}
        {showImage}
        {/* </div> */}
        </HorizontalScroll>
      </div>
      </div>
      {/* </HorizontalScroll> */}
    </>
  );
}

export default function ProjectDetailPage(object) {
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
  const { id } = useParams();
  return (
    <div style={{ flexDirection: 'column', height: '100vh', width:"100vw" }}>        
      <div className="navDisplay">
        <Navbar />
      </div>
      {/* <div className='projectDetailsTransition' style={{ flexDirection: 'column', height: '95%'}}> */}
      <div style={{ flexDirection: 'column', height: '95%'}}>
        <ShowImage key={id.toString()} value={id} />
        <ShowProject key={id.toString()} value={id} />
      </div>
    </div>
  );
}

function scrollable(div, scroll) {
  if(screenWidth < 1024 ||  isMobile){
    if (scroll) {
      if(div == 'image') {
        document.getElementsByClassName('projectDetailDisplay')[0].style.overflow = 'hidden';
        document.getElementsByClassName('project-Image-Div')[0].style.overflow = 'scroll';
      } else{
        document.getElementsByClassName('projectDetailDisplay')[0].style.overflow = 'scroll';
        document.getElementsByClassName('project-Image-Div')[0].style.overflow = 'hidden';
      }
    }
  } else {
    document.getElementsByClassName('projectDetailDisplay')[0].style.overflow = 'scroll';
    document.getElementsByClassName('project-Image-Div')[0].style.overflow = 'scroll';
  }
}