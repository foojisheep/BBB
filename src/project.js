import './landingPage.css';
import './loadingPage.css';
import './project.css';
import logoBig from  './resource/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function ImageAndProjects() {
  let navigate = useNavigate(); 
  const routeChange = (projectId) =>{ 
    let path = `/project/${projectId}`; 
    navigate(path);
  }
  console.log(projects[1].category);
    const content = projects.map((projects) =>
      <tr key={projects.id} onMouseEnter={() => changeURL(projects, true)} onClick={()=> routeChange(projects.id)}>
        <td>  </td>
        <td>{projects.year}</td>
        <td>{projects.name}</td>
        <td>{projects.details}</td>
        <td style={{ textAlign:'right'}}>{projects.category}</td>
      </tr>
    );
    return(
      <>
       <div style={{ display: 'flex', width:'100%', backgroundColor:'#FFB8F2', height:'80%', alignSelf:'stretch'}}>
        <div key="landing" className="landingPage-full1">
          <img id="hoverImage" key='logo' className="landingPage-image1" src={logoBig} alt={logoBig.toString()} onMouseEnter={() => changeURL(logoBig, false)}/>
        </div>
        </div>
        <div className="projectDisplay1">
          <table id="customers">
              {content}
          </table>
        </div>
      </>
    );
  }

  const projects = [
    {id: 1, year: '  2023', name: 'Wangsa9 Penthouse', details: 'Emotional connection across 5,313km.', category: 'Residential', link: './Images/Wangsa/Hover.png'},
    {id: 2, year: '      ', name: 'KLC', details: 'Lunar Eclipse.', category: 'Commercial', link: './Images/KLC/Hover.png'},
    {id: 3, year: '  2022', name: 'Hejau', details: 'A foundation of environmental psychology.', category: 'Commercial', link: './Images/Hejau/Hover.png'},
    {id: 4, year: '      ', name: 'Melody Kindyland', details: 'A place just like a home and a communal place for children.', category: 'Commercial', link: './Images/Melody/Hover.png'},
    {id: 5, year: '      ', name: 'Poppykat', details: 'Recalled a certain aesthetic from Wes Anderson\'s Movie.', category: 'Commercial', link: './Images/Poppy/Hover.png'},
  ];

  function changeURL(projects, hover) {
    if(!hover){
      console.log('hover out');
      document.getElementById('hoverImage').src = logoBig;
    }

    if(hover && projects.link.length !== 0){
      console.log(projects.link);
      document.getElementById('hoverImage').src = projects.link;
    }
  }