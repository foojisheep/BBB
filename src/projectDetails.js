import './landingPage.css';
import './loadingPage.css';
import './project.css';
import './projectDetails.css';
import Navbar from "./navBar";
import { useParams, useNavigate } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import HorizontalScroll from 'react-scroll-horizontal';
import React, { useState, useEffect,useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ViewContext } from './ViewContext';
import { useContext } from 'react';
import useCollapse from 'react-collapsed';
import chucksHover from  './resource/Images/Chucks/Hover.jpg';
import penthouseHover from  './resource/Images/Wangsa/Hover.png';
import KLCHover from  './resource/Images/KLC/Hover.png';
import hejauHover from  './resource/Images/Hejau/Hover.png';
import melodyHover from  './resource/Images/Melody/Hover.png';
import poppyHover from  './resource/Images/Poppy/Hover.png';
import kiaraHover from './resource/Images/Kiara9/Hover.png';
import wangsa9 from './resource/Images/Wangsa9/Hover.png';

const screenWidth = window.innerWidth;

const images = [
  { id: 1, file: 'Kiara9', name: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'] , format: 'png'},
  { id: 2, file: 'Wangsa9', name: ['01', '02', '03', '04', '05', '06', '07', '08'] , format: 'png'},
  { id: 3, file: 'Chucks', name: ['01', '02', '03', '04', '05', '06', '07', '08'] , format: 'jpg'},
  { id: 4, file: 'Wangsa', name: ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'] , format: 'png'},
  { id: 5, file: 'KLC', name: ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'] , format: 'png'},
  { id: 6, file: 'Hejau', name: ['01', '02', '03', '04', '05', '06', '07'], format:'png' },
  { id: 7, file: 'Melody', name: ['01', '02', '03', '04', '05', '06', '07', '08'], format: 'png'},
  { id: 8, file: 'Poppy', name: ['01', '02', '04', '05', '06', '07', '08', '09', '10', '11'], format: 'jpg' },
];

const projectsDetails = [
  { 
    id: 1,
    title: 'Penthouse',
    location: 'Mont Kiara',
    category: 'Residential',
    years: 'On-going',
    surface: '6,000 sqft',
    collab: '',
    desc1: 'The white washed carcass of the penthouse evokes a feeling of silence and emptiness. This forms the central idea to the conception of a tranquil space with a deep restrain of color palette - where the gentleness of white is carefully layered and contrasted with darker materiality. ',
    desc2: 'The intentional, unchanging nature of this stylistic relationship serves as a visual reminder of how the past informs new possibilities in the creation of a home. It becomes a metaphorical bridge, connecting historical echoes within the space with the contemporary vision for a tranquil and timeless residence.'
  },
  { 
    id: 2,
    title: 'Penthouse',
    location: 'Wangsa Maju',
    category: 'Residential',
    years: 'On-going',
    surface: '2,050 sqft',
    collab: '',
    desc1: 'To infuse an air of luxury and sophistication, we are committed to utilizing a carefully curated selection of high-quality, enduring materials. This refined material palette will encompass a range of timeless elements that not only elevate the aesthetics but also enhance the overall sense of opulence within the space. ',
    desc2: 'Thoughtfully chosen furnishings, selected for their comfort and softness, will encourage an ambiance of profound stillness and calm.'
  },
  { 
    id: 3,
    title: 'Chuck’s Store',
    location: 'The Gardens',
    category: 'Commercial',
    years: 'May 2023',
    surface: '700 sqft',
    collab: '',
    desc1: 'The new pop-up store traces a sensory journey of unexpected visual interplay through materiality, shapes, and form, reflecting the multifaceted aspects of Chuck’s as a lifestyle brand.',
    desc2: 'The spatial layout of the store balances the need for functionality and aesthetics. While addressing the pragmatic requirements of visual merchandising, the design also fosters an explorative spirit, inviting customers to engage with the products in a dynamic and experiential manner.'
  },
  { 
    id: 4,
    title: 'Penthouse',
    location: 'Wangsa Maju',
    category: 'Residential',
    years: 'August 2023',
    surface: '7,700 sqft',
    collab: '',
    desc1: 'The overall design direction is informed by the idea of injecting a sense of individuality and character to a contemporary holiday home. The vision was to create an experience that is inspired by interpretations of the landscape in the client’s home country.',
    desc2: 'Mountain striations, sensual desert curves and the rugged wadis are all strategically translated and expressed in architectural forms, materiality and color scheme as a celebration of the rich and diverse landscape Oman of the client’s home country has to offer. The project is a commitment to craft a series of spaces that are personal, exciting and beautifully balanced.'
  },
  { 
    id: 5,
    title: 'KLC Postnatal Center',
    location: 'Dataran Prima',
    category: 'Commercial, Care Center',
    years: 'June 2023',
    surface: '16,480 sqft',
    collab: '', 
    desc1: 'The concept of lunar eclipse represents a balance, with the alignment of sun, moon and earth. A ray of light breaking from the shadow signifies the vibrancy of a new journey, similar to the vigour of a new birth.',
    desc2: 'The spatial concept is inspired by this natural sense of delicateness where the gesture of contact and peeling combine to mask the rigidity of the current office typology, all in the spirit of presenting a sensual, emotive and highly balanced environment for new mothers and their family.'
  },
  { 
    id: 6, 
    title: 'Hejau', 
    location: 'Arcoris, Mont\'Kiara',
    category: 'Food & Beverage',
    years: '2021',
    surface: '220 sqft',
    collab: '',
    desc1: 'Hejau at Arcoris captivates with its earthy tones, mineral surfaces, and a lightness that reinterprets nature. The interior resembles a singular carved volume, welcoming visitors with flowing lines, earthy tones, and textured surfaces—a celebration of minerality reminiscent of sunny Palm Springs and Arizona cliffs.',
    desc2: 'At Hejau, pure material expressions take on a playful interpretation, creating a visually delightful and inherently calming atmosphere. This synthesis of elements extends a warm invitation, urging visitors to partake in a unique and immersive journey through Hejau’s distinct embrace of nature-inspired design.',
  },
  { 
    id: 7,
    title: 'Melody Kindyland',
    location: 'SouthLink, Bangsar South',
    category: 'Commercial, Kindergarden',
    years: '2022',
    surface: '7,285 sqft',
    collab: 'Paper Plan Design Studio',
    desc1: 'The interior design concept is focused on promoting sustainability and versatility. It showcases various approaches to spatial planning, design elements, and creative solutions to create a space that is both functional and aesthetically pleasing.',
    desc2: 'The design is centered around children, aiming to create a sanctuary that provides a sense of security and warmth while also featuring unexpected design details to spark their curiosity.'
  },
  { 
    id: 8,
    title: 'Poppykat',
    location: 'Cheras, Kuala Lumpur',
    category: 'Food & Beverage',
    years: 'On-going',
    surface: '480 sqft',
    collab: '',
    desc1: 'The design initiation began with an orange solid surface countertop. The orange hue recalls a certain aestaesthetic from Wes Anderson’s The Darjeeling Limited. A concept was crafted around this – an orange glaze complimented by a geometrical pattern. ',
    desc2: 'Here, associated zones unfold one after another, defined by architectural cues such as wall opening and wall treatment. The intent was to present a sense of fun and intrigue through a consistent aesthetic and spatial fluidity.'
  },
];

const projects = [
  { id: 1, year: '  2023', mobileYear: '  2023', name: 'Kiara 9', details: 'Monochrome penthouse apartment.', category: 'Residential', link: kiaraHover },
  { id: 2, year: '      ', mobileYear: '  2023', name: 'Wangsa 9', details: 'Serene Modern Sanctuary.', category: 'Residential', link: wangsa9 },
  { id: 3, year: '      ', mobileYear: '  2023', name: 'Chucks', details: 'Unexpected, fun, curious.', category: 'Commercial', link: chucksHover },
  { id: 4, year: '      ', mobileYear: '  2023', name: 'Penthouse', details: 'Ode to home.', category: 'Residential', link: penthouseHover },
  { id: 5, year: '      ', mobileYear: '  2023', name: 'KLC', details: 'Lunar Eclipse.', category: 'Commercial', link: KLCHover },
  { id: 6, year: '  2022', mobileYear: '  2022', name: 'Hejau', details: 'A foundation of environmental psychology.', category: 'Commercial', link: hejauHover },
  { id: 7, year: '      ', mobileYear: '  2022', name: 'Melody Kindyland', details: 'A place just like a home and a communal place for children.', category: 'Commercial', link: melodyHover },
  { id: 8, year: '      ', mobileYear: '  2022', name: 'Poppykat', details: 'Recalled a certain aesthetic from Wes Anderson\'s Movie.', category: 'Commercial', link: poppyHover },
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
      <LazyLoadImage id={`${file}-${index}`} style={{ padding: 0 }} key={`mobile-${file}-${index}`} className="project-image" src={require(`./resource/Images/${file}/${index}.${format}`)} alt={`${file}-${index}`} />
    );
  });
  const div = 'image';
  console.log(showImage);
  return (
    <>
    <div id={`mobileContent-${id}`} key={id} className={`projectDetailsMobileImageDiv mobileExpandContent hideScrollBar`} style={{ borderBottom: '1.6px solid rgb(0, 0, 0)'}} onScrollCapture={() => hideArrow(id)} onScroll={() => hideArrow(id)}>
      <div id='mobileProjectImageDiv' className="project-Image-Div" onMouseEnter={() => scrollable(div, true)} onScrollCapture={() => hideArrow(id)} onScroll={() => hideArrow(id)} style={{ overflow: "scroll" , height: '51vh', position:'relative'}}>
        {showImage}
        <div className='iconArrowMobile' style={{ position: 'absolute', right: '2%', bottom: '1%', display: 'flex'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 22"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 12h14m-7-7l7 7l-7 7"/></svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-circle">
            <circle cx="12" cy="12" r="10" style={{ fill: 'white'}}></circle>
            <polyline points="12 16 16 12 12 8"></polyline>
            <line x1="8" x2="16" y1="12" y2="12"></line>
          </svg> */}
        </div>
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
  const divRef = useRef(null);

  useEffect(() => {
    console.log('ref', divRef.current);
    console.log('id name',id);
    if (divRef.current) {
      var heightNavBar = document.getElementsByClassName('navDisplay')[0].style.height;
      divRef.current.scrollIntoView(true);
      var scrolledY = window.scrollY;
      console.log('scrolled', window.scrollY);
      window.scroll(0, scrolledY - heightNavBar);
    }
  }, []);

  const isMobileProjectList = projects.map((project) =>
  <>
  { project.id != id + 1  ? 
  <div id={`mobile-project-list-${project.id}`} className="projectListDisplay projectBackgroundColour" key={projects.id} style={{ 'paddingTop': '1%', 'paddingBottom': '1%', borderTop: project.id == 1 ? 'none': '1.6px solid #000000'}} onClick={()=> routeChange(project.id)}>
    <div id={`expand-${project.id}`} className="projectColumn" {...getToggleProps()} onClick={()=> isMobileExpandDetails(project.id, true)}>
      <div className='mobileContentYear' style={{ width: '20%', textAlign: 'start'}}>
        {project.mobileYear}
      </div>
      <div className='mobileContentYear' style={{ alignItems: 'flex-start', textAlign: 'start'}}>
        {project.name}
      </div>
    </div>
  </div> 
  :
  <div className="projectBackgroundColour" id={projects.id} key={projects.id} ref={divRef} data-target="refDiv" style={{ 'borderTop': project.id == 1 ? 'none' : '1.6px solid #000000', height: 'auto'}}>
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
  
  const isLaptopContent1 = (
    <>
    <ShowImage key={id.toString()} value={id} />
    <div id='projectDetailDisplay' className="projectDetailDisplay">
      <table id="projectDetails" style={{width: '100%'}}>
        <tr>
          <th className='projectDetailsFontSize projectDetailsTableTitle'>{projectsDetails[id].title}</th>
          <th></th>
        </tr>
      </table>
      <div style={{ width: '100%', overflow: 'hidden'}}>
        <div class="column" style={{paddingLeft: '3%', float: 'left', width: '22%'}}>
          <table id="projectDetails" style={{ display: 'table-row-group'}}>
            <tr>
              <td class="projectDetailsFontSize" style={{ verticalAlign:'top'}}>Location</td>
              <td class="projectDetailsFontSize" style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].location}</td>
            </tr>
            <tr>
              <td class="projectDetailsFontSize" style={{ verticalAlign:'top'}}>Category</td>
              <td class="projectDetailsFontSize" style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].category}</td>
            </tr>
            <tr>
              <td class="projectDetailsFontSize" style={{ verticalAlign:'top'}}>Years</td>
              <td class="projectDetailsFontSize" style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].years}</td>
            </tr>
            <tr>
              <td class="projectDetailsFontSize" style={{ verticalAlign:'top'}}>Surface</td>
              <td class="projectDetailsFontSize" style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].surface}</td>
            </tr>
            {projectsDetails[id].collab != '' &&
              <tr>
                <td class="projectDetailsFontSize" style={{ verticalAlign:'top'}}>Collab</td>
                <td class="projectDetailsFontSize" style={{ paddingLeft:'5%', whiteSpace:'nowrap'}}>{projectsDetails[id].collab}</td>
              </tr>
            }
          </table>
          {/* <Desc1 value={projectsDetails[id]} /> */}
        </div>
        <div class="hideScrollBar column font-family" style={{ width: '72%', float: 'right', paddingRight: '3%', height: '18vh', overflowY:'scroll'}}>
          <Desc1 value={projectsDetails[id]} />
        </div>
      </div>
    </div>
    </>
  );

  return(
    <>
    { mobileView ? isMobileProjectList : isLaptopContent1 }
    </>
  )
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
            <th className='projectDescription' style={{ textAlign: 'left', display: 'table-cell', paddingLeft: '1%', verticalAlign: 'top', width: '50%', display:'table-row-group'}}>{object.value.desc1}</th>
            <th className='projectDescription' style={{ textAlign: 'left', display: 'table-cell', paddingLeft: '1%', verticalAlign: 'top', width: '50%', display:'table-row-group'}}>{object.value.desc2}</th>
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

