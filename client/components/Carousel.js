import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';


const Wrapper = styled.div`
position: relative;
width: 45%;
margin: 0;
overflow: hidden;
box-shadow: 0 0 7px gray;
border: solid 30px rgb(18,18,18);

`;

const Slide = styled.div`
  display: flex;
  width: 100%;
  height: 440px;
  transition: transform 0.6s ease-in-out;
  transform: ${props => `translateX(${props.xPosition}px)`};
  img {
    width: 100%;
    height: 100%;
  }
`;

export default function Carousel({
  images,
  setWidth,
  xPosition,
  handleClickPrev,
  handleClicknext,
}) 

{
  const slideRef = useRef(images);

  useEffect(() => {
    console.log(images);
    if (slideRef.current) {
      console.log(slideRef.current)
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth]);
  
  return (
    <Wrapper>
      <Slide xPosition={xPosition} ref={slideRef}>
        {images.map((img, i) => (
          <img src={img} alt='no image' key={i} />
        ))}
      </Slide>
      <Buttons
        handleClickPrev={handleClickPrev}
        handleClicknext={handleClicknext}
      />
    </Wrapper>
  );
}
