import React from 'react';
import Navigation from '../Navigation/Navigation';
import './About.scss';

const About : React.FunctionComponent = props => {
  return (
    <div className={`about`} style={{ backgroundImage: "url('noise/noise-black.png')"}}>
      <Navigation />
    </div>
  )
}
export default About;
