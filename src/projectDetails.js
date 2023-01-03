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