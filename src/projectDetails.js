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
import { useParams } from 'react-router-dom';

// const images = [
//   {id: 1, file:'Wangsa', name:['01','02','03','04','05','06','07','08','09','10','11','12','13']},
//   {id: 2, file:'KLC', name:['01','02','03','04','05','06','07','08','09','10']},
//   {id: 3, file:'Hejau', name:['01','02','03','04','05','06','07']},
//   {id: 4, file:'Melody', name:['01','02','03','04','05','06','07','08']},
//   {id: 5, file:'Poppy', name:['01','02','03','04','05','06','07']},
// ];

const projectsDetails = [
  {id: 1, title:'Wangsa9 Penthouse', location: 'Wangsa Maju', category: 'Residential', years: 'On-going', surface: '7,700sqft', collab: '',  desc1:'The overall design direction is informed by the idea of injecting a sense of individuality and character to a contemporary holiday home. The vision was to create an experience that is inspired by interpretations of the landscape in the client’s home country.', desc2:'Mountain striations, sensual desert curves and the rugged wadis are all strategically translated and expressed in architectural forms, materiality and color scheme as a celebration of the rich and diverse landscape Oman has to offer. The project is a commitment to craft a series of spaces that are personal, exciting and beautifully balanced.' },
  {id: 2, title:'KLC Confinement Center', location: 'Dataran Prima', category: 'Commercial, Care Center', years: 'On-going', surface: '16,480 sqft', collab: '',  desc1:'The concept of lunar eclipse represents a balance, with the alignment of sun, moon and earth. A ray of light breaking from the shadow signifies the vibrancy of a new journey, similar to the vigour of a new birth.', desc2:'The spatial concept is inspired by this natural sense of delicateness where the gesture of contact and peeling combine to mask the rigidity of the current office typology, all in the spirit of presenting a sensual, emotive and highly balanced environment for new mothers and their family'},
  {id: 3, title:'Hejau', location: 'Arcoris, Mont\'Kiara', category: 'Food & Beverage', years: '2021', surface: '220sqft', collab: '',  desc1:'Hejau at Arcoris is infused with earthy tones, mineral surfaces and a sense of lightness. It is reflective of the spirit of reinterpreting the natural and organic. The interior appears as a singular carved volume. Visitors are greeted by flowing lines, earthy tones and textured surfaces - minerality, evocative of sunny Palm Springs and Arizona cliffs combined.', desc2:'Pure material expressions are infused with Hejau’s interpretation to create a fun/engaging yet calming atmosphere'},
  {id: 4, title:'Melody Kindyland', location: 'SouthLink, Bangsar South', category: 'Commercial, Kindergarden', years: '2022', surface: '7,285sqft', collab: 'Paper Plan Design Studio',  desc1:'The space promotes sustainability and versatility by showcasing different approaches on spatial planning, design elements and creative solutions.', desc2:'It is a sanctuary for the children that embraces a sense of secure, homely warm feeling, yet with unexpected surprises to be found in the design details to provoke the curiosity of the children.'},
  {id: 5, title:'Poppykat', location: 'Cheras, Kuala Lumpur', category: 'Food & Beverage', years: 'On-going', surface: '480sqft', collab: '',  desc1:'The design initiation began with an orange solid surface countertop. The orange hue recalls a certain aestaesthetic from Wes Anderson’s The Darjeeling Limited. A concept was crafted around this – an orange glaze complimented by a geometrical pattern. ', desc2:'Here, associated zones unfold one after another, defined by architectural cues such as wall opening and wall treatment. The intent was to present a sense of fun and intrigue through a consistent aesthetic and spatial fluidity.'},
];

function ShowProject(props) {
  const id = parseInt(props.value)-1 ;
  return(
    <div className="projectDetailDisplay">
        <table id="projectDetails">
        <tr>
            <th style={{ textAlign: 'left'}}>{projectsDetails[id].title}</th>
            <th></th>
          </tr>
          <tr>
            <td style={{width: '20%', verticalAlign:'top'}}>
              <table>
                <tr>
                  <td> Location</td>
                  <td>{projectsDetails[id].location}</td>
                </tr>
                <tr>
                  <td> Category</td>
                  <td>{projectsDetails[id].category}</td>
                </tr>
                <tr>
                  <td>Years</td>
                  <td>{projectsDetails[id].years}</td>
                </tr>
                <tr>
                  <td>Surface</td>
                  <td>{projectsDetails[id].surface}</td>
                </tr>
                {projectsDetails[id].collab != '' &&
                  <tr>
                    <td>Collab</td>
                    <td>{projectsDetails[id].collab}</td>
                  </tr>
                }
              </table>
            </td>
            <Desc value={projectsDetails[id]}/>
          </tr>
        </table>
    </div>
  );
}

function Desc(object) {
  if(object.value.id == 1 || object.value.id == 5 ){
  return(
    <>
    <td>
      <table>
        {/* <tr>
          <th style={{ textAlign: 'left' ,paddingBottom: '5%', paddingTop: '5%'}}>{}</th>
          <th></th>
          </tr> */}
          <tr>
          <th className='projectDescription' style={{ textAlign: 'left', display: 'table-cell', paddingLeft: '1%'}}>{object.value.desc1}</th>
          <th className='projectDescription' style={{ textAlign: 'left', display: 'table-cell', paddingLeft: '1%'}}>{object.value.desc2}</th>
        </tr>
      </table>
      </td> 
    </>
  );
  } else if(object.value.id == 2 || object.value.id == 4 ) {
    return(
      <>
        <td className='projectDescription' style={{ textAlign: 'left' ,paddingRight: '15%'}}>{object.value.desc1}</td>
        <td className='projectDescription' style={{ textAlign: 'left' ,paddingRight: '15%', paddingTop: '1%'}}>&emsp;{object.value.desc2}</td>
      </>
    );
  } else {
    return(
      <>
        <td className='projectDescription' style={{ textAlign: 'left' ,paddingRight: '15%'}}>{object.value.desc1}</td>
        <td className='projectDescription' style={{ textAlign: 'left' ,paddingRight: '15%', paddingTop: '1%'}}>{object.value.desc2}</td>
      </>
    );
  }
}

// function ShowImage(props) {
//   const id = parseInt(props.value) ;
//   const photos = images[id].name;
//   const file = images[id].file;
//   const image = photos.map((photo) => {
//     const img = require(`./resource/Images/${file}/${photo}.png`).default;
//     return(
//     <img key={`${file}-${photo}`} className="project-image" src={`img`} alt={`${file}-${photo}`}/>
//     )
//   });
// }

export default function ProjectDetailPage(object) {
  const { id } = useParams();

  // const photos = images[id].name;
  // const file = images[id].file;
  // // const image = photos.map((photo) => {
  //   const img = require(`./resource/Images/${file}/${photo}.png`).default;
  //   console.log(img);
  //   return(
  //   <img key={`${file}-${photo}`} className="project-image" src={`img`} alt={`${file}-${photo}`}/>
  //   )
  // });
  const images = [MK_1, MK_2, MK_3, MK_5];
  const image = images.map((images,index) => (
      <img key={index} className="project-image" src={images} alt={index.toString()}/>
    ));
  return(
    <>
      <Navbar />
      {/* {id == 1 || id == 3 &&
       <div key='details' className="projectContent-full" style="maxHeight: '65%'">
        {image}
        </div>
      }
      {id == 2 || id == 4 || id == 5 &&
      <div key='details' className="projectContent-full">
        {image}
        </div>
} */}
      {/* <ShowImage key={id.toString()} value={id}/> */}
      {/* </div> */}
      <ImageSize  key={id.toString()} value={id} image={image}/>
      <ShowProject key={id.toString()} value={id}/>
    </>
  );
}

function ImageSize(object) {
  if(object.value.id == 1 || object.value.id == 3 ){
  return(
    <div key='details' className="projectContent-full" style="maxHeight: '65%'">
     {object.image}
     </div>
    );
  } else {
    return(
      <div key='details' className="projectContent-full">
        {object.image}
      </div>
    );
   }
  }