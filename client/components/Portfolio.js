import React, { useState, useEffect } from "react";
import '../styles/portfolio.scss';
import SliderBody from './sliderbody.jsx'

export default function Portfolio(){
    //const[images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
   .then(response => response.json())
   .then(data => setImages(data.message))
   },[])
  
    

    return (
      <div id="portfolio-main">
        <header id='porfolio-name'><h1>Photographer Name</h1></header>
          
            <SliderBody />
         
          <div id='bio'>
              <p id='bio-text'>jahsdfkljahsdjkfhaksjdhflasjdkkkkflkasdasdff</p>
          
          </div>
      </div>
    )
}