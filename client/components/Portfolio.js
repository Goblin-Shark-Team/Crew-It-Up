import React from "react";
import Navbar from './Navbar.js';
import '../styles/portfolio.scss';
import SliderBody from './SliderBody.jsx'

export default function Portfolio(){

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
            </div>
        </div>
      </div>
    )
}

