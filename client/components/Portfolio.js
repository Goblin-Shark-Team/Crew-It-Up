import React from "react";
import {useEffect,useState} from "react";
import Navbar from './Navbar.js';
import '../styles/portfolio.scss';
import SliderBody from './SliderBody.jsx'


export default function Portfolio(props){
  const[images, setImages] = useState([]);
  const[profileInfo, setProfileInfo] = useState({});

  console.log('here');
  useEffect(() => {
    fetch(`/photos/user/${props.id}`)
      .then(response => response.json())
      .then(data => {
        setImages(data.map(e => e.url));
      });
    fetch(`user/profile/${props.id}`)
      .then(response => response.json())
      .then(data => {
        setProfileInfo(data);
      });
   },[]);

    return (
      <div id='portfolio-body'>
        <Navbar />
        <div id='portfolio-title'>
          <h1 id='portfolio-name'>{`${profileInfo.firstname} ${profileInfo.lastname}`}</h1>
        </div>
        <SliderBody images={images}/>
        <div id='bio'>
            <p id='bio-text'>{profileInfo.bio}</p>
            <div id='contact' className="secondary-text">
              Contact me here.
            </div>
        </div>
      </div>
    )
}

