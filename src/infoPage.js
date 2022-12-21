import logoStart from './resource/logo-start.svg';
import logoMiddle from './resource/logo-middle.svg';
import logoEnd from './resource/logo-end.svg';
import './landingPage.css';
import './loadingPage.css';
import './project.css';
import Projects from "./project";
import InfoNavBar from "./infoNavBar";
// import { Navbar, Nav } from 'rsuite';
// import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function InfoPage() {    
  // const logos = [logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart];
  const logos = [logoStart,logoMiddle,logoEnd];
    const logo = logos.map((logo,index) => (
      <img key={index} className="landingPage-image" src={logo} alt={logo.toString()} />
    ));
    return(
      <div id="infoDisplay">
        <InfoNavBar />
        
        <div className="projectDisplay">
            <table id="topInfoNav">
            <tr >
        <td>Studio BBB @ 2022</td>
        <td>For all project enquires, </td>
        <td><a>email hi@studiobbb.co </a></td>
        <td><a>whatsapp hi@studiobbb.co</a></td>
    </tr>
                </table>
                </div>
      </div>
      );
}