import './landingPage.css';
import './loadingPage.css';
import './workPage.css';
import Projects from "./project";
import Navbar from "./navBar";

export default function ProjectDetailPage() {    

    return(
      <div>
        <Navbar />
        <div className="landingPage-full">
          {logo}
        </div>
        <Projects />/
      </div>
      );
}