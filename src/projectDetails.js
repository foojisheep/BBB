import './landingPage.css';
import './loadingPage.css';
import './project.css';
import './projectDetails.css';
import Projects from "./project";
import Navbar from "./navBar";
import MK_1 from './resource/ProjectDetails/HejauMK/1.jpg';
import MK_2 from './resource/ProjectDetails/HejauMK/2.jpg';
import MK_3 from './resource/ProjectDetails/HejauMK/3.jpg';
import MK_4 from './resource/ProjectDetails/HejauMK/4.jpg';
import MK_5 from './resource/ProjectDetails/HejauMK/5.jpg';

export default function ProjectDetailPage(object) {
  const file = object.file;
  const images = [MK_1, MK_2, MK_3, MK_5];
  const image = images.map((image,index) => (
      <img key={index} className="project-image" src={image} alt={index.toString()}/>
    ));
  return(
    <>
      <Navbar />
      <div key='details' className="projectContent-full">
        {image}
      </div>
      <div className="projectDetailDisplay">
        <table id="projectDetails">
          <tr>
            <td style={{width: '20%', verticalAlign:'top'}}>
              <table>
                <tr>
                  <th style={{ textAlign: 'left' ,paddingBottom: '5%', paddingTop: '5%'}}>Poppykat</th>
                  <th></th>
                  </tr>
                  <tr>
                      <td> Location</td>
                      <td>Cheras, Kuala Lumpur</td>
                  </tr>
                  <tr>
                      <td> Category</td>
                      <td>F&B</td>
                  </tr>
                  <tr>
                      <td>Status</td>
                      <td>Ongoing</td>
                  </tr>
                  <tr>
                      <td>Surface</td>
                      <td>480sqft</td>
                  </tr>
              </table>
            </td>
            <td className='projectDescription' style={{ textAlign: 'left' ,paddingRight: '15%'}}>The design initiation began with an orange solid surface countertop. 
                        The orange hue recalls a certain aestaesthetic from Wes Anderson’s The Darjeeling Limited. 
                        A concept was crafted around this - an orange glaze complimented by a geometrical pattern. 
                        Here, associated zones unfold one after another, defined by architectural 
                        cues such as wall opening and wall treatment. The intent was to present a sense of fun 
                        and intrigue through a consistent aesthetic and spatial fluidity.</td>
            </tr>
          </table>
      </div>
    </>
  );
}
const projectsDetails = [
  {id: 1, location: 'Wangsa Maju', category: 'Residential', years: 'On-going', surface: '7,700sqft', collab: 'Paper Plan Design Stdio',  desc1:'The overall design direction is informed by the idea of injecting a sense of individuality and character to a contemporary holiday home. The vision was to create an experience that is inspired by interpretations of the landscape in the client’s home country.', desc2:'Mountain striations, sensual desert curves and the rugged wadis are all strategically translated and expressed in architectural forms, materiality and color scheme as a celebration of the rich and diverse landscape Oman has to offer. The project is a commitment to craft a series of spaces that are personal, exciting and beautifully balanced.' },
  {id: 2, year: '      ', name: 'Poppykat', details: 'Recalled a certain aesthetic from Wes Anderson\'s Movie.', category: 'Hospo', link: ''},
  {id: 3, year: '      ', name: 'Kedai Coklat', details: 'Invokes a precious memory of broken chocholate bars.', category: 'Hospo', link: ''},
  {id: 4, year: '  2021', name: 'Hejau MK', details: 'Ecovative of sunny Palm Springs and Arizon Cliffs combines.', category: 'Resi', link: ''},
  {id: 5, year: '  2020', name: 'Hejau PJ', details: 'Reminiscent of a small oasis.', category: 'Hospo', link: ''}
];