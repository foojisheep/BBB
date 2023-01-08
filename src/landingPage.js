import logoStart from './resource/logo-start-new.svg';
import logoMiddle from './resource/logo-middle-new.svg';
import logoEnd from './resource/logo-end-new.svg';
import logoBig from  './resource/logo.svg';
import './landingPage.css';
import './loadingPage.css';
import './project.css';
import Projects from "./project";
import Navbar from "./navBar";
// import { Navbar, Nav } from 'rsuite';
// import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function LandingPage() {    
  // const logos = [logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart];
  const logos = [logoStart,logoMiddle,logoEnd];
    const logo = logos.map((logo,index) => (
      <img key={index} className="landingPage-image" src={logo} alt={logo.toString()} />
    ));
    return(
      <>
        <Navbar />
        <div key="landing" className="landingPage-full">
        <img id="hoverImage" key='logo' className="landingPage-image" src={logoBig} alt={logoBig.toString()} />
          {/* {logo} */}
        </div>
        <Projects />
      </>
      );
}