import { Link } from 'react-router-dom';
import './landingPage.css';
import './loadingPage.css';
import './project.css';
import './navBar.css';

export default function NavBar() {    
    return(
      <div className="navDisplay">
            <table id="topnav">
              <tr>
                {/* <td>  </td> */}
                {/* <td className="logoHeader" style={{ textAlign: 'right'}}>
                  <h1 style={{ marginTop: 0, marginbottom: 0 }}><Link to="/">Studio BBB</Link></h1>
                </td>
                <td style={{ padding: 0 }}>
                  <ul style={{ marginTop: 0, marginBottom: 0 }}>
                    <li className='descriptionHeader'>is an interior design studio believes every space</li>
                    <li className='descriptionHeader'>created is an expression of oneself.</li>
                  </ul>
                </td> */}
                <td>
                <ul class="list-group list-group-horizontal" style={{textAlign: 'left', marginTop: 0, marginBottom: 0 }}>
                    <li class="list-group-item" style={{textAlign: 'center', display: 'inline', marginRight: '1%', verticalAlign: 'middle'}}><Link to="/">Studio BBB</Link></li>
                    <li class="list-group-item" style={{textAlign: 'center', display: 'inline-flex', verticalAlign:'super',  alignContent:'center'}}>
                        <ul class="" style={{textAlign: 'center', display: 'inline-grid', marginTop: 0}}>
                            <li className=' descriptionHeader' style={{textAlign: 'left', display: 'inline'}}>is an interior design studio believes every space</li>
                            <li className=' descriptionHeader' style={{textAlign: 'left', display: 'inline'}}>created is an expression of oneself.</li>
                        </ul>
                    </li>
                    </ul>
                </td>
                <td>
                  <ul class="list-group list-group-horizontal" style={{textAlign: 'right', marginTop: 0, marginBottom: 0 }}>
                    <li class="list-group-item" style={{textAlign: 'center', display: 'inline', marginRight: '2%'}}><Link to="/works"> Works</Link></li>
                    <li class="list-group-item" style={{textAlign: 'right', display: 'inline', marginLeft:'2%'}}><Link to="/information">Information</Link></li>
                  </ul>
                </td>
                
              </tr>
              </table>
              </div>
      );
}