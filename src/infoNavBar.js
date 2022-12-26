import { Link } from 'react-router-dom';
import './landingPage.css';
import './loadingPage.css';
import './project.css';
import './infoNavBar.css';

export default function InfoNavBar() {    
    return(
      <div className='infoNavDisplay'>
        <table id="topInfoNav">
            <tr>
            {/* <td>  </td> */}
            <td className="logoHeader " style={{ textAlign: 'right'}}>
                <h1 style={{ marginTop: 0, marginbottom: 0 }}>Studio BBB</h1>
            </td>
            <td style={{ padding: 0 }}>
                <ul style={{ marginTop: 0, marginBottom: 0 }}>
                <li className='descriptionNavHeader'>is an interior design studio believes every space</li>
                <li className='descriptionNavHeader'>created is an expression of oneself.</li>
                </ul>
            </td>
            <td>   </td>
            <td>
                <ul class="list-group list-group-horizontal" style={{textAlign: 'right', marginTop: 0, marginBottom: 0 }}>
                <li class="list-group-item" style={{textAlign: 'center', display: 'inline', marginRight: '1%'}}> Works</li>
                <li class="list-group-item" style={{textAlign: 'right', display: 'inline'}}>  Information</li>
                </ul>
            </td>
            </tr>
        </table>
        </div>
      );
}