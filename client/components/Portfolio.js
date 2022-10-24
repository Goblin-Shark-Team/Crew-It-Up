import React from "react";
import Navbar from './Navbar.js';
import '../styles/portfolio.scss';
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
      <div id='portfolio-body'>
        <Navbar />
        <div id='portfolio-title'>
          <h1 id='portfolio-name'>Cyrus Yari</h1>
        </div>
        <SliderBody />
        <div id='bio'>
            <p id='bio-text'>I am a cool photographer who takes cool pictures of very cool boats in Thailand.</p>
            <div id='contact' className="secondary-text">
              Contact me here.
              {/* add logic to get email address for photographer here */}
            </div>
        </div>
      </div>
    )
}

