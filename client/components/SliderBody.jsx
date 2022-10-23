import React, { useState } from 'react';
import Carousel from './Carousel.js';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(18, 18, 18);
`;

export default function SliderBody() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  
  const images = [ 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_2944.jpg', 'https://images.dog.ceo/breeds/brabancon/n02112706_473.jpg', 'https://images.dog.ceo/breeds/akita/Akita_hiking_in_Shpella_e_Pellumbasit.jpg' ];
  
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
    <Wrapper className="App">
      <Carousel
        images={images}
        setWidth={setWidth}
        xPosition={xPosition}
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </Wrapper>
    </div>
  );
}