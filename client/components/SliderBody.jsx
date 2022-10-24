import React, { useState } from 'react';
import Carousel from './Carousel.js';
import '../styles/portfolio.scss';

export default function SliderBody() {
  
  const images = [ 'https://www.desktopbackground.org/download/3440x1440/2011/04/22/191767_ultra-hd-4k-thailand-wallpapers-hd-desktop-backgrounds-3840x2400_3840x2400_h.jpg', 'http://wallpapers.net/web/wallpapers/beautiful-palm-trees-at-the-beach-hd-wallpaper/5120x2160.jpg', 'http://wallpapers.net/web/wallpapers/sunset-beach-resort/5120x2160.jpg', 'https://cdn.wallpapersafari.com/76/36/8Rp56H.jpg' ];

  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  

  
  const handleClickPrev = () => { 
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };
  
  const handleClicknext = () => {
    if (index === images.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };
  
  return (
    <div id='wrap'>
      <Carousel
        images={images}
        setWidth={setWidth}
        xPosition={xPosition}
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </div>
  );
}