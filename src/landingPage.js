import logoStart from './resource/logo-start.svg';
import logoMiddle from './resource/logo-middle.svg';
import logoEnd from './resource/logo-end.svg';
import './landingPage.css';
import './loadingPage.css';
import './workPage.css';
import { Navbar, Nav } from 'rsuite';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function LandingPage() {    
  const logos = [logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart];
  // const logos = [logoStart,logoStart,logoStart];
    const logo = logos.map((logo,index) => (
      <img key={index} className="loadingPage-image" src={logo} alt={logo.toString()} />
    ));
    return(
      <div>
      <nav className="nav">
      <Link to="/">BBB
      </Link>
      {/* <ul>
        <CustomLink>Work</CustomLink>
        <CustomLink>About</CustomLink>
      </ul> */}
    </nav>

    {/* <Nav>
      <Nav.Item className='nav'>Home</Nav.Item>
      <Nav.Item>News</Nav.Item>
      <Nav.Item>Products</Nav.Item>
    </Nav>
    <Nav pullRight>
      <Nav.Item>Settings</Nav.Item>
    </Nav> */}
  

        {/* <div className="loadingPage-full">
          {logo}
        </div> */}
      </div>
      );

      function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
      
        return (
          <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
              {children}
            </Link>
          </li>
        )
      }
}