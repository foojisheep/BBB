import './landingPage.css';
import './loadingPage.css';
import './project.css';
import logoBig from './resource/logo.svg';
import { useNavigate } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import useCollapse from 'react-collapsed';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ViewContext } from './ViewContext';
import { useContext } from 'react';

export default function ImageAndProjects() {
  const {mobileView, laptopView, navView} = useContext(ViewContext);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const screenWidth = window.innerWidth;
  let navigate = useNavigate();
  const routeChange = (projectId) => {
    let path = `/project/${projectId}`;
    navigate(path);
  }
  // console.log(projects[1].category);
  const content = projects.map((projects) =>
    <tr key={projects.id} onMouseEnter={() => changeURL(projects, true)} onClick={() => routeChange(projects.id)}>
      <td>  </td>
      <td>{projects.mobileYear}</td>
      <td>{projects.name}</td>
      { navView ? null :
        <td>{projects.details}</td>
      }
      <td style={{ textAlign: 'right' }}>{projects.category}</td>
    </tr>
  );

  const isMobileContent = projects.map((projects) =>
  <>
{ projects.id == 1 ? 
      <div className="projectListDisplay projectBackgroundColour" key={projects.id} style={{ backgroundColor: 'rgb(255,192,103)'}}>
        <div id={`expand-${projects.id}`} className="projectColumn" {...getToggleProps()} onClick={()=> isMobileExpandDetails(projects, true)}>
          <div className='mobileContentYear' style={{ width: '20%', textAlign: 'start'}}>
            {projects.mobileYear}
          </div>
          <div className='mobileContentYear' style={{ alignItems: 'flex-start', textAlign: 'start'}}>
            {projects.name}
          </div>
        </div>
        <div id={`expanded-${projects.id}`} className="mobileExpandContent" key={`expand-${projects.id}`} {...getCollapseProps()} style={{ display: 'contents'}} onClick={()=> routeChange(projects.id)}>
          <div className='projectColumn' style={{ width: '20%', textAlign: 'start'}}>
          </div>
          <div className='projectColumn paddingLeft projectListHeight' style={{ alignItems:'center', textAlign: 'start'}}>
            <p className='mobileExpandContentDescription' style={{ textAlign: 'start', paddingTop: '2%', paddingBottom: '2%' }}>{projects.details}</p>
          </div>
          <div className='projectColumn' style={{ textAlign: 'end'}}>
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
            {projects.name}
          </div>
        </div>
        <div id={`expanded-${projects.id}`} className="mobileExpandContent" key={`expand-${projects.id}`} {...getCollapseProps()} onClick={()=> routeChange(projects.id)}>
          <div className='projectColumn' style={{ width: '20%', textAlign: 'start'}}>
          </div>
          <div className='projectColumn paddingLeft projectListHeight' style={{alignItems:'center', textAlign: 'start'}}>
            <p className='mobileExpandContentDescription' style={{ textAlign: 'start', paddingTop: '2%', paddingBottom: '2%' }}>{projects.details}</p>
          </div>
          <div className='projectColumn' style={{ textAlign: 'end'}}>
          </div>
        </div>
      </div>
    }
  </>
  );
  
  return (
    <>
      { mobileView ? 
      <>
      <div className='landingPage-full0'>
        <div key="landing" className="landingPage-full1">
          <LazyLoadImage id="changeImage" key='logo' className="landingPage-image1" src={projects[0].link} onMouseEnter={() => changeURL(logoBig, false)} />
        </div>
      </div>
      <div className="projectDisplay1">
        <table id="customers">
          {isMobileContent}
        </table>
      </div>
      </>
       :
       <>
       <div className='landingPage-full0' >
        <div key="landing" className="landingPage-full1">
          <LazyLoadImage id="hoverImage" key='logo' className="landingPage-image1" src={logoBig} alt={logoBig.toString()} onMouseEnter={() => changeURL(logoBig, false)} />
        </div>
      </div>
       <div className="projectDisplay1 collapsible" style={{ height: '26%',backgroundColor: '#FFFFFF'}}>
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
  const projectCount = 5;
  const number = projects.id -1;
  console.log(number);
  for(let i = 0; i < projectCount; i++){
    if(number == i && expand) {
      document.getElementById('changeImage').src = projects.link;
      document.getElementsByClassName('mobileExpandContent')[number].style.display = 'contents';
      document.getElementsByClassName('projectBackgroundColour')[number].style.backgroundColor = 'rgb(255,192,103)';
      document.getElementsByClassName('mobileExpandContent')[number].style.width = '100%';
    } else {
      document.getElementsByClassName('mobileExpandContent')[i].style.display = 'none';
      document.getElementsByClassName('projectBackgroundColour')[i].style.backgroundColor = '#FFFFFF';
    }
  }
}