import { Link } from 'react-router-dom';
import './landingPage.css';
import './loadingPage.css';
import './project.css';
import './navBar.css';
import { isMobile } from "react-device-detect";
import React, { useState, useEffect, useContext } from "react";
import { ViewContext } from './ViewContext';

export default function NavBar() {
  const path = window.location.pathname;
  console.log('location', path);
  const {mobileView, laptopView} = useContext(ViewContext)
  return (
    <>
      <div className="leftNavBar">
        <div className='studioBBBDiv'>
          { path != '/information' ?
          <h1 className="studioBBB" style={{display:'table-row-group'}}>
            <Link to="/">Studio BBB</Link>
          </h1>
          :
          <h1 className="studioBBB" style={{ color: 'rgb(255, 192, 103)', display:'table-row-group'}}>
            <Link to="/">Studio BBB</Link>
          </h1>
          }
        </div>
        { 
          mobileView ?  
            null
          :
          <div className='descriptionDiv'>
            { path != '/information' ? 
              <h1 className='projectDetailsFontSize descriptionHeader'>
                is an interior design studio believes every space
              </h1>
            :
              <h1 className='descriptionHeader' style={{ color: 'rgb(255, 192, 103)'}}>
                is an interior design studio believes every space
              </h1>
            }
            { path != '/information' ?
              <h1 className='projectDetailsFontSize descriptionHeader'>
                created is an expression of oneself
              </h1>
            :
              <h1 className='descriptionHeader' style={{ color: 'rgb(255, 192, 103)'}}>
                created is an expression of oneself
              </h1>
            }
          </div> 
        }
      </div>
      <div className='rightNavBar'>
        <div className='linkStyleDiv'>
        { path != '/information' ?
          <h1 className='linkStyle'>
            <Link to="/works"> Works</Link>
          </h1>
          :
          <h1 className='linkStyle' style={{ color: 'rgb(255, 192, 103)'}}>
            <Link to="/works"> Works</Link>
          </h1>
          }
        </div>
        <div className='linkStyleDiv'>
        { path != '/information' ?
          <h1 className='linkStyle'>
            <Link to="/information">Information</Link>
          </h1>
          :
          <h1 className='linkStyle' style={{ color: 'rgb(255, 192, 103)'}}>
            <Link to="/information">Information</Link>
          </h1>
          }
        </div>
      </div>
    </>
  );
}