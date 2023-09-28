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
         <ul style={{ textAlign: 'left',paddingTop:'3%', width: '100%', whiteSpace: 'none'}}>
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
            <ul className='textAlignLeft mobileFontSize'>For all project enquires,
                <li id="context mobileFontSize"><a href="mailto:hi@studiobbb.co">hi@studiobbb.co</a></li>
              </ul>
              <ul className='textAlignLeft mobileFontSize'>{ mobileView ?  <>Office Hours</> : <>OFFICE HOURS</> }
                <li id="context mobileFontSize">Monday to Friday</li>
                <li id="context mobileFontSize">10:00 - 18:00</li>
              </ul>
              <ul className='textAlignLeft mobileFontSize'>{ mobileView ?   <>Instagram</> : <>INSTAGRAM</> }
                <li id="context mobileFontSize"><a href="https://www.instagram.com/studiobbb.co">@studiobbb</a></li>
              </ul>
            </> :
            <>
            <tr>
            <td style={{width: '25%', verticalAlign:'top'}}>
              <ul className='textAlignLeft '>{ mobileView ?   <>Contact</> : <>CONTACT</> }
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
            <ul className='textAlignLeft ' style={{ fontSize: '18px' }}>{ mobileView ?   <>Instagram</> : <>INSTAGRAM</> }
                <li id="context"><a href="https://www.instagram.com/studiobbb.co">@studiobbb</a></li>
              </ul>
              </>
            }
          </table>
        </div>
      </div>
      { mobileView ?
        <div id="bottomInfoNav"className="infoFooterDisplay mobileFontSize">Studio BBB &copy; 2023</div>
        :
        <div id="bottomInfoNav"className="infoFooterDisplay laptopFontSize">Studio BBB &copy; 2023</div>
      }
    </div>
  );
}

export default InfoPage;