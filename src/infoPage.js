import logoStart from './resource/logo-start.svg';
import logoMiddle from './resource/logo-middle.svg';
import logoEnd from './resource/logo-end.svg';
import './landingPage.css';
import './loadingPage.css';
import './infoPage.css';
import { isMobile } from "react-device-detect";
import InfoNavBar from "./infoNavBar";
import Navbar from "./navBar";
import React, { useState, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ViewContext } from './ViewContext';

function InfoPage () {
  const {mobileView, laptopView} = useContext(ViewContext)
  const [size, initSize] = React.useState();
  const onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    initSize({
      width: width,
      height: height,
    });
  };
  React.useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  const screenWidth = window.innerWidth;
  const logos = [logoStart,logoMiddle,logoEnd];
  const logo = logos.map((logo,index) => (
    <LazyLoadImage key={index} className="landingPage-image" src={logo} alt={logo.toString()} />
  ));
  return(
    // <div id="infoDisplay" className="infoPageTransition">
    // <div id="infoDisplay">
    //   <InfoNavBar />
    //   <div className='contentDescriptionHeight'>
    //     <ul style={{ textAlign: 'left',paddingTop:'3%', width: '100%', whiteSpace: 'none', paddingLeft: '2%'}}>
    //         <li id="infoContent">BBB is an interior design studio based in Kuala Lumpur. 
    //         We create non-linear narratives associated with a sense of place - 
    //         echoing emotions formed through a connection with the craft of building.</li>
    //     </ul>
    //   </div>
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', width: "100vw", background: '#661F08'}}> 
        <div className="navDisplay" style={{ height: '6.99%', backgroundColor: '#661F08', borderBottom: '1.6px solid #FFC572'}}>
          <InfoNavBar/>
        </div>
      <div className='context contentHeight' style={{height: '93.01%'}}>
      <div className='contentDescriptionHeight'>
         <ul style={{ textAlign: 'left',paddingTop:'3%', width: '100%', whiteSpace: 'none'}}>
             <li id="infoContent">BBB is an interior design studio based in Kuala Lumpur. 
             We create non-linear narratives associated with a sense of place - 
             echoing emotions formed through a connection with the craft of building.</li>
         </ul>
       </div>
        <table id="contextAlign">
        { mobileView ? 
          <>
           <ul className='textAlignLeft' style={{ fontSize: '16px'}}>{ mobileView ?   <><h1 style={{ fontSize: '16px', paddingBottom: '5%'}}>Contact</h1></> : <>CONTACT</> }
              <li id="context" style={{ fontSize: '16px'}}>For all project enquires,</li>
              <li id="context" style={{ fontSize: '16px'}}><a href="mailto:hi@studiobbb.co">hi@studiobbb.co</a></li>
            </ul>
            <ul className='textAlignLeft' style={{ fontSize: '16px' }}>{ mobileView ?  <>Office Hours</> : <>OFFICE HOURS</> }
              <li id="context" style={{ fontSize: '16px'}}>Monday to Friday</li>
              <li id="context" style={{ fontSize: '16px'}}>10:00 - 18:00</li>
            </ul>
            <ul className='textAlignLeft' style={{ fontSize: '16px' }}>{ mobileView ?   <>Instagram</> : <>INSTAGRAM</> }
              <li id="context" style={{ fontSize: '16px'}}><a href="https://www.instagram.com/studiobbb.co">@studiobbb</a></li>
            </ul>
          </> :
          <>
          <tr>
          <td style={{width: '20%', verticalAlign:'top'}}>
            <ul className='textAlignLeft'>{ mobileView ?   <>Contact</> : <>CONTACT</> }
              <li id="context">For all project enquires,</li>
              <li id="context"><a href="mailto:hi@studiobbb.co">hi@studiobbb.co</a></li>
            </ul>
          </td>
          <td>
            <ul className='textAlignLeft'>{ mobileView ?  <>Office Hours</> : <>OFFICE HOURS</> }
              <li id="context">Monday to Friday</li>
              <li id="context">10:00 - 18:00</li>
            </ul>
            <ul></ul>
          </td>
          </tr>
          <ul className='textAlignLeft' style={{ fontSize: '18px' }}>{ mobileView ?   <>Instagram</> : <>INSTAGRAM</> }
              <li id="context"><a href="https://www.instagram.com/studiobbb.co">@studiobbb</a></li>
            </ul>
            </>
          }
        </table>
      </div>
      <div id="bottomInfoNav"className="infoFooterDisplay">Studio BBB &copy; 2023</div>
    </div>
  );
}

export default InfoPage;