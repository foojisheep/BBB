import './landingPage.css';
import './loadingPage.css';
import './project.css';

export default function LandingPage() {
    const content = projects.map((projects) =>
      <tr key={projects.id} onMouseEnter={() => hoverImage(projects.link, true)} onMouseLeave={() => hoverImage(projects.link, false)}>
        <td>  </td>
        <td>{projects.year}</td>
        <td>{projects.name}</td>
        <td>{projects.details}</td>
        <td>{projects.category}</td>
    </tr>
    // <div key={post.id}>
    //     <h3>{post.title}</h3>
    //     <p>{post.content}</p>
    // </div>
    );
      return(
          <div className="projectDisplay">
            <table id="customers">
                {content}
            </table>
          </div>
        );
  }

  const projects = [
    {id: 1, year: '  2022', name: 'Bolt & Witchwood', details: 'Not your average neighourhood cafe.', category: 'Hospo', link: ''},
    {id: 2, year: '      ', name: 'Poppykat', details: 'Recalled a certain aesthetic from Wes Anderson\'s Movie.', category: 'Hospo', link: ''},
    {id: 3, year: '      ', name: 'Kedai Coklat', details: 'Invokes a precious memory of broken chocholate bars.', category: 'Hospo', link: ''},
    {id: 4, year: '  2021', name: 'Hejau MK', details: 'Ecovative of sunny Palm Springs and Arizon Cliffs combines.', category: 'Resi', link: './resource/Hejau MK/IMG_1.JPG'},
    {id: 5, year: '  2020', name: 'Hejau PJ', details: 'Reminiscent of a small oasis.', category: 'Hospo', link: ''},
    {id: 6, year: '      ', name: 'Hejau PJ', details: 'Reminiscent of a small oasis.', category: 'Hospo', link: ''},
    {id: 7, year: '      ', name: 'Hejau PJ', details: 'Reminiscent of a small oasis.', category: 'Hospo', link: ''},
    {id: 8, year: '      ', name: 'Hejau PJ', details: 'Reminiscent of a small oasis.', category: 'Hospo', link: ''},
    {id: 9, year: '      ', name: 'Hejau PJ', details: 'Reminiscent of a small oasis.', category: 'Hospo', link: ''},
    {id: 10, year: '      ', name: 'Hejau PJ', details: 'Reminiscent of a small oasis.', category: 'Hospo', link: ''},
    {id: 11, year: '      ', name: 'Hejau PJ', details: 'Reminiscent of a small oasis.', category: 'Hospo', link: ''},
    {id: 12, year: '      ', name: 'Hejau PJ', details: 'Reminiscent of a small oasis.', category: 'Hospo', link: ''},
    {id: 13, year: '      ', name: 'Hejau PJ', details: 'Reminiscent of a small oasis.', category: 'Hospo', link: ''},
    {id: 14, year: '      ', name: 'Hejau PJ', details: 'Reminiscent of a small oasis.', category: 'Hospo', link: ''},
    {id: 15, year: '      ', name: 'Hejau PJ', details: 'Reminiscent of a small oasis.', category: 'Hospo', link: ''}
  ];

  function hoverImage(link, hover) {
    // if(hover){
    //   document.getElementById("myImg").src = {link};
    // }
  }