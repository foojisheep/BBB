import logoStart from './resource/logo-start.svg';
import logoMiddle from './resource/logo-middle.svg';
import logoEnd from './resource/logo-end.svg';
import './landingPage.css';
import './loadingPage.css';
import './workPage.css';
import ProjectContent from "./projectContent";
import { Navbar, Nav } from 'rsuite';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function LandingPage() {    
  // const logos = [logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart];
  const logos = [logoStart,logoMiddle,logoEnd];
    const logo = logos.map((logo,index) => (
      <img key={index} className="landingPage-image" src={logo} alt={logo.toString()} />
    ));
    return(
      <div>
        <div className='topnav row'>
          <div className='nav col-2'> 
            <h1>Studio BBB</h1>
           </div>
           <div className='descp col-8'> 
           <ul>
            <li className='row descrip'>is an interior design studio believes every space</li>
            <li className='row descrip'>created is an expression of oneself.</li>
          </ul>

          {/* Previous way of displaying desciption - but have issue with putting center for entire description }
              {/* <p className='row descrip top-desc'>is an interior design studio believes every space</p>
              <p className='row descrip bottom-desc'>created is an expression of oneself.</p> */}

          </div>
          <div className='topnav-right col-1'>
            {/* <ul>
              <li><a href="#">Work</a></li>
              <li><a href="#">Information</a></li>
            </ul> */}
              <a>Work</a>
            </div>
            <div className='topnav-right col-1'>
              <a>Information</a>
            </div>
        </div>
        {/* <div className="projectDisplay">
          <table id="nav">
            <tr>
              <td><h1>Studio BBB</h1></td>
              <td><ul>
            <li className='row descrip'>is an interior design studio believes every space</li>
            <li className='row descrip'>created is an expression of oneself.</li>
          </ul></td>
              <td>Not your average neighourhood cafe.</td>
              <td>Hospo</td>
            </tr>
          </table>
        </div> */}
        <div className="landingPage-full">
          {logo}
        </div>
        <ProjectContent />
      </div>
      );
}