function Desc1(object) {
  // if (object.value.id == 1 || object.value.id == 2 || object.value.id == 3 || object.value.id == 4 || object.value.id == 8) {
    return (
      <>
        <td class="projectDetailsDescriptionFontSize" style={{ width: '50%', textAlign: 'left', padding: 0, margin: 0}}>{object.value.desc1}</td>
        <td class="projectDetailsDescriptionFontSize" style={{ paddingLeft: '2%', width: '48%', textAlign: 'left'}}>{object.value.desc2}</td>
      </>
    );
  // }else{
  //   return (
  //     <>
  //     <p class="projectDetailsDescriptionFontSize" style={{ padding: 0, margin: 0}}>{object.value.desc1}</p>
  //     <p class="projectDetailsDescriptionFontSize" style={{ marginTop: '1%' }}>{object.value.desc2}</p>
  //     </>
  //   );
  // }
}

function ShowImage(props) {
  const id = parseInt(props.value);
  console.log('id heree', id);
  const photos = images[id].name;
  const file = images[id].file;
  const format =images[id].format;
  const showImage = photos.map((index) => {
    return (
      <LazyLoadImage style={{ height: '100%', paddingRight: '2px'}} key={`${file}-${index}`} className="project-image" src={require(`./resource/Images/${file}/${index}.${format}`)} alt={`${file}-${index}`} />
    );
  });
  const div = 'image';
  return (
    <>    
      <div className='projectDetailsImageDiv hideScrollBar'>
        <div id='projectImageDiv' className="projectImageDiv project-Image-Div hideScrollBar" onScroll={() => hideArrowDesktop()} style={{ overflow: "scroll" ,position:'relative'}}>
          <HorizontalScroll className='scroll hideScrollBar' reverseScroll={true} style={{ overflow: 'auto', cursor: 'pointer'}}>
          {showImage}
          </HorizontalScroll>
          {/* <div className='iconArrow' style={{ position: 'absolute', right: '2%', bottom: '1%', display: 'flex'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-circle">
              <circle cx="12" cy="12" r="10" style={{ fill: 'white'}}></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" x2="16" y1="12" y2="12"></line>
            </svg>
          </div> */}
        </div>
      </div>
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
      <div className="navDisplay" style={{ height: '4svh'}}>
        <Navbar />
      </div>
      <div className='hideScrollBar' style={{ flexDirection: 'column', height: mobileView? '95svh': '95%', overflowX: mobileView ? 'scroll':'unset'}}>
        <ShowProject key={id.toString()} value={id} />
      </div>
    </div>
  );
}

function hideArrow(id){
  const number = id;
  console.log('iconArrowMobile');
  const icon = document.getElementsByClassName('iconArrowMobile');
  document.getElementsByClassName('iconArrowMobile')[0].style.display = 'none';
}

function hideArrowDesktop(){
  // const divScrolled = document.getElementsByClassName('projectImageDiv');
  // console.log('123',divScrolled.scrollRight);
  // const iconDesktop = document.getElementsByClassName('iconArrow')[0];
  // if (iconDesktop) {
  //   document.getElementsByClassName('iconArrow')[0].style.display = 'flex';
  // }
}

function scrollable(div, scroll) {
  if(screenWidth < 1024 ||  isMobile){
    if (scroll) {
      if(div == 'image') {
        // document.getElementsByClassName('projectDetailDisplay')[0].style.overflow = 'hidden';
        // document.getElementsByClassName('project-Image-Div')[0].style.overflow = 'scroll';
      } else{
        // document.getElementsByClassName('projectDetailDisplay')[0].style.overflow = 'scroll';
        // document.getElementsByClassName('project-Image-Div')[0].style.overflow = 'hidden';
      }
    }
  } else {
    // document.getElementsByClassName('projectDetailDisplay')[0].style.overflow = 'scroll';
    // document.getElementsByClassName('project-Image-Div')[0].style.overflow = 'scroll';
  }
}

function isMobileExpandDetails (id, expand) {
  console.log('isMobileExpandDetails');
  console.log(projects);
  const projectCount = 8;
  const number = parseInt(id)-1;
  console.log(number);
}