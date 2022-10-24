import React, { useState } from 'react';
import Carousel from './Carousel.js';
import '../styles/portfolio.scss';

export default function SliderBody(props) {
  

  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  

  
  const handleClickPrev = () => { 
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };
  
  const handleClicknext = () => {
    if (index === props.images.length - 1) {
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
        images={props.images}
        setWidth={setWidth}
        xPosition={xPosition}
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </div>
  );
}