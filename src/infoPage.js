import './landingPage.css';
import './loadingPage.css';
import './infoPage.css';
import Navbar from "./navBar";
import React, { useState, useContext } from "react";
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

  return(
    <div style={{display: 'flex', flexDirection: 'column', height: '100svh', width: "100vw", background: 'rgb(104,19,0)'}}> 
      { mobileView ?
      <div className="navDisplay" style={{ position: 'sticky', top: 0 ,backgroundColor: 'rgb(104,19,0)', borderBottom: '1.6px solid rgb(255,192,103)'}}>
          <Navbar/>
      </div> :
      <div className="navDisplay" style={{ position: 'sticky', top: 0 ,backgroundColor: 'rgb(104,19,0)', borderBottom: 'none'}}>
        <Navbar/>
      </div>
      }
      <div className='context' style={{height: '88svh'}}>
      { screenWidth < 744 ?
      <div className='contentDescriptionHeight'>
        <ul style={{ textAlign: 'left',paddingTop:'3%', width: '100%', whiteSpace: 'none'}}>
        <li id="infoContent">BBB is an interior design studio based in Kuala Lumpur. We create non-linear narratives associated with a sense of place - echoing emotions formed through a connection with the craft of building.</li>
        </ul>
      </div>
      :
      <div className='contentDescriptionHeight'>
         <ul style={{ textAlign: 'left',paddingTop:'3%', width: '105%', whiteSpace: 'none'}}>
             <li id="infoContent">BBB is an interior design studio based in </li>
             <li id="infoContent">Kuala Lumpur. We create non-linear</li>
             <li id="infoContent">narratives associated with a sense of place -</li>
             <li id="infoContent">echoing emotions formed through</li>
             <li id="infoContent">a connection with the craft of building.</li>
         </ul>
       </div>
      }
       <div className='infoContentDiv' >
          <table id="contextAlign">
          { mobileView ? 
            <>
            <ul id="infoContent" className='textAlignLeft mobileFontSize' style={{ paddingLeft: 0, letterSpacing: '0.03em' }}>CONTACT
              <li id="infoContent" style={{ paddingLeft: 0 }}>For all project enquires,
                <a href="mailto:hi@studiobbb.co">hi@studiobbb.co</a></li>
            </ul>
            <ul id="infoContent" className='textAlignLeft mobileFontSize' style={{ paddingLeft: 0,  letterSpacing: '0.03em' }}>OFFICE HOURS
              <li id="infoContent" style={{ paddingLeft: 0 }}>Monday to Friday</li>
              <li id="infoContent" style={{ paddingLeft: 0 }}>10:00 - 18:00</li>
            </ul>
            <ul id="infoContent" className='textAlignLeft mobileFontSize' style={{ paddingLeft: 0,  letterSpacing: '0.03em' }}>INSTAGRAM
              <li id="context mobileFontSize"><a href="https://www.instagram.com/studiobbb.co">@studiobbb</a></li>
            </ul>



            {/* <ul id="infoContent" className='textAlignLeft mobileFontSize'>For all project enquires,
                <li id="context mobileFontSize"><a href="mailto:hi@studiobbb.co">hi@studiobbb.co</a></li>
              </ul>
              <ul className='textAlignLeft mobileFontSize' style={{ fontSize: '16px', letterSpacing: '0.03em'}}>{ mobileView ?  <>Office Hours</> : <>OFFICE HOURS</> }
                <li id="context mobileFontSize">Monday to Friday</li>
                <li id="context mobileFontSize" style={{ letterSpacing: '0.03em' }}>10:00 - 18:00</li>
              </ul>
              <ul className='textAlignLeft mobileFontSize' style={{ fontSize: '16px', letterSpacing: '0.03em' }}>{ mobileView ?   <>Instagram</> : <>INSTAGRAM</> }
                <li id="context mobileFontSize"><a href="https://www.instagram.com/studiobbb.co">@studiobbb</a></li>
              </ul> */}

            </> :
            <>
            <tr>
            <td style={{width: '25%', verticalAlign:'top'}}>
              <ul className='textAlignLeft' style={{ fontSize: '16px', letterSpacing: '0.03em'}}>{ mobileView ?   <>Contact</> : <>CONTACT</> }
                <li id="context">For all project enquires,</li>
                <li id="context"><a href="mailto:hi@studiobbb.co">hi@studiobbb.co</a></li>
              </ul>
            </td>
            <td>
              <ul className='textAlignLeft' style={{ fontSize: '16px', letterSpacing: '0.03em'}}>{ mobileView ?  <>Office Hours</> : <>OFFICE HOURS</> }
                <li id="context">Monday to Friday</li>
                <li id="context" style={{ letterSpacing: '0.03em' }}>10:00 - 18:00</li>
              </ul>
              <ul></ul>
            </td>
            </tr>
            <ul className='textAlignLeft' style={{ fontSize: '16px', letterSpacing: '0.03em' }}>{ mobileView ?   <>Instagram</> : <>INSTAGRAM</> }
                <li id="context"><a href="https://www.instagram.com/studiobbb.co">@studiobbb</a></li>
              </ul>
              </>
            }
          </table>
        </div>
      </div>
      { mobileView ?
        <ul id="bottomInfoNav" className="infoFooterDisplay mobileFontSize" style={{ fontWeight:'lighter', letterSpacing: '0.05em', paddingBottom: '2%'}}>
          Copyrights &copy; 2023 
          <li id="context" className='mobileFontSize' style={{ fontWeight:'lighter', paddingRight: '20%', letterSpacing: '0.05em'}}>BBB Design Studio Sdn. Bhd. 202201025118 (1470815-M). All Rights Reserved</li>
        </ul>
        :
        <div id="bottomInfoNav"className="infoFooterDisplay laptopFontSize">Copyrights &copy; 2023 BBB Design Studio Sdn. Bhd. 202201025118 (1470815-M). All Rights Reserved</div>
      }
    </div>
  );
}

export default InfoPage;