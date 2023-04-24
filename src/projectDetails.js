import './landingPage.css';
import './loadingPage.css';
import './project.css';
import './projectDetails.css';
import Navbar from "./navBar";
import { useParams, useNavigate } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import HorizontalScroll from 'react-scroll-horizontal';
import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ViewContext } from './ViewContext';
import { useContext } from 'react';
import useCollapse from 'react-collapsed';
import arrow from './resource/arrow.svg';

const screenWidth = window.innerWidth;

const images = [
  { id: 1, file: 'Wangsa', name: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'] , format: 'png'},
  { id: 2, file: 'KLC', name: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'] , format: 'png'},
  { id: 3, file: 'Hejau', name: ['01', '02', '03', '04', '05', '06', '07'], format:'png' },
  { id: 4, file: 'Melody', name: ['01', '02', '03', '04', '05', '06', '07', '08'], format: 'png'},
  { id: 5, file: 'Poppy', name: ['01', '02', '04', '05', '06', '07', '08', '09', '10', '11'], format: 'jpg' },
];

const projectsDetails = [
  { id: 1, title: 'Wangsa9 Penthouse', location: 'Wangsa Maju', category: 'Residential', years: 'On-going', surface: '7,700 sqft', collab: '', desc1: 'The overall design direction is informed by the idea of injecting a sense of individuality and character to a contemporary holiday home. The vision was to create an experience that is inspired by interpretations of the landscape in the client’s home country.', desc2: 'Mountain striations, sensual desert curves and the rugged wadis are all strategically translated and expressed in architectural forms, materiality and color scheme as a celebration of the rich and diverse landscape Oman has to offer. The project is a commitment to craft a series of spaces that are personal, exciting and beautifully balanced.' },
  { id: 2, title: 'KLC Confinement Center', location: 'Dataran Prima', category: 'Commercial, Care Center', years: 'On-going', surface: '16,480 sqft', collab: '', desc1: 'The concept of lunar eclipse represents a balance, with the alignment of sun, moon and earth. A ray of light breaking from the shadow signifies the vibrancy of a new journey, similar to the vigour of a new birth.', desc2: 'The spatial concept is inspired by this natural sense of delicateness where the gesture of contact and peeling combine to mask the rigidity of the current office typology, all in the spirit of presenting a sensual, emotive and highly balanced environment for new mothers and their family.' },
  { id: 3, title: 'Hejau', location: 'Arcoris, Mont\'Kiara', category: 'Food & Beverage', years: '2021', surface: '220 sqft', collab: '', desc1: 'Hejau at Arcoris is infused with earthy tones, mineral surfaces and a sense of lightness. It is reflective of the spirit of reinterpreting the natural and organic. The interior appears as a singular carved volume. Visitors are greeted by flowing lines, earthy tones and textured surfaces - minerality, evocative of sunny Palm Springs and Arizona cliffs combined.', desc2: 'Pure material expressions are infused with Hejau’s interpretation to create a fun/engaging yet calming atmosphere.' },
  { id: 4, title: 'Melody Kindyland', location: 'SouthLink, Bangsar South', category: 'Commercial, Kindergarden', years: '2022', surface: '7,285 sqft', collab: 'Paper Plan Design Studio', desc1: 'The interior design concept is focused on promoting sustainability and versatility. It showcases various approaches to spatial planning, design elements, and creative solutions to create a space that is both functional and aesthetically pleasing.', desc2: 'The design is centered around children, aiming to create a sanctuary that provides a sense of security and warmth while also featuring unexpected design details to spark their curiosity.' },
  { id: 5, title: 'Poppykat', location: 'Cheras, Kuala Lumpur', category: 'Food & Beverage', years: 'On-going', surface: '480 sqft', collab: '', desc1: 'The design initiation began with an orange solid surface countertop. The orange hue recalls a certain aestaesthetic from Wes Anderson’s The Darjeeling Limited. A concept was crafted around this – an orange glaze complimented by a geometrical pattern. ', desc2: 'Here, associated zones unfold one after another, defined by architectural cues such as wall opening and wall treatment. The intent was to present a sense of fun and intrigue through a consistent aesthetic and spatial fluidity.' },
];

const projects = [
  { id: 1, year: '  2023', mobileYear: '  2023', name: 'Wangsa9 Penthouse', details: 'Emotional connection across 5,313km.', category: 'Residential', link: './Images/Wangsa/Hover.png' },
  { id: 2, year: '      ', mobileYear: '  2023',name: 'KLC', details: 'Lunar Eclipse.', category: 'Commercial', link: './Images/KLC/Hover.png' },
  { id: 3, year: '  2022', mobileYear: '  2022',name: 'Hejau', details: 'A foundation of environmental psychology.', category: 'Commercial', link: './Images/Hejau/Hover.png' },
  { id: 4, year: '      ', mobileYear: '  2023',name: 'Melody Kindyland', details: 'A place just like a home and a communal place for children.', category: 'Commercial', link: './Images/Melody/Hover.png' },
  { id: 5, year: '      ', mobileYear: '  2022',name: 'Poppykat', details: 'Recalled a certain aesthetic from Wes Anderson\'s Movie.', category: 'Commercial', link: './Images/Poppy/Hover.png' },
];

function ShowImage1(props) {
  const {mobileView, laptopView, navView} = useContext(ViewContext);
  const id = parseInt(props.value);
  const photos = images[id].name;
  const file = images[id].file;
  const format =images[id].format;
  console.log('show image here!');
  const showImage = photos.map((index) => {
    return (
      <LazyLoadImage id={`${file}-${index}`} style={{ padding: 0 }} key={`${file}-${index}`} className="project-image" src={require(`./resource/Images/${file}/${index}.${format}`)} alt={`${file}-${index}`} />
    );
  });
  const div = 'image';
  console.log(showImage);
  return (
    <>    
    <div className='projectDetailsImageDiv' style={{ borderBottom: '1.6px solid rgb(0, 0, 0)'}}>
      <div id='projectImageDiv' className="project-Image-Div" onMouseEnter={() => scrollable(div, true)} style={{ overflow: "scroll" , maxHeight: '51vh'}}>
        {/* <HorizontalScroll className='scroll' reverseScroll={true} style={{ overflow: 'auto' , position : 'inherit'}}> */}
        {showImage}
        {/* <LazyLoadImage src={arrow} /> */}
        {/* </HorizontalScroll> */}
      </div>
      </div>
    </>
  );
}


function ShowProject(props) {
  const {mobileView, laptopView, navView} = useContext(ViewContext);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const id = parseInt(props.value) - 1;
  const div = 'project';
  let navigate = useNavigate();
  const routeChange = (projectId) => {
    let path = `/project/${projectId}`;
    navigate(path);
  }

  const isMobileProjectList = projects.map((project) =>
  <>
  { project.id != id + 1  ? 
  <div id={`mobile-project-list-${project.id}`} className="projectListDisplay projectBackgroundColour" key={projects.id} style={{ 'paddingTop': '1%', 'paddingBottom': '1%', 'height': '4%', 'borderTop': project.id == 1 ? 'none': '1.6px solid #000000'}} onClick={()=> routeChange(project.id)}>
    <div id={`expand-${project.id}`} className="projectColumn" {...getToggleProps()} onClick={()=> isMobileExpandDetails(projects, true)}>
      <div className='mobileContentYear' style={{ width: '20%', textAlign: 'start'}}>
        {project.mobileYear}
      </div>
      <div className='mobileContentYear' style={{ alignItems: 'flex-start', textAlign: 'start'}}>
        {project.name}
      </div>
    </div>
  </div> 
  :
  <div className="projectBackgroundColour" key={projects.id} style={{ 'borderTop': project.id == 1 ? 'none' : '1.6px solid #000000', height: 'inherit'}}>
    {/* {showImageInList} */}
    <ShowImage1 key={id.toString()} value={id} />
    <div id={`projectDetailDisplay-${project.id}`} className="projectDetailDisplay" onMouseEnter={() => scrollable(div, true)} style={{overflow: 'scroll', paddingLeft: '1%', paddingRight:'1%'}}>
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
  </div> 
  }
  </>
  );

  const isMobileContent = (
    <>
    <div id={`projectDetailDisplay-${id}`} className="projectDetailDisplay" onMouseEnter={() => scrollable(div, true)} style={{overflow: 'scroll', paddingLeft: '1%', paddingRight:'1%'}}>
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
    {isMobileProjectList}
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
    return(isMobileProjectList);
  } else {
    return (isLaptopContent)
  }
}

function MobileDesc(object) {
    return (
      <>
        <div style={{ textAlign: 'left', paddingLeft:'3%', paddingRight: '3%', paddingBottom: '2%'}}>
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
          <table style={{ borderSpacing: '0' }}>
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
  const format =images[id].format;
  const showImage = photos.map((index) => {
    return (
      <LazyLoadImage style={{ height: '100%'}} key={`${file}-${index}`} className="project-image" src={require(`./resource/Images/${file}/${index}.${format}`)} alt={`${file}-${index}`} />
    );
  });
  const div = 'image';
  return (
    <>    
      {/* <HorizontalScroll>   */} 
      {/* <div style ={{display:'flex', height:'66.5%', flexDirection:'column', overflow:'hidden'}}> */}
    <div className='projectDetailsImageDiv'>
      <div id='projectImageDiv' className="project-Image-Div" onMouseEnter={() => scrollable(div, true)} style={{ overflow: "scroll" }}>
        <HorizontalScroll className='scroll' reverseScroll={true} style={{ overflow: 'auto'}}>
         {showImage}
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
      <div style={{ flexDirection: 'column', height: mobileView? 'auto': '95%'}}>
        {mobileView ? <></> : <ShowImage key={id.toString()} value={id} /> }
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

function isMobileExpandDetails (projects, expand) {
  console.log('isMobileExpandDetails');
  console.log(projects);
  const projectCount = 5;
  const number = projects.id -1;
  console.log(number);
  // for(let i = 0; i < projectCount; i++){
  //   if(number == i && expand) {
  //     document.getElementById('changeImage').src = projects.link;
  //     document.getElementsByClassName('mobileExpandContent')[number].style.display = 'contents';
  //     document.getElementsByClassName('projectBackgroundColour')[number].style.backgroundColor = 'rgb(255,192,103)';
  //     document.getElementsByClassName('mobileExpandContent')[number].style.width = '100%';
  //   } else {
  //     document.getElementsByClassName('mobileExpandContent')[i].style.display = 'none';
  //     document.getElementsByClassName('projectBackgroundColour')[i].style.backgroundColor = '#FFFFFF';
  //   }
  // }
}