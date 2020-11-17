import React from 'react';
import Languages from '../Languages/Languages';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Services.scss';

const Services : React.FunctionComponent = props => {
  return (
    <div className={`services`} style={{ backgroundImage: "url('noise/noise-white.png')"}}>
      <Navigation isServices={true}/>
      <Logo isServices={true}/>
      SERVICES
    </div>
  )
}
export default Services;
