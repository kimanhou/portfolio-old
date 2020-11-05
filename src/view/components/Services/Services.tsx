import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Services.scss';

const Services : React.FunctionComponent = props => {
  return (
    <div className={`services`} style={{ backgroundImage: "url('noise/noise-white.png')"}}>
      <Navigation />
      <Logo />
      SERVICES
    </div>
  )
}
export default Services;
