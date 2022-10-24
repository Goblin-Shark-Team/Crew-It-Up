import React from "react";
import {useEffect,useState} from "react";
import Navbar from './Navbar.js';
import '../styles/portfolio.scss';
import SliderBody from './SliderBody.jsx'


export default function Portfolio(props){
  const[images, setImages] = useState([]);
  console.log('here');
  useEffect(() => {
    fetch(`/photos/user/${props.id}`)
      .then(response => response.json())
      .then(data => {
        setImages(data.map(e => e.url));
      })
   },[]);

    return (
      <div id='portfolio-body'>
        <Navbar />
        <div id='portfolio-title'>
          <h1 id='portfolio-name'>Cyrus Yari</h1>
        </div>
        <SliderBody images={images}/>
        <div id='bio'>
            <p id='bio-text'>I am a cool photographer who takes cool pictures of very cool boats in Thailand.</p>
            <div id='contact' className="secondary-text">
              Contact me here.
            </div>
        </div>
      </div>
    )
}

