import React, { useState } from 'react';
import './SquareName.scss';
import { SquareNameText } from './SquareNameText';

interface ISquareNameProps {
  isWhite ?: boolean;
  isLeft ?: boolean;
  displayedText : SquareNameText;
  setDisplayedText : (displayedText : SquareNameText) => void;
}

const SquareName : React.FC<ISquareNameProps> = props => {
  var [isMoving, setIsMoving] = useState(false);
  const animationDuration = 2000;
  var isMovingClassname = isMoving ? "is-moving" : "";
  var isWhite = props.isWhite === true ? "is-white" : "";
  var isLeft = props.isLeft === true ? "is-left" : "";

  var backgroundImage = props.isWhite === true ? "url('noise/noise-black.png')" : "url('noise/noise-white.png')";

  const onMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isMoving === false) {
      setIsMoving(true);
      if (props.displayedText === SquareNameText.KimAnh) {
        setTimeout(() => props.setDisplayedText(SquareNameText.Nguyen), animationDuration / 2);
      }
      else {
        setTimeout(() => props.setDisplayedText(SquareNameText.KimAnh), animationDuration / 2);
      }
      setTimeout(() => { setIsMoving(false) }, animationDuration);
    }
  }

  return (
    <div className={`square-name ${isMovingClassname} ${isWhite} ${isLeft}`} onMouseEnter={onMouseEnter}>
        <div className={`square-name-text`}>
            <div className={`square-name-text-side`}>
              {props.displayedText}
            </div>
            <div className={`square-name-cache line`} >
              <div className={`square-name-cache-half one`} style={{ backgroundImage: backgroundImage}}></div>
              <div className={`square-name-cache-half two`} style={{ backgroundImage: backgroundImage}}></div>
            </div>
            <div className={`square-name-cache column`}>
              <div className={`square-name-cache-half three`} style={{ backgroundImage: backgroundImage}}></div>
              <div className={`square-name-cache-half four`} style={{ backgroundImage: backgroundImage}}></div>
            </div>
        </div>
    </div>
  )
}
export default SquareName;
