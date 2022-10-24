import React from 'react';
import styled from 'styled-components';
import leftBtn from '../icons/arrow-left.png'; // png Icon
import rightBtn from '../icons/arrow-right.png'; // png Icon

const Button = styled.img`
  position: absolute;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  opacity: 70%;
  height: 10%;
  width: 10%;
  transform: translateY(-50%);
  left: ${(props) => props.side === 'prev' && 5}px;
  right: ${(props) => props.side === 'next' && 5}px;
`;

function Buttons({ handleClickPrev, handleClicknext }) {
  return (
    <>
      <Button src={leftBtn} side="prev" onClick={handleClickPrev} />
      <Button src={rightBtn} side="next" onClick={handleClicknext} />
    </>
  );
}

export default Buttons;
