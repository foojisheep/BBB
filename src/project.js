import './landingPage.css';
import './loadingPage.css';
import './project.css';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  let navigate = useNavigate(); 
  const routeChange = (projectId) =>{ 
    let path = `/project/${projectId}`; 
    navigate(path);
  }
  console.log(projects[1].category);
    const content = projects.map((projects) =>
      <tr key={projects.id} onMouseEnter={() => changeURL(projects, true)} onMouseLeave={() => changeURL(projects, false)} onClick={()=> routeChange(projects.id)}>
        <td>  </td>
        <td>{projects.year}</td>
        <td>{projects.name}</td>
        <td>{projects.details}</td>
        <td style={{ textAlign:'right'}}>{projects.category}</td>
      </tr>
    );
    return(
      <div className="projectDisplay1">
        <table id="customers">
            {content}
        </table>
      </div>
    );
  }

  const projects = [
    {id: 1, year: '  2023', name: 'Wangsa9 Penthouse', details: 'Emotional connection across 5,313km.', category: 'Residential', link: ''},
    {id: 2, year: '      ', name: 'KLC', details: 'Lunar Eclipse.', category: 'Commercial', link: ''},
    {id: 3, year: '  2022', name: 'Hejau', details: 'A foundation of environmental psychology.', category: 'Commercial', link: ''},
    {id: 4, year: '      ', name: 'Melody Kindyland', details: 'A place just like a home and a communal place for children.', category: 'Commercial', link: ''},
    {id: 5, year: '  2021', name: 'Poppykat', details: 'Recalled a certain aesthetic from Wes Anderson\'s Movie.', category: 'Commercial', link: ''},
  ];

  function changeURL(projects, hover) {
    // if(!hover){
    //   console.log('hover out');
    //   document.getElementById('hoverImage').src = logoBig;
    // }
    // if(hover && projects.link.length !== 0){
    //   console.log(projects.link);
    //   document.getElementById('hoverImage').src = projects.link;
    // }
  }