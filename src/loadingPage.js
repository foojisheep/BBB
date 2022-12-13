import logoStart from './resource/logo-start.svg';
import logoMiddle from './resource/logo-middle.svg';
import logoEnd from './resource/logo-end.svg';
import './loadingPage.css';

function Header(){

}

export default function LoadingPage() {    
  const logos = [logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart,logoMiddle,logoEnd,logoStart];
  // const logos = [logoStart,logoStart,logoStart];
    const logo = logos.map((logo,index) => (
      <img key={index} className="loadingPage-image" src={logo} alt={logo.toString()} />
    ));
    return(
      <div className='defaultPage-full'>
        {/* <div className='header-full'>
          <div className='col-2 logo-style'>
            <h1>Studio BBB</h1>
          </div>
        </div> */}
        <div className="loadingPage-full">
          {logo}
        </div>
      </div>
    );
}