import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SquareName from '../SquareName/SquareName';
import { SquareNameText } from '../SquareName/SquareNameText';
import './Home.scss';
import IAm from './IAm';

interface IHomeProps {
  isVisible : boolean;
  displayedSquareNameText : SquareNameText;
  setDisplayedSquareNameText : (displayedText : SquareNameText) => void;
}

const Home : React.FC<IHomeProps> = props => {
  var isVisibleClassname = props.isVisible ? "is-visible" : "";

  return (
    <div className={`home ${isVisibleClassname}`}>
      <div className={`home-background`} style={{ backgroundImage: "url('noise/noise-white.png')"}}></div>
      <Navigation isHome={true}/>
      <Logo isHome={true}/>
      <SquareName displayedText={props.displayedSquareNameText} setDisplayedText={props.setDisplayedSquareNameText} isLeft={!props.isVisible}/>
      <IAm isVisible={props.isVisible}/>
    </div>
  )
}
export default Home;
