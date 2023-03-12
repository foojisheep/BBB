import { Link } from 'react-router-dom';
import './landingPage.css';
import './loadingPage.css';
import './project.css';
import './infoNavBar.css';
import { isMobile } from "react-device-detect";
import { useContext } from 'react';
import { ViewContext } from './ViewContext';

// export default function InfoNavBar() {    
//   const {mobileView, laptopView} = useContext(ViewContext);
//   const screenWidth = window.innerWidth;
//     return (
//         <div className="infoNavDisplay">
//           <div className="leftInfoNavBar">
//             <div className='studioBBBInfoDiv'>
//               <h1 className="studioInfoBBB" style={{display:'table-row-group'}}>
//                 <Link to="/">Studio BBB</Link>
//               </h1>
//             </div>
//             { mobileView ?  null : 
//             <div className='descriptionInfoDiv'>
//               <h1 className='descriptionInfoHeader'>
//                 is an interior design studio believes every space
//               </h1>
//               <h1 className='descriptionInfoHeader'>
//                 created is an expression of oneself
//               </h1>
//             </div> }
//           </div>
//           <div className='rightInfoNavBar'>
//             <div className='linkStyleInfoDiv'>
//               <h1 className='linkStyleInfo'>
//                 <Link to="/works"> Works</Link>
//               </h1>
//             </div>
//             <div className='linkStyleInfoDiv'>
//               <h1 className='linkStyleInfo'>
//                 <Link to="/information">Information</Link>
//               </h1>
//             </div>
//           </div>
//         </div>
//     );
// }

export default function InfoNavBar() {
  const {mobileView, laptopView} = useContext(ViewContext)
  return (
    <>
      <div className="leftNavBar">
        <div className='studioBBBDiv'>
          <h1 className="studioBBB" style={{display:'table-row-group', color: '#FFC572'}}>
            <Link to="/">Studio BBB</Link>
          </h1>
        </div>
        { 
          mobileView ?  
            null
          :
          <div className='descriptionDiv'>
            <h1 className='descriptionHeader' style={{ color: '#FFC572' }}>
              is an interior design studio believes every space
            </h1>
            <h1 className='descriptionHeader' style={{ color: '#FFC572' }}>
              created is an expression of oneself
            </h1>
          </div> 
        }
      </div>
      <div className='rightNavBar'>
        <div className='linkStyleDiv'>
          <h1 className='linkStyle' style={{ color: '#FFC572' }}>
            <Link to="/works"> Works</Link>
          </h1>
        </div>
        <div className='linkStyleDiv'>
          <h1 className='linkStyle' style={{ color: '#FFC572' }}>
            <Link to="/information">Information</Link>
          </h1>
        </div>
      </div>
    </>
  );
}