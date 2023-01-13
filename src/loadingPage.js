import logoStart from './resource/logo-start.svg';
import logoMiddle from './resource/logo-middle.svg';
import logoEnd from './resource/logo-end.svg';
import './loadingPage.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import logoBig from  './resource/logo.svg';

const transition = { duration:1.4, ease: [0.6, 0.01, -0.05, 0.9], scale: 1.1};

export default function LoadingPage() {    
  // const logos = [logoEnd,logoStart,logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd];
  const logos = [logoBig,logoBig,logoBig];
    const logo = logos.map((logo,index) => (
      <img key={index} className="loadingPage-image" src={logo} alt={logo.toString()} />
    ));
    return(
      <>
      <motion.div transition={{ opacity: 0}}>
        <Link to="/works">
          <div className='defaultLandingPage-full'>
            {/* <div className='header-full'>
              <div className='col-2 logo-style'>
                <h1>Studio BBB</h1>
              </div>
            </div> */}
            <motion.div initial={{ height:'100%'}} transition={{ transition }} className="loadingPage-full vertical-container">
             {logo}
            </motion.div>
          </div>
        </Link>
        </motion.div>
      </>
    );
}