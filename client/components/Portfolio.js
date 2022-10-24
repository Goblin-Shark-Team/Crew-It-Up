import React from "react";
import '../styles/portfolio.scss';
import SearchBar from './Searchbar.jsx';
import SliderBody from './sliderbody.jsx'


// export default function Portfolio(){
//     //const[images, setImages] = useState([]);
//   useEffect(() => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//    .then(response => response.json())
//    .then(data => setImages(data.message))
//    },[])
  
    

//     return (
//       <div id="portfolio-main">
//         <header id='porfolio-name'><h1>Photographer Name</h1></header>
          
//             <SliderBody />
         
//           <div id='bio'>
//               <p id='bio-text'>jahsdfkljahsdjkfhaksjdhflasjdkkkkflkasdasdff</p>
          
//           </div>
//       </div>
//     )
// }
//function GalleryPage() {
 //return (
  // <div className="gallery-page">
   //  <h1>I'm a gallery!</h1>
  // </div>
// );
//}
//export default GalleryPage;

export default function Portfolio(){
  //   const[images, setImages] = useState([]);
  // // useEffect(() => {
  // //   fetch("https://dog.ceo/api/breeds/image/random")
  // //  .then(response => response.json())
  // //  .then(data => setImages(data.message))
  // //  },[])
  
    

    return (
      <div id='body'>
        <nav id='navbar'>
          <div id='logo'>Crew It Up</div>
          <section id='right-nav'>
            <nav className="secondary-text">Feed</nav>
            <nav className="secondary-text">Profile</nav>
            <nav className="secondary-text">Settings</nav>
          </section>
        </nav>
        <div id='portfolio-title'>
          <h1 id='portfolio-name'>Photographer Name</h1>
        </div>
        <SliderBody />
        <div id='bio'>
            <p id='bio-text'>I am a cool photographer who takes cool pictures of little cutie pie doggy woggies</p>
            <div id='contact' className="secondary-text">
              Contact me here.
              {/* add logic to get email address for photographer here */}
            </div>
        </div>
      </div>
    )
}

