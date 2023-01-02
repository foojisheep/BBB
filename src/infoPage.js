import logoStart from './resource/logo-start.svg';
import logoMiddle from './resource/logo-middle.svg';
import logoEnd from './resource/logo-end.svg';
import './landingPage.css';
import './loadingPage.css';
import './infoPage.css';
import Projects from "./project";
import InfoNavBar from "./infoNavBar";
// import { Navbar, Nav } from 'rsuite';
// import { Link, useMatch, useResolvedPath } from "react-router-dom"

const InfoPage = () => {    
  // const logos = [logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart];
  const logos = [logoStart,logoMiddle,logoEnd];
    const logo = logos.map((logo,index) => (
      <img key={index} className="landingPage-image" src={logo} alt={logo.toString()} />
    ));
    return(
      <div id="infoDisplay">
        <InfoNavBar />
        <div>
          <ul style={{ textAlign: 'left',paddingTop:'3%', width: '100%', whiteSpace: 'none'}}>
              <li id="infoContent">The studio’s vision is informed by staging and 
                  storytelling. In addition to our interior design services,
                  together with our in-house registered architect, we 
                  also offer new builds and architectural renovations.</li>
              <li id="infoContent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our immersive approach to sculpting spaces for 
                  private residences plus the hospitality and commercial 
                  sectors is realised through the creation of abundant 
                  elements - from joinery to individual furnishing pieces -
                  to craft truly inimitable solutions that cohesively
                  connect all interior aspects. Daring palettes, organic
                  shapes and unexpected textural pairings elicit 
                  experiential outcomes with lasting impact.</li>
          </ul>
        </div>
        <div className="infoFooterDisplay">
            <table id="topInfoNav">
                <tr >
                    <td>Studio BBB &copy; 2022</td>
                    <td className='textAlignCenter'>For all project enquires, <span className='descriptionInfo'>   email</span> <a href="mailto:hi@studiobbb.co">hi@studiobbb.co</a>  
                    <span className="descriptionInfo">    whatsapp</span> <a href="https://wa.me/+60123601160">+60  12  360  1160</a></td>
                    <td className='textAlignRight'><a href="https://www.instagram.com/studiobbb">IG @studiobbb</a></td>
                </tr>
            </table>
        </div>
      </div>
      );
}

export default InfoPage;