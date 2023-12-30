import './landingPage.css';
import './loadingPage.css';
import './project.css';
import logoBig from './resource/logo.svg';
import { useNavigate } from 'react-router-dom';
import useCollapse from 'react-collapsed';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ViewContext } from './ViewContext';
import { useContext } from 'react';
import chucksHover from  './resource/Images/Chucks/Hover.jpg';
import penthouseHover from  './resource/Images/Wangsa/Hover.png';
import KLCHover from  './resource/Images/KLC/Hover.png';
import hejauHover from  './resource/Images/Hejau/Hover.png';
import melodyHover from  './resource/Images/Melody/Hover.png';
import poppyHover from  './resource/Images/Poppy/Hover.png';
import kiaraHover from './resource/Images/Kiara9/Hover.png';
import wangsa9 from './resource/Images/Wangsa9/Hover.png';


export default function ImageAndProjects() {
  const {mobileView, laptopView, navView} = useContext(ViewContext);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const screenWidth = window.innerWidth;
  let navigate = useNavigate();
  const routeChange = (projectId) => {
    let path = `/project/${projectId}`;
    navigate(path);
  }

  const content = projects.map((project) =>
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

  const isMobileContent = projects.map((projects) =>
  <>
{ projects.id == 1 ? 
      <div className="projectListDisplay projectBackgroundColour" key={projects.id} style={{ backgroundColor: '#FFFFFF'}}>
        <div id={`expand-${projects.id}`} className="projectColumn" {...getToggleProps()} onClick={()=> isMobileExpandDetails(projects, true)}>
          <div className='mobileContentYear' style={{ width: '20%', textAlign: 'start'}}>
            {projects.mobileYear}
          </div>
          <div className='mobileContentYear' style={{ alignItems: 'flex-start', textAlign: 'start', width: '50%'}}>
            <span>
              {projects.name + ' '}
            </span>
          </div>
          <div className='mobileContentYear' style={{ textAlign: 'end', width: '30%'}}>
            {
              projects.tag != null ?
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
          <div className='mobileContentYear' style={{ alignItems: 'flex-start', textAlign: 'start', width: '50%'}}>
            <span>
              {projects.name + ' '}
            </span>
          </div>
          <div className='mobileContentYear' style={{ textAlign: 'end', width: '30%'}}>
            {
              projects.tag != null ?
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
          {/* <div className='projectColumn paddingLeft' style={{ width: '20%', textAlign: 'start'}}>
          </div>
          <div className='projectColumn paddingLeft projectListHeight' style={{alignItems:'center', textAlign: 'start'}}>
            <p className='mobileExpandContentDescription' style={{ textAlign: 'start', paddingTop: '2%', paddingBottom: '2%' , width: '100%'}}>{projects.details}</p>
            <div className='projectColumn' style={{ textAlign: 'end', display: 'block'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="butt" stroke-linejoin="round" class="lucide lucide-plus"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
          </div>
          </div> */}
        </div>
      </div>
    }
  </>
  );
  
  return (
    <>
      { mobileView ? 
      <>
      <div className='landingPage-full0' style={{ minHeight: '63.5%'}}>
      <a id='changeLink'>
        <div key="landing" className="landingPage-full1">
          <LazyLoadImage id="changeImage1" key='logo' className="landingPage-image1" src={projects[0].link} onMouseEnter={() => changeURL(logoBig, false)}/>
        </div>
        </a>
      </div>
      <div className="projectDisplay1" style={{ overflowY: 'scroll'}}>
        <table id="customers">
          {isMobileContent}
        </table>
      </div>
      </>
       :
       <>
       <div className='landingPage-full0' style={{ height: '70.5%'}}>
        <div key="landing" className="landingPage-full1">
        {/* THIS  PART HOVER IMAGE WHEN USER SELECT STORE FROM THE LIST */}
          <LazyLoadImage id="hoverImage1" key='logo' className="landingPage-image1" src={logoBig} onMouseEnter={() => changeURL(logoBig, false)} />
        </div>
      </div>
       <div className="hideScrollBar projectDisplay1 collapsible" style={{ height: '26%',backgroundColor: '#FFFFFF', overflowY:'scroll'}}>
        <table id="customers">
          {content}
        </table>
      </div>
      </>
      }
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
    document.getElementById('hoverImage1').src = logoBig;
    // document.getElementById('videoBBB').style.display = 'flex';
    // document.getElementById('hoverImage1').style.display = 'none';
  }

  if (hover && projects.link.length !== 0) {
    // document.getElementById('videoBBB').style.display = 'none';
    document.getElementById('hoverImage1').style.display = 'flex';
    document.getElementById('hoverImage1').src = projects.link;
  }
}

function isMobileExpandDetails (projects, expand) {
  console.log('isMobileExpandDetails');
  console.log(projects);
  const projectCount = 8;
  const number = projects.id -1;
  console.log(number);
  for(let i = 0; i < projectCount; i++){
    if(number == i && expand) {
      document.getElementById('changeImage1').src = projects.link;
      document.getElementsByClassName('mobileExpandContent')[number].style.display = 'contents';
      document.getElementsByClassName('projectBackgroundColour')[number].style.backgroundColor = '#FFFFFF';
      document.getElementsByClassName('mobileExpandContent')[number].style.width = '100%';
      document.getElementById('changeLink').href = `/project/${projects.id}`;
    } else {
      console.log('expand');
      // document.getElementById('mobileVideoBBB').style.display = 'none';
      document.getElementById('changeImage1').style.display = 'flex';
      document.getElementsByClassName('mobileExpandContent')[i].style.display = 'none';
      document.getElementsByClassName('projectBackgroundColour')[i].style.backgroundColor = '#FFFFFF';
    }
  }
}