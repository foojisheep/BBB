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
              <li id="infoContent">BBB is an interior design studio based in Kuala Lumpur. 
              We create non-linear narratives associated with a sense of place - 
              echoing emotions formed through a connection with the craft of building.</li>
          </ul>
        </div>
        <div className='context' style={{ marginTop: '3%' }}>
          <table id="contextAlign">
            <tr>
            <td style={{width: '20%', verticalAlign:'top'}}>
              <ul className='textAlignLeft'>CONTACT
                <li id="context">For all project enquires,</li>
                <li id="context"><a href="mailto:hi@studiobbb.co">hi@studiobbb.co</a></li>
              </ul>
            </td>
            <td>
              <ul className='textAlignLeft'>OFFICE HOURS
                <li id="context">Monday to Friday</li>
                <li id="context">10:00 - 18:00</li>
              </ul>
              <ul></ul>
            </td>
            </tr>
            <ul className='textAlignLeft' style={{ fontSize: '18px' }}>INSTAGRAM
                <li id="context"><a href="https://www.instagram.com/studiobbb">@studiobbb</a></li>
              </ul>
          </table>
        </div>
        <div className="infoFooterDisplay">
            <table id="topInfoNav">
                <tr >
                    <td>Studio BBB &copy; 2022</td>
                    {/* <td className='textAlignCenter'>For all project enquires, <span className='descriptionInfo'>   email</span> <a href="mailto:hi@studiobbb.co">hi@studiobbb.co</a>  
                    <span className="descriptionInfo">    whatsapp</span> <a href="https://wa.me/+60123601160">+60  12  360  1160</a></td>
                    <td className='textAlignRight'><a href="https://www.instagram.com/studiobbb">IG @studiobbb</a></td> */}
                </tr>
            </table>
        </div>
      </div>
      );
}

export default InfoPage;