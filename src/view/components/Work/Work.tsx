import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Work.scss';

const Work : React.FunctionComponent = props => {
  return (
    <div className={`work`} style={{ backgroundImage: "url('noise/noise-black.png')"}}>
      <Navigation isWhite={true}/>
      <Logo isWhite={true}/>
      WORK
    </div>
  )
}
export default Work;
