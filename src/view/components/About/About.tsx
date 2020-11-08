import React from 'react';
import SquareName from '../Home/SquareName';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './About.scss';

const About : React.FunctionComponent = props => {
  return (
    <div className={`about`} style={{ backgroundImage: "url('noise/noise-black.png')"}}>
      <Navigation isWhite={true} isAbout={true}/>
      <Logo isWhite={true} isAbout={true}/>
      <SquareName isWhite={true} isLeft={true}/>
      <div className={`about-portrait`}>
        <img src="photos/portrait.png" />
      </div>
    </div>
  )
}
export default About;
