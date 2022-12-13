import logoStart from './resource/logo-start.svg';
import logoMiddle from './resource/logo-middle.svg';
import logoEnd from './resource/logo-end.svg';
import './landingPage.css';
import './loadingPage.css';
import './workPage.css';
import { Navbar, Nav } from 'rsuite';

export default function LandingPage() {    
  const logos = [logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart];
  // const logos = [logoStart,logoStart,logoStart];
    const logo = logos.map((logo,index) => (
      <img key={index} className="loadingPage-image" src={logo} alt={logo.toString()} />
    ));
    return(
      <div>
        <Navbar>
    <Navbar.Brand href="#">RSUITE</Navbar.Brand>
    <Nav>
      <Nav.Item>Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Products</Nav.Item>
    </Nav>
    <Nav pullRight>
      <Nav.Item>Settings</Nav.Item>
    </Nav>
  </Navbar>
        <div className='topnav'>
          {/* <div className='col'> */}
          {/* <a>Studio BBB</a>
          <a className='descrip'>is an interior design studio believes every space created is an expression of oneself.</a>
          <div className='topnav-right'>
            <a>Work</a>
            <a>Information</a>
          </div> */}


          {/* <div className="col-3"><h1>Studio BBB</h1></div>
          <div className='col-3'><p>is an interior design studio believes every space created is an expression of oneself.</p></div>
          <div className='header-full col-3'>
            <h1>Work</h1>
          </div>
          <div className='header-full col-3'>
            <h1>Information</h1>
          </div> */}
          {/* </div> */}
        </div>
        {/* <div className="loadingPage-full">
          {logo}
        </div> */}
        <div className="font">
          
        </div>
      </div>
      );
}