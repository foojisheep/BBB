import './landingPage.css';
import './loadingPage.css';
import './project.css';
import './projectDetails.css';
import Projects from "./project";
import Navbar from "./navBar";
import { useParams } from 'react-router-dom';
import { useRef, useEffect } from "react";

const images = [
  { id: 1, file: 'Wangsa', name: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'] },
  { id: 2, file: 'KLC', name: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'] },
  { id: 3, file: 'Hejau', name: ['01', '02', '03', '04', '05', '06', '07'] },
  { id: 4, file: 'Melody', name: ['01', '02', '03', '04', '05', '06', '07', '08'] },
  { id: 5, file: 'Poppy', name: ['01', '02', '03', '04', '05', '06', '07'] },
];

const projectsDetails = [
  { id: 1, title: 'Wangsa9 Penthouse', location: 'Wangsa Maju', category: 'Residential', years: 'On-going', surface: '7,700sqft', collab: '', desc1: 'The overall design direction is informed by the idea of injecting a sense of individuality and character to a contemporary holiday home. The vision was to create an experience that is inspired by interpretations of the landscape in the client’s home country.', desc2: 'Mountain striations, sensual desert curves and the rugged wadis are all strategically translated and expressed in architectural forms, materiality and color scheme as a celebration of the rich and diverse landscape Oman has to offer. The project is a commitment to craft a series of spaces that are personal, exciting and beautifully balanced.' },
  { id: 2, title: 'KLC Confinement Center', location: 'Dataran Prima', category: 'Commercial, Care Center', years: 'On-going', surface: '16,480 sqft', collab: '', desc1: 'The concept of lunar eclipse represents a balance, with the alignment of sun, moon and earth. A ray of light breaking from the shadow signifies the vibrancy of a new journey, similar to the vigour of a new birth.', desc2: 'The spatial concept is inspired by this natural sense of delicateness where the gesture of contact and peeling combine to mask the rigidity of the current office typology, all in the spirit of presenting a sensual, emotive and highly balanced environment for new mothers and their family' },
  { id: 3, title: 'Hejau', location: 'Arcoris, Mont\'Kiara', category: 'Food & Beverage', years: '2021', surface: '220sqft', collab: '', desc1: 'Hejau at Arcoris is infused with earthy tones, mineral surfaces and a sense of lightness. It is reflective of the spirit of reinterpreting the natural and organic. The interior appears as a singular carved volume. Visitors are greeted by flowing lines, earthy tones and textured surfaces - minerality, evocative of sunny Palm Springs and Arizona cliffs combined.', desc2: 'Pure material expressions are infused with Hejau’s interpretation to create a fun/engaging yet calming atmosphere' },
  { id: 4, title: 'Melody Kindyland', location: 'SouthLink, Bangsar South', category: 'Commercial, Kindergarden', years: '2022', surface: '7,285sqft', collab: 'Paper Plan Design Studio', desc1: 'The space promotes sustainability and versatility by showcasing different approaches on spatial planning, design elements and creative solutions.', desc2: 'It is a sanctuary for the children that embraces a sense of secure, homely warm feeling, yet with unexpected surprises to be found in the design details to provoke the curiosity of the children.' },
  { id: 5, title: 'Poppykat', location: 'Cheras, Kuala Lumpur', category: 'Food & Beverage', years: 'On-going', surface: '480sqft', collab: '', desc1: 'The design initiation began with an orange solid surface countertop. The orange hue recalls a certain aestaesthetic from Wes Anderson’s The Darjeeling Limited. A concept was crafted around this – an orange glaze complimented by a geometrical pattern. ', desc2: 'Here, associated zones unfold one after another, defined by architectural cues such as wall opening and wall treatment. The intent was to present a sense of fun and intrigue through a consistent aesthetic and spatial fluidity.' },
];

function ShowProject(props) {
  const id = parseInt(props.value) - 1;
  return (
    <div className="projectDetailDisplay">
      <table id="projectDetails">
        <tr>
          <th style={{ textAlign: 'left', paddingTop: '1%'}}>{projectsDetails[id].title}</th>
          <th></th>
        </tr>
        <tr>
          <td style={{ width: '18%', verticalAlign: 'top' }}>
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
          <Desc value={projectsDetails[id]} />
        </tr>
      </table>
    </div>
  );
}

function Desc(object) {
  if (object.value.id == 1 || object.value.id == 5) {
    return (
      <>
        <td>
          <table>
            {/* <tr>
          <th style={{ textAlign: 'left' ,paddingBottom: '5%', paddingTop: '5%'}}>{}</th>
          <th></th>
          </tr> */}
            <tr>
              <th className='projectDescription' style={{ textAlign: 'left', display: 'table-cell', paddingLeft: '1%', verticalAlign: 'top', width: '50%'}}>{object.value.desc1}</th>
              <th className='projectDescription' style={{ textAlign: 'left', display: 'table-cell', paddingLeft: '1%', verticalAlign: 'top', width: '50%'}}>{object.value.desc2}</th>
            </tr>
          </table>
        </td>
      </>
    );
  } else if (object.value.id == 2 || object.value.id == 4) {
    return (
      <>
        <td className='projectDescription' style={{ textAlign: 'left', paddingRight: '10%' }}>{object.value.desc1}</td>
        <td className='projectDescription' style={{ textAlign: 'left', paddingRight: '10%', paddingTop: '1%' }}>&emsp;{object.value.desc2}</td>
      </>
    );
  } else {
    return (
      <>
        <td className='projectDescription' style={{ textAlign: 'left', paddingRight: '10%' }}>{object.value.desc1}</td>
        <td className='projectDescription' style={{ textAlign: 'left', paddingRight: '10%', paddingTop: '1%' }}>{object.value.desc2}</td>
      </>
    );
  }
}

function ShowImage(props) {
  const scrollRef = useHorizontalScroll();
  const id = parseInt(props.value) - 1;
  const photos = images[id].name;
  const file = images[id].file;
  const showImage = photos.map((index) => {
    //   const img = require(`./resource/Images/${file}/${photo}.png`);
    //   console.log(`./Images/${file}/${photo}.png`);
    return (
      // <div className='list-group-item' style={{}}>
      <img style={{ height: '100%' }} key={`${file}-${index}`} className="project-image" src={require(`./resource/Images/${file}/${index}.png`)} alt={`${file}-${index}`} />
      // </div>
      // <img key={`${file}-${index}`} className="project-image" src={require(`./resource/Images/${file}/Hover.png`)} alt={`${file}-${index}`}/>
    );
  });

  return (
    <>
      <div className="project-Image-Div" ref={scrollRef}>
        {/* <div className='list-group list-group-horizontal' style={{ display: 'flex', overflow: 'hidden', height: '80%' }}> */}
        {showImage}
        {/* </div> */}
      </div>
    </>
  );
}

export default function ProjectDetailPage(object) {
  const { id } = useParams();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <ShowImage key={id.toString()} value={id} />
      <ShowProject key={id.toString()} value={id} />
    </div>
  );
}

function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}