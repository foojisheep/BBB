import './landingPage.css';
import './loadingPage.css';
import './project.css';
import HejauMK from './resource/Hejau MK/IMG_1.JPG';
import HejauMK2 from './resource/Hejau MK/IMG_2.JPG';
import HejauMK3 from './resource/Hejau MK/IMG_3.JPG';
import HejauMK4 from './resource/Hejau MK/IMG_4.JPG';
import logoBig from  './resource/logo.svg';

export default function LandingPage() {
    const content = projects.map((projects) =>
      <tr key={projects.id} onMouseEnter={() => changeURL(projects, true)} onMouseLeave={() => changeURL(projects, false)}>
        <td>  </td>
        <td>{projects.year}</td>
        <td>{projects.name}</td>
        <td>{projects.details}</td>
        <td>{projects.category}</td>
    </tr>
    );
      return(
          <div className="projectDisplay">
            <table id="customers">
                {content}
            </table>
          </div>
        );
  }

  const projects = [
    {id: 1, year: '  2022', name: 'Bolt & Witchwood', details: 'Not your average neighourhood cafe.', category: 'Hospo', link: HejauMK2},
    {id: 2, year: '      ', name: 'Poppykat', details: 'Recalled a certain aesthetic from Wes Anderson\'s Movie.', category: 'Hospo', link: ''},
    {id: 3, year: '      ', name: 'Kedai Coklat', details: 'Invokes a precious memory of broken chocholate bars.', category: 'Hospo', link: HejauMK4},
    {id: 4, year: '  2021', name: 'Hejau MK', details: 'Ecovative of sunny Palm Springs and Arizon Cliffs combines.', category: 'Resi', link: HejauMK},
    {id: 5, year: '  2020', name: 'Hejau PJ', details: 'Reminiscent of a small oasis.', category: 'Hospo', link: ''}
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

  //function hoverImage(link, hover) {
    // if(hover){  hover && ! empty(projects.link)
    //   document.getElementById("myImg").src = {link};
    // }
  //}