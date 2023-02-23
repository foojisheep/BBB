import './landingPage.css';
import './loadingPage.css';
import './project.css';
import logoBig from './resource/logo.svg';
import { useNavigate } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import useCollapse from 'react-collapsed';

export default function ImageAndProjects() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const screenWidth = window.innerWidth;
  let navigate = useNavigate();
  const routeChange = (projectId) => {
    let path = `/project/${projectId}`;
    navigate(path);
  }
  console.log(projects[1].category);
  const content = projects.map((projects) =>
    <tr key={projects.id} onMouseEnter={() => changeURL(projects, true)} onClick={() => routeChange(projects, true)}>
      <td>  </td>
      <td>{projects.year}</td>
      <td>{projects.name}</td>
      <td>{projects.details}</td>
      <td style={{ textAlign: 'right' }}>{projects.category}</td>
    </tr>
  );

  const isMobileContent = projects.map((projects) =>
  <>
    <div className="projectListDisplay" key={projects.id} onClick={() => isMobileExpandDetails(projects.id)}>
      <div className="projectColumn" {...getToggleProps()}>
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
        <div className='mobileExpandContent'  key={`expand-${projects.id}`} {...getCollapseProps()}>
      <div className="projectColumn" style={{marginTop: 0, marginBottom: 0}}>
        <p style={{ float: 'left', width: '20%'}}></p>
        <img className='mobileExpandContentDescription' style={{ height: '20vh' }} src={projects.link} />
        </div>
        <div className="projectColumn" style={{marginTop: 0, marginBottom: 0}}>
        <p style={{ float: 'left', width: '20%'}}></p>
        <p className='mobileExpandContentDescription' style={{ textAlign: 'start', paddingTop: '2%'}}>{projects.details}</p>
        </div>
        <div className="projectColumn" style={{marginTop: 0, marginBottom: 0}}>
          <p className='mobileExpandContentDescription' style={{ textAlign: 'end'}} onClick={() => routeChange(projects.id)}>Read more</p>
        </div>
      </div>
    </div>
  </>
  );
  
  return (
    <>
      <div className='landingPage-full0'>
        <div key="landing" className="landingPage-full1">
          <img id="hoverImage" key='logo' className="landingPage-image1" src={logoBig} alt={logoBig.toString()} onMouseEnter={() => changeURL(logoBig, false)} />
        </div>
      </div>
      { screenWidth <500 ||  isMobile ? 
      <>
      <div className="projectDisplay1" style={{ overflow: 'scroll'}}>
        <table id="customers">
          {isMobileContent}
        </table>
      </div>
      </>
       :
       <div className="projectDisplay1 collapsible" style={{ height: '26%'}}>
        <table id="customers">
          {content}
        </table>
      </div>
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
  if(expand) {

  }
}