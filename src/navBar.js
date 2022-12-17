import logoStart from './resource/logo-start.svg';
import logoMiddle from './resource/logo-middle.svg';
import logoEnd from './resource/logo-end.svg';
import './landingPage.css';
import './loadingPage.css';
import './workPage.css';

export default function NavBar() {    
    return(
      <div className="navDisplay">
            <table id="topnav">
              <tr>
                {/* <td>  </td> */}
                <td className="logoHeader" style={{ textAlign: 'right'}}>
                  <h1 style={{ marginTop: 0, marginbottom: 0 }}>Studio BBB</h1>
                </td>
                <td style={{ padding: 0 }}>
                  <ul style={{ marginTop: 0, marginBottom: 0 }}>
                    <li className='descriptionHeader'>is an interior design studio believes every space</li>
                    <li className='descriptionHeader'>created is an expression of oneself.</li>
                  </ul>
                </td>
                <td>   </td>
                <td>
                  <ul class="list-group list-group-horizontal" style={{textAlign: 'right', marginTop: 0, marginBottom: 0 }}>
                    <li class="list-group-item" style={{textAlign: 'center', display: 'inline', marginRight: '3%'}}> Works </li>
                    <li class="list-group-item" style={{textAlign: 'right', display: 'inline', marginRight:'2%'}}>  Information</li>
                  </ul>
                </td>
                
              </tr>
              </table>
              </div>
        // <div className='topnav row'>
        //   <div className='nav col-2'> 
        //     <h1>Studio BBB</h1>
        //    </div>
        //    <div className='descp col-8'> 
        //    <ul>
        //     <li className='row descrip'>is an interior design studio believes every space</li>
        //     <li className='row descrip'>created is an expression of oneself.</li>
        //   </ul>

        //   {/* Previous way of displaying desciption - but have issue with putting center for entire description }
        //       {/* <p className='row descrip top-desc'>is an interior design studio believes every space</p>
        //       <p className='row descrip bottom-desc'>created is an expression of oneself.</p> */}

        //   </div>
        //   <div className='topnav-right col-1'>
        //     {/* <ul>
        //       <li><a href="#">Work</a></li>
        //       <li><a href="#">Information</a></li>
        //     </ul> */}
        //       <a>Work</a>
        //     </div>
        //     <div className='topnav-right col-1'>
        //       <a>Information</a>
        //     </div>
        // </div>
      );
}