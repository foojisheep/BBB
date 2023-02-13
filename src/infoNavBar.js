import { Link } from 'react-router-dom';
import './landingPage.css';
import './loadingPage.css';
import './project.css';
import './infoNavBar.css';
import { isMobile } from "react-device-detect";

export default function InfoNavBar() {    
    return (
        <div className="infoNavDisplay">
          <div className="leftInfoNavBar">
            <div className='studioBBBInfoDiv'>
              <h1 className="studioInfoBBB" style={{display:'table-row-group'}}>
                <Link to="/">Studio BBB</Link>
              </h1>
            </div>
            { isMobile ?  (<></>) : (
            <div className='descriptionInfoDiv'>
              <h1 className='descriptionInfoHeader'>
                is an interior design studio believes every space
              </h1>
              <h1 className='descriptionInfoHeader'>
                created is an expression of oneself
              </h1>
            </div> )}
          </div>
          <div className='rightInfoNavBar'>
            <div className='linkStyleInfoDiv'>
              <h1 className='linkStyleInfo'>
                <Link to="/works"> Works</Link>
              </h1>
            </div>
            <div className='linkStyleInfoDiv'>
              <h1 className='linkStyleInfo'>
                <Link to="/information">Information</Link>
              </h1>
            </div>
          </div>
        </div>
    );
}

function InfoNavBar1() { 
    return(
      <div className='infoNavDisplay'>
        <table id="topInfoNav">
            <tr>
            {/* <td>  </td> */}
            {/* <td className="logoHeader list-group list-group-horizontal" style={{ textAlign: 'right'}}>
                <h1 style={{ marginTop: 0, marginbottom: 0 }}><Link to="/">Studio BBB</Link></h1>
                <ul style={{ marginTop: 0, marginBottom: 0 , padding: 0}}>
                <li className='descriptionNavHeader'>is an interior design studio believes every space</li>
                <li className='descriptionNavHeader'>created is an expression of oneself.</li>
                </ul>
            </td> */}
            <td>
                <ul class="list-group list-group-horizontal" style={{textAlign: 'left', marginTop: 0, marginBottom: 0 }}>
                    <li class="list-group-item" style={{textAlign: 'center', display: 'inline', marginRight: '1%', verticalAlign: 'middle'}}><Link to="/">Studio BBB</Link></li>
                    <li class="list-group-item" style={{textAlign: 'center', display: 'inline-flex', verticalAlign:'super', alignContent:'center'}}>
                        <ul class="" style={{textAlign: 'center', display: 'inline-grid', marginTop: 0}}>
                            <li className=' descriptionNavHeader' style={{textAlign: 'left', display: 'inline'}}>is an interior design studio believes every space</li>
                            <li className=' descriptionNavHeader' style={{textAlign: 'left', display: 'inline'}}>created is an expression of oneself.</li>
                        </ul>
                    </li>
                    {/* <li><h1 style={{ marginTop: 0, marginbottom: 0 }}><Link to="/">Studio BBB</Link></h1></li>
                    <li>
                        <ul style={{ marginTop: 0, marginBottom: 0 , padding: 0}}>
                            <li className='descriptionNavHeader'>is an interior design studio believes every space</li>
                            <li className='descriptionNavHeader'>created is an expression of oneself.</li>
                        </ul>
                    </li> */}
                </ul>
            </td>
            {/* <td style={{ padding: 0 }}>
                <ul style={{ marginTop: 0, marginBottom: 0 , padding: 0}}>
                <li className='descriptionNavHeader'>is an interior design studio believes every space</li>
                <li className='descriptionNavHeader'>created is an expression of oneself.</li>
                </ul>
            </td> */}
            <td>   </td>
            <td>
                <ul class="list-group list-group-horizontal" style={{textAlign: 'right', marginTop: 0, marginBottom: 0 }}>
                <li class="list-group-item" style={{textAlign: 'center', display: 'inline', marginRight: '2%'}}><Link to="/works"> Works</Link></li>
                <li class="list-group-item" style={{textAlign: 'right', display: 'inline', marginLeft: '2%'}}><Link to="/information">Information</Link></li>
                </ul>
            </td>
            </tr>
        </table>
        </div>
      );
}