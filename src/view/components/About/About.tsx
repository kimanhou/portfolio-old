import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './About.scss';

const About : React.FunctionComponent = props => {
  return (
    <div className={`about`} style={{ backgroundImage: "url('noise/noise-black.png')"}}>
      <Navigation isWhite={true}/>
      <Logo isWhite={true}/>
    </div>
  )
}
export default About;
