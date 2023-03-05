import { Link } from 'react-router-dom';
import './landingPage.css';
import './loadingPage.css';
import './project.css';
import './navBar.css';
import { isMobile } from "react-device-detect";
import React, { useState, useEffect, useContext } from "react";
import { ViewContext } from './ViewContext';


export default function NavBar() {
  // const screenWidth = window.innerWidth;

  const {mobileView, laptopView} = useContext(ViewContext)

  // const [mobileView, setMobileView] = useState(false);
  // const [laptopView, setLaptopView] = useState(false);

  
  // useEffect(() => {
  //   onResize()
  // }, [screenWidth]);


  // const onResize = () => { 
  //   console.log('enter resize');
  //   if(screenWidth < 500){
  //     setMobileView(true);
  //     setLaptopView(false);
  //     console.log('mobile');
  //   } else if(screenWidth > 500){
  //     setLaptopView(true);
  //     setMobileView(false);
  //     console.log('test laptop');
  //   }
    
  // }
  // const laptop = useContext(laptopView);

  return (
    <>
      <div className="leftNavBar">
        <div className='studioBBBDiv'>
          <h1 className="studioBBB" style={{display:'table-row-group'}}>
            <Link to="/">Studio BBB</Link>
          </h1>
        </div>
        { 
          mobileView ?  
            null
          :
          <div className='descriptionDiv'>
            <h1 className='descriptionHeader'>
              is an interior design studio believes every space
            </h1>
            <h1 className='descriptionHeader'>
              created is an expression of oneself
            </h1>
          </div> 
        }
      </div>
      <div className='rightNavBar'>
        <div className='linkStyleDiv'>
          <h1 className='linkStyle'>
            <Link to="/works"> Works</Link>
          </h1>
        </div>
        <div className='linkStyleDiv'>
          <h1 className='linkStyle'>
            <Link to="/information">Information</Link>
          </h1>
        </div>
      </div>
    </>
  );
